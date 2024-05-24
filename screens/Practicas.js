import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Cuestionario() {
    const navigation = useNavigation();
    const [respuestas, setRespuestas] = useState(new Array(preguntas.length).fill(null));

    // Función para manejar la selección de una respuesta para una pregunta específica
    const handleRespuestaSeleccionada = (index, respuesta) => {
        // Creamos una copia del array de respuestas
        let nuevasRespuestas = [...respuestas];
        // Asignamos la respuesta seleccionada
        nuevasRespuestas[index] = respuesta;
        // Actualizamos el estado
        setRespuestas(nuevasRespuestas);
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.cuestionarioContainer}>
                        <Text style={styles.titulo}>PRÁCTICA</Text>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logoText}>AI</Text>
                        </View>

                        <View style={styles.preguntasContainer}>
                            {preguntas.map((pregunta, index) => (
                                <View key={index}>
                                    <Text style={styles.preguntaTexto}>{pregunta.texto}</Text>
                                    <TouchableOpacity onPress={() => handleRespuestaSeleccionada(index, "Si")}>
                                        <View style={styles.respuestaContainer}>
                                            <View style={[styles.respuestaSeleccionada, { backgroundColor: respuestas[index] === "Si" ? "#1b1464" : "#fff" }]} />
                                            <Text>{pregunta.opcionSi}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleRespuestaSeleccionada(index, "No")}>
                                        <View style={styles.respuestaContainer}>
                                            <View style={[styles.respuestaSeleccionada, { backgroundColor: respuestas[index] === "No" ? "#1b1464" : "#fff" }]} />
                                            <Text>{pregunta.opcionNo}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("ModuloCalificacion")}
                            style={styles.goButton}
                        >
                            <Text style={styles.goButtonText}>Go</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const preguntas = [
    {
        texto: "Sabes que es ritmo?",
        opcionSi: "Si",
        opcionNo: "No"
    },
    {
        texto: "Sabes que es melodia?",
        opcionSi: "Sí",
        opcionNo: "No"
    },
    {
        texto: "Sabes que es Arpegio?",
        opcionSi: "Si",
        opcionNo: "No"
    },
    {
        texto: "Sabes que es Paul mute?",
        opcionSi: "Si",
        opcionNo: "No"
    },
    {
        texto: "Conoces la técnica Pua alternada?",
        opcionSi: "Si",
        opcionNo: "No"
    },
    {
        texto: "Conoces la técnica Sweet picking?",
        opcionSi: "Si",
        opcionNo: "No"
    },
    // Agrega más preguntas aquí si es necesario
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
    respuestaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    respuestaSeleccionada: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#1b1464",
        marginRight: 10,
    },
    goButton: {
        backgroundColor: "#1b1464",
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    goButtonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
});

export default Cuestionario;