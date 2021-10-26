import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native"
import { FloatingAction } from "react-native-floating-action";
import Card from "./Card";


//useDispatch is the same dispatch in vuex
import { useDispatch, useSelector } from 'react-redux'

import * as houseAction from '../store/actions/listingActions'





const HomeListingScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);




    const dispatch = useDispatch()

    const { houses } = useSelector(state => state.house)

    useEffect(() => {
        setIsLoading(true)
        dispatch(houseAction.fetchHouses())
            .then(() => {
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [dispatch])


    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    // if (houses.length === 0 && !isLoading) {
    //     return (
    //         <View style={styles.center}>
    //             <Text>No home found. Create new</Text>
    //         </View>
    //     )
    // }


    return (
        <View style={styles.container}>
            <FlatList
                data={houses}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <Card
                        navigation={props.navigation}
                        title={item.title}
                        description={item.description}
                        address={item.address}
                        homeType={item.homeType}
                        price={item.price}
                        image={item.image}
                        yearBuilt={item.yearBuilt}
                        id={item._id}
                    />
                )}
            />

            <FloatingAction
                position="right"
                animated={false}
                showBackground={false}
                onPressMain={() => props.navigation.navigate('AddNewHome')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default HomeListingScreen;