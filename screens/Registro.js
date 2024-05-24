import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
//___________________________Funsion de Ventana_______________________
function Registro  ()  {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                width:"auto",
                height:"auto",
                flex:0,
                //backgroundColor:"blue"
            }}
        >
            <View style={{
                height:"auto",
                width:"auto",
            }}>
            {/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Inicio Seccion
            </Text> */}
            <View style={{height:"auto", bottom:2}}>
                <Image 
                    source={require('../image/ImagenInicio.png')}
                    style={{
                        position: 'absolute',
                        width: "100%",
                        height: 393,
                        alignSelf:"center",
                    }}
                />
                <View style={{width: "70%",
                            height: "95%",
                            //backgroundColor:"green",
                            alignSelf:"center",
                            top:"10%"
                        }}>
                    <Image
                        source={require('../image/pua.png')}
                        style={{
                            position: 'absolute',
                            width: "52%",
                            height: "94%",
                            top:"5%",
                            alignSelf:"center"
                        }}
                    />
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:70}}>
                        <View 
                            style={{
                                //backgroundColor: "#00d9dd",
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                //justifyContent:"center",
                                margin:0,
                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:35,
                                alignSelf:"center",
                                marginRight:20,
                                top:1,
                                left:-10
                            }}
                        />
                        <TextInput
                            style={{
                                width: '20%',
                                height: 18,
                                backgroundColor: '#fff',
                                //marginBottom: 50,
                                paddingHorizontal: 3,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="Usuario"
                        />
                    </View>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
                        <View 
                            style={{
                                //backgroundColor: "#00d9dd",
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                //justifyContent:"center",
                                margin:0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:36,
                                alignSelf:"center",
                                marginRight:20,
                                top:1,
                                left:-10
                            }}
                        />
                        <TextInput
                            style={{
                                width: '20%',
                                height: 18,
                                backgroundColor: '#fff',
                                //marginBottom: 50,
                                paddingHorizontal: 2,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="Contraseña"
                        />
                    </View>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
                        <View 
                            style={{
                                //backgroundColor: "#00d9dd",
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                //justifyContent:"center",
                                margin:0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:36,
                                alignSelf:"center",
                                marginRight:20,
                                top:1,
                                left:-5
                            }}
                        />
                        <TextInput
                            style={{
                                width: '20%',
                                height: 18,
                                backgroundColor: '#fff',
                                //marginBottom: 50,
                                paddingHorizontal: 2,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="Gmail"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Inicio")}
                        style={{
                            backgroundColor: "#00d9dd",
                            marginTop: 1,
                            width: "10%",
                            height:20,
                            padding: 0,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                            top:15
                        }}
                    >
                        <Text 
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                color: "#1b1464",
                                top:1,
                                fontWeight:"bold"
                                
                            }}
                        
                        >Iniciar

                        </Text>
                        <Image
                            source={require('../image/Corchea.png')}
                            style={{
                                width:15,
                                height:25,
                                alignSelf:"flex-start",
                                margin:1,
                                top:-20,
                                left:-25
                                }}
                            />
                    </TouchableOpacity>                   
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}
export default Registro;

// <SafeAreaView
        //     style={{
        //         width:"auto",
        //         height:"auto",
        //     }}
        // >
        //     <View style={{
        //         height:"auto",
        //         width:"auto",
        //     }}>
        //     {/* <Text
        //         style={{
        //             fontSize:30,
        //             textAlign: "center",
        //             marginTop:"0%"
        //         }}
        //         >Inicio Seccion
        //     </Text> */}
        //     <View style={{height:"auto", bottom:2}}>
        //         <Image 
        //             source={require('../image/ImagenInicio.png')}
        //             style={{
        //                 position: 'absolute',
        //                 width: "100%",
        //                 height: 393,
        //                 alignSelf:"center",
        //             }}
        //         />
        //         <View style={{width: "70%",
        //                     height: "95%",
        //                     //backgroundColor:"green",
        //                     alignSelf:"center",
        //                     top:"10%"
        //                 }}>
        //             <Image
        //                 source={require('../image/pua.png')}
        //                 style={{
        //                     position: 'absolute',
        //                     width: "52%",
        //                     height: "94%",
        //                     top:"5%",
        //                     alignSelf:"center"
        //                 }}
        //             />
        //             <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:70}}>
        //                 <View 
        //                     style={{
        //                         //backgroundColor: "#00d9dd",
        //                         width:30,
        //                         height:30,
        //                         position:"absolute",
        //                         top:1,
        //                         borderRadius:50,
        //                         alignSelf:"center",
        //                         //justifyContent:"center",
        //                         margin:0,
        //                     }}
        //                 >
        //                 </View>
        //                 <Image
        //                     source={require('../image/ClaveSol.png')}
        //                     style={{
        //                         width:16,
        //                         height:35,
        //                         alignSelf:"center",
        //                         marginRight:20,
        //                         top:1,
        //                         left:8
        //                     }}
        //                 />
        //                 <TextInput
        //                     style={{
        //                         width: '15%',
        //                         height: 18,
        //                         backgroundColor: '#fff',
        //                         //marginBottom: 50,
        //                         paddingHorizontal: 10,
        //                         top:1,
        //                         borderRadius: 10,
        //                     }}
        //                     placeholder="Usuario"
        //                 />
        //             </View>
        //             <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
        //                 <View 
        //                     style={{
        //                         //backgroundColor: "#00d9dd",
        //                         width:30,
        //                         height:30,
        //                         position:"absolute",
        //                         top:1,
        //                         borderRadius:50,
        //                         alignSelf:"center",
        //                         //justifyContent:"center",
        //                         margin:0,

        //                     }}
        //                 >
        //                 </View>
        //                 <Image
        //                     source={require('../image/ClaveSol.png')}
        //                     style={{
        //                         width:16,
        //                         height:35,
        //                         alignSelf:"center",
        //                         marginRight:20,
        //                         top:1,
        //                         left:8
        //                     }}
        //                 />
        //                 <TextInput
        //                     style={{
        //                         width: '15%',
        //                         height: 18,
        //                         backgroundColor: '#fff',
        //                         //marginBottom: 50,
        //                         paddingHorizontal: 10,
        //                         top:1,
        //                         borderRadius: 10,
        //                     }}
        //                     placeholder="Contraseña"
        //                 />
        //             </View>
        //             <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
        //                 <View 
        //                     style={{
        //                         //backgroundColor: "#00d9dd",
        //                         width:30,
        //                         height:30,
        //                         position:"absolute",
        //                         top:1,
        //                         borderRadius:50,
        //                         alignSelf:"center",
        //                         //justifyContent:"center",
        //                         margin:0,

        //                     }}
        //                 >
        //                 </View>
        //                 <Image
        //                     source={require('../image/ClaveSol.png')}
        //                     style={{
        //                         width:16,
        //                         height:35,
        //                         alignSelf:"center",
        //                         marginRight:20,
        //                         top:1,
        //                         left:8
        //                     }}
        //                 />
        //                 <TextInput
        //                     style={{
        //                         width: '15%',
        //                         height: 18,
        //                         backgroundColor: '#fff',
        //                         //marginBottom: 50,
        //                         paddingHorizontal: 10,
        //                         top:1,
        //                         borderRadius: 10,
        //                     }}
        //                     placeholder="Gmail"
        //                 />
        //             </View>
        //             <TouchableOpacity
        //                 onPress={() => navigation.navigate("Inicio")}
        //                 style={{
        //                     //backgroundColor: "#00d9dd",
        //                     marginTop: 1,
        //                     width: 20,
        //                     height:20,
        //                     padding: 0,
        //                     alignSelf: "center",
        //                     borderRadius: 10,
        //                     marginLeft:10,
        //                     top:1
        //                 }}
        //             >
        //                 <Image
        //                     source={require('../image/Corchea.png')}
        //                     style={{
        //                         width:15,
        //                         height:25,
        //                         alignSelf:"center",
        //                         margin:1,
        //                         top:1
        //                         }}
        //                     />
        //             </TouchableOpacity>                   
        //         </View>
        //     </View>
        //     <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"flex-end", top:"7%"}}>
        //         <TouchableOpacity
        //             onPress={() => navigation.navigate("InicioSeccion")}
        //             style={{
        //                 //backgroundColor:"green",
        //                 marginTop: 1,
        //                 width: 40,
        //                 height:40,
        //                 padding: 1,
        //                 alignSelf: "flex-end",
        //                 borderRadius: 50,
        //                 top:1,
        //                 right:5,
        //                 margin:1,
        //                 marginBottom:5
        //             }}
        //         >
        //             <Image
        //                 source={require('../image/Refresh.png')}
        //                 style={{
        //                     width:26,
        //                     height:29,
        //                     alignSelf:"center",
        //                     top:1,
        //                 }}
        //             />
        //         </TouchableOpacity>
        //     </View>
        //     </View>
        // </SafeAreaView>