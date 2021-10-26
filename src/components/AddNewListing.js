import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, StyleSheet, Button, Alert, ActivityIndicator } from "react-native"
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import * as listHouseAction from '../store/actions/listingActions'



const formSchema = yup.object({
    title: yup.string().required().min(3).max(50),
    price: yup.number().required(),
    image: yup.string().required(),
    yearBuilt: yup.number().required(),
    homeType: yup.string().required(),
    address: yup.string().required(),
    description: yup.string().required(),
})

const CreateNewListingScreen = () => {

    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    const dispatch = useDispatch()

    return (
        <ScrollView>


            <Formik
                initialValues={{
                    title: "",
                    image: "",
                    price: "",
                    homeType: "",
                    yearBuilt: "",
                    address: "",
                    description: ""
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    // console.log(values)
                    setIsLoading(true)
                    dispatch(listHouseAction.createHome(values))
                        .then(() => {
                            setIsLoading(false)
                            Alert.alert("created successfully")
                        })
                        .catch(() => {
                            setIsLoading(false)
                            Alert.alert("An error occured. Try Again", [{ text: "OK" }])
                        })
                }}
            >
                {(props) => (

                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput onBlur={props.handleBlur("title")} onChangeText={props.handleChange("title")} value={props.values.title} style={styles.input} />
                            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Image Url</Text>
                            <TextInput onBlur={props.handleBlur("image")} onChangeText={props.handleChange("image")} value={props.values.image} style={styles.input} />
                            <Text style={styles.error}>{props.touched.image && props.errors.image}</Text>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Home Type</Text>
                            <TextInput onBlur={props.handleBlur("homeType")} onChangeText={props.handleChange("homeType")} value={props.values.homeType} style={styles.input} />
                            <Text style={styles.error}>{props.touched.homeType && props.errors.homeType}</Text>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Price</Text>
                            <TextInput onBlur={props.handleBlur("price")} keyboardType="numeric" onChangeText={props.handleChange("price")} value={props.values.price} style={styles.input} />
                            <Text style={styles.error}>{props.touched.price && props.errors.price}</Text>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Year Built</Text>
                            <TextInput onBlur={props.handleBlur("yearBuilt")} keyboardType="numeric" onChangeText={props.handleChange("yearBuilt")} value={props.values.yearBuilt} style={styles.input} />
                            <Text style={styles.error}>{props.touched.yearBuilt && props.errors.yearBuilt}</Text>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput onBlur={props.handleBlur("address")} onChangeText={props.handleChange("address")} value={props.values.address} multiline style={styles.input} />
                            <Text style={styles.error}>{props.touched.address && props.errors.address}</Text>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput onBlur={props.handleBlur("description")} onChangeText={props.handleChange("description")} value={props.values.description} multiline style={styles.input} />
                            <Text style={styles.error}>{props.touched.description && props.errors.description}</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button onPress={props.handleSubmit} title="Add Listing" />
                        </View>
                    </View>
                )}
            </Formik>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
    },
    formGroup: {
        width: "100%"
    },
    label: {
        marginVertical: 10
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    buttonContainer: {
        marginTop: 20
    },
    error: {
        color: 'red'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CreateNewListingScreen;