import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    Modal,
} from 'react-native';
import { Colors, Shadow } from '@styles';
import { Icon } from '@components';
import CheckBox from '@react-native-community/checkbox';

const Formulario = ({visible, onDismiss}) => {
    const styles = stylesheet();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    function applyLetterSpacing(string, count = 1) {
        return string.split('').join('\u200A'.repeat(count));
    }

    return(
        <Modal visible={visible} transparent={true}>
            <View style={styles.opacityView}>
                <Pressable style={{width:'100%', height:60}} onPress={onDismiss} />
                <View style={styles.modalContainer}>
                    <Pressable style={styles.x} onPress={onDismiss}>
                        <Icon name="fa-times" color={Colors.black} style={{fontSize: 20, marginStart: 5,}} />
                    </Pressable>
                    <Text style={styles.title}>Formulario de contacto</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Colors.lightgrey}
                        placeholder='Nombre Completo'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Colors.lightgrey}
                        placeholder='Email'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Colors.lightgrey}
                        placeholder='Número telefónico'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Colors.lightgrey}
                        placeholder='Whatsapp'
                    />
                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColor={{true: Colors.mint, false: Colors.white}}
                        />
                        <Text style={styles.terminos}>Acepto los términos y condiciones</Text>
                    </View>
                    <Pressable style={styles.button} onPress={() => setModalVisible(true)} >
                        <Text style={styles.buttonText}>{applyLetterSpacing('ENVIAR')}</Text>
                    </Pressable>
                </View>
                <Pressable style={{width:'100%', height: '40%'}} onPress={onDismiss} />
            </View>
        </Modal> 
    );
}


const stylesheet = () => StyleSheet.create({
    opacityView: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
    modalContainer: {
		borderRadius: 30,
		height: 460,
		backgroundColor: Colors.white,
		alignItems: 'flex-start',
		width: '95%',
		...Shadow,
	},
    x:{
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginTop: 10,
        marginEnd: 20,
    },
    title:{
        color: Colors.black,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10,
        marginStart: 50,
    },
    textInput:{
        marginTop: 10,
        borderColor: Colors.lightgrey,
        borderWidth: 1,
        color: Colors.lightgrey,
        borderRadius: 25,
        borderWidth: 1.5,
        fontSize: 15,
        width: 300,
        height: 50,
        paddingStart: 20,
        marginStart: 40,
        alignContent: 'center',
        justifyContent: 'center',
    },
    row:{
        flexDirection: 'row',
        marginStart: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    terminos:{
        textAlign: 'center',
        color: Colors.black,
    },
    button:{
        ...Shadow,
        marginTop: 20,
        marginStart: 40,
        backgroundColor: Colors.mint,
        borderRadius: 25,
        width: 140,
        height: 55,
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 20, 
        textAlign: 'center', 
        color: Colors.black,
        fontWeight: 'bold',
    },
});
export default Formulario;