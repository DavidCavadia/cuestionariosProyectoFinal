import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Importa axios

function Cuestionario() {
    const navigation = useNavigation();
    const [respuestas, setRespuestas] = useState({});

    // Función para manejar la selección de una respuesta para una pregunta específica
    const handleRespuestaSeleccionada = (idPregunta, respuesta) => {
        // Actualizamos el estado con la nueva respuesta
        setRespuestas({...respuestas, [idPregunta]: respuesta});
    };

    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        // Realiza la solicitud HTTP POST al servidor con las respuestas
        axios.post("http://192.168.205.67:5000/guardar-resultados", respuestas)
            .then(response => {
                console.log("Respuestas enviadas correctamente:", response.data);
                // Navega a la siguiente pantalla o realiza otra acción
                navigation.navigate("ModuloCalificacion");
            })
            .catch(error => {
                console.error("Error al enviar las respuestas:", error);
                // Maneja el error de acuerdo a tus necesidades
            });
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.cuestionarioContainer}>
                        <Text style={styles.titulo}>Cuestionario: A</Text>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logoText}>AI</Text>
                        </View>

                        <View style={styles.preguntasContainer}>
                            {preguntas.map((pregunta) => (
                                <View key={pregunta.id}>
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

                        <Pressable onPress={handleSubmit} style={styles.enviarButton}>
                            <Text style={styles.enviarButtonText}>Enviar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const preguntas = [
    {
        id: 1,
        texto: "Sabes que es ritmo?",
        opcionSi: "Si",
        opcionNo: "No"
    },
    {
        id: 2,
        texto: "Sabes que es melodia?",
        opcionSi: "Sí",
        opcionNo: "No"
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6c6898",
    },
    cuestionarioContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "3%",
        marginBottom: "5%",
        color: "white",
    },
    logoContainer: {
        backgroundColor: "#1b1464",
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    logoText: {
        fontSize: 40,
        color: "white",
    },
    preguntasContainer: {
        width: "100%",
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
    },
    respuestaTexto: {
        color: "white",
        fontSize: 18,
    },
    enviarButton: {
        backgroundColor: "#1b1464",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
    },
    enviarButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Cuestionario;