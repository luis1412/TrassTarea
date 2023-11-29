import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default function Tarea ({tarea}) {
    const {titulo, fecha} = tarea;

    return(
        <View style={styles.container}>
            <Text style={styles.textos}>{titulo}</Text>
            <Text style={styles.textos}>{fecha}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
 
    container: {
      marginTop: 10,
      marginLeft: 15,
      marginRight: 15,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 10,
    },
    textos: {
        padding: 10,        
    }
  });