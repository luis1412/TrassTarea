import React from "react-native";
import { Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function PantallaInicio () {


    return (
        <>
        <Image style={styles.imagen} source={{uri : "https://picsum.photos/id/237/200/300"}}/>        
        <Text>Tu tarea tus limites tu exito</Text>
        <Button style={styles.boton} title="Empezar"/>
        </>
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: 50,
        height: 70,
    },

    boton: {
        width: 20,
    }
  });
  