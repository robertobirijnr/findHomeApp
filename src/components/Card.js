import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const Card = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("HomeDetails", { homeId: props.id })}>
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <ImageBackground source={{ uri: props.image }} style={styles.image}>
                        <Text style={styles.price}>Ghc {props.price}</Text>
                        <View style={styles.year}>
                            <Text style={styles.yearText}>{props.yearBuilt}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.description}>
                    <Text>{props.address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        height: 300,
        margin: 10
    },
    titleContainer: {
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
    },
    imageContainer: {
        width: '100%',
        height: '65%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    price: {
        fontSize: 30,
        color: '#fff',
        margin: 10
    },
    year: {
        margin: 10,
        backgroundColor: '#2652B0',
        height: 25,
        width: 80,
        borderRadius: 5
    },
    yearText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        color: 'gray',
        padding: 10
    }
})

export default Card;