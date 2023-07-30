import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import MainText from '../text/MainText';
import Button from '../button/Button';
import AntDesign from "react-native-vector-icons/AntDesign"

const ModalContain = ({
    title="Title",
    visible,
    onClose,
    children
}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    onClose()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <MainText type='main' title={title} />
                            {/* <Button 
                                size='sm'
                                title={"Close"} 
                                onPress={onClose}
                            /> */}
                            <Pressable
                                onPress={onClose}
                            >
                                <AntDesign size={28} name="close" />
                            </Pressable>
                        </View>
                        <View style={styles.containChild}>
                            {children}
                        </View>

                    </View>

                   
                </View>
            </Modal>
            
        </View>
    );
};

const styles = StyleSheet.create({
    modalHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        paddingHorizontal:20,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    centeredView: {
        flex: 1,
    },
    containChild:{
        margin:15,
        paddingHorizontal:20,
        backgroundColor:'#fff',
        paddingVertical:20
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalContain;