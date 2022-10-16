
import React, { Fragment } from 'react';
import { Calendar } from "react-native-calendars";
import { View, TextInput, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AddTodoScreen = () => {
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#5a415b' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.background}>
                    <View style={styles.header}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', paddingLeft: 25, paddingTop: 20 }}>Add Note</Text>
                    </View>
                </View>
                <View style={styles.todoContainer}>
                    <View>
                        <Text style={styles.todoModalHeader}>
                            Date
                        </Text>
                    </View>
                    <View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <Text>Title</Text>
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <TextInput placeholder='Write the Title' style={{ backgroundColor: "#f7f7f7", height: 50, borderRadius: 10 }} />
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <Text>Note</Text>
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <TextInput placeholder='Write your important note' style={{ backgroundColor: "#f7f7f7", height: 100, borderRadius: 10 }} />
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <Text>Note</Text>
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <TextInput placeholder='Write your important note' style={{ backgroundColor: "#f7f7f7", height: 100, borderRadius: 10 }} />
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                            <Text>Color</Text>
                        </View>
                        <View style={styles.colorContainer}>
                            <TouchableOpacity style={[{backgroundColor: '#fd8b8b'},styles.todoItemIcon]}></TouchableOpacity>
                            <TouchableOpacity style={[{backgroundColor: '#a5abff'},styles.todoItemIcon]}></TouchableOpacity>
                            <TouchableOpacity style={[{backgroundColor: '#8cd3fd'},styles.todoItemIcon]}></TouchableOpacity>
                        </View>
                    </View>
                   <TouchableOpacity>
                    <Text>Save</Text>
                   </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Fragment>
    )
}
/**
 * background : 
 * pink : #fd8b8b,
 * violet: #a5abff,
 * mint : #8cd3fd
 * disable : 887e9f
 */
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5a415b'
    },
    container: {
        paddingTop: 50,
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
    },

    colorContainer: {
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },  

    todoContainer: {
        flex: 0.8,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff'
    },

    todoModalHeader: {
        paddingTop: 40,
        paddingLeft: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5a4859'
    },

    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 10
    },

    todoItemLeft: {
        flexDirection: 'row',
    },

    todoItemIcon: {
        width: 20,
        height: 20,
        borderRadius: 50,
    },

    todoItemTextContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },

    todoItemText: {
        fontSize: 18,
        color: '#5a4859'

    },

    todoItemStatusContainer: {
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },

    todoItemStatus: {
        color: '#fff',
        fontWeight: 'bold'
    }

})

export default AddTodoScreen;
