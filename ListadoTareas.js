import React from "react-native"; 
import { FlatList, View, StyleSheet, Text } from "react-native";
import tareas from './tareas.json';
import Tarea from './components/Tarea';

const data = tareas.tarea;

const renderizarTarea = ({item}) => <Tarea tarea={item}/>;


export default function ListadoTareas () {
    console.log(data);
    
    return(
     <View style={styles.contenedorPrincipal}>
        <View style={styles.container}>
            <Text>Creador de Tareas</Text>
        </View>
       <FlatList style={styles.lista} data={data}
               renderItem={renderizarTarea} 
               keyExtractor={item => item.id.toString()} />
    </View>
    )
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        width: "100%",
        flexDirection: "column",
    },
    container: {
        alignItems: "center",
        verticalAlign: "middle",
        paddingTop: 15,
        width: "100%",
        flex: 0.03,
        backgroundColor: "#A123FC",
    },
    lista:{
        flex: 1,
    },
  });