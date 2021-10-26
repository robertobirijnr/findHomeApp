import React from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native"
import { useSelector } from 'react-redux'


const HomeDetailsScreen = (props) => {

    const { homeId } = props.route.params;

    const data = useSelector(state => state.house.houses.find(house => house._id == homeId))

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.Heading}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>


                <View>
                    <Image style={styles.image} source={{ uri: data.image }} />
                </View>

                <View style={styles.housedata}>
                    <Text style={styles.label}>Home Type</Text>
                    <Text style={styles.value}>{data.homeType}</Text>
                </View>

                <View style={styles.housedata}>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.value}>{data.price}</Text>
                </View>

                <View style={styles.housedata}>
                    <Text style={styles.label}>Year Built</Text>
                    <Text style={styles.value}>{data.yearBuilt}</Text>
                </View>

                <View style={styles.housedata}>
                    <Text style={styles.label}>Addreess</Text>
                    <Text style={styles.value}>{data.address}</Text>
                </View>

                <View style={styles.housedata}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.value}>{data.description}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    Heading: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 24
    },
    image: {
        width: '100%',
        height: 200
    },
    housedata: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },
    label: {
        fontSize: 18
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
    }


})
export default HomeDetailsScreen;