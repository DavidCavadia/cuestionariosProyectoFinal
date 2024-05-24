import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// Definición de las preguntas del cuestionario
const preguntas = [
    {
        id: 1,
        texto: "¿Sabes qué es ritmo?",
        opcionSi: "Sí",
        opcionNo: "No"
    },
    {
        id: 2,
        texto: "¿Sabes qué es melodía?",
        opcionSi: "Sí",
        opcionNo: "No"
    },
];

function Cuestionario() {
    const navigation = useNavigation(); // Hook para la navegación entre pantallas
    const [respuestas, setRespuestas] = useState({}); // Estado para almacenar las respuestas seleccionadas
    const [loading, setLoading] = useState(false); // Estado para controlar la visualización del indicador de carga

    // Maneja la selección de una respuesta
    const handleRespuestaSeleccionada = (idPregunta, respuesta) => {
        setRespuestas({ ...respuestas, [idPregunta]: respuesta });
    };

    // Función para enviar las respuestas al backend
    const add = () => {
        // Verifica que todas las preguntas hayan sido respondidas
        if (Object.keys(respuestas).length !== preguntas.length) {
            Alert.alert("Error", "Por favor responde todas las preguntas antes de enviar.");
            return;
        }

        setLoading(true); // Muestra el indicador de carga
        axios.post("http://192.168.137.1:5000/guardar-resultados", respuestas)
            .then(response => {
                setLoading(false); // Oculta el indicador de carga
                console.log("Respuestas enviadas correctamente:", response.data);
                navigation.navigate("ModuloCalificacion"); // Navega a la siguiente pantalla
            })
            .catch(error => {
                setLoading(false); // Oculta el indicador de carga
                console.error("Error al enviar las respuestas:", error);
                Alert.alert("Error", "Hubo un problema al enviar tus respuestas. Por favor, intenta nuevamente.");
            });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>AI</Text>
                    </View>
                    <View style={styles.cuestionarioContainer}>
                        <Text style={styles.titulo}>Cuestionario: B</Text>
                        <View style={styles.preguntasContainer}>
                            {preguntas.map((pregunta) => (
                                <View key={pregunta.id} style={styles.preguntaContainer}>
                                    <Text style={styles.preguntaTexto}>{pregunta.texto}</Text>
                                    <View style={styles.respuestasContainer}>
                                        <Pressable
                                            style={({ pressed }) => [
                                                styles.respuesta,
                                                { backgroundColor: respuestas[pregunta.id] === "Si" || pressed ? "#1b1464" : "#fff" }
                                            ]}
                                            onPress={() => handleRespuestaSeleccionada(pregunta.id, "Si")}
                                        >
                                            <Text style={styles.respuestaTexto}>{pregunta.opcionSi}</Text>
                                        </Pressable>
                                        <Pressable
                                            style={({ pressed }) => [
                                                styles.respuesta,
                                                { backgroundColor: respuestas[pregunta.id] === "No" || pressed ? "#1b1464" : "#fff" }
                                            ]}
                                            onPress={() => handleRespuestaSeleccionada(pregunta.id, "No")}
                                        >
                                            <Text style={styles.respuestaTexto}>{pregunta.opcionNo}</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            ))}
                        </View>

                        {loading ? (
                            <ActivityIndicator size="large" color="#1b1464" style={styles.loading} />
                        ) : (
                            <Pressable onPress={add} style={styles.enviarButton}>
                                <Text style={styles.enviarButtonText}>Enviar</Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// Estilos para los componentes
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#6c6898",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    logoContainer: {
        backgroundColor: "#1b1464",
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        marginTop: 20,
    },
    logoText: {
        fontSize: 40,
        color: "white",
    },
    cuestionarioContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "3%",
        marginBottom: "5%",
        color: "white",
    },
    preguntasContainer: {
        width: "100%",
    },
    preguntaContainer: {
        marginBottom: 15,
    },
    preguntaTexto: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
    },
    respuestasContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    respuesta: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "#1b1464",
    },
    respuestaTexto: {
        color: "#1b1464",
        fontSize: 18,
    },
    enviarButton: {
        backgroundColor: "#1b1464",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 30,
    },
    enviarButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    loading: {
        marginTop: 20,
    },
});

export default Cuestionario;















