import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'; 

interface ButtonProps{
    label: string;
    color: string;
    buttonLabelColor: string;
    onpress: () => void;
}
const { width } = Dimensions.get('window');
export const Button : React.FC<ButtonProps> = ({label, color, buttonLabelColor, onpress}) => {

    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onpress}>
            <View>
                <Text style={[styles.buttonLabel, {color: buttonLabelColor}]}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        //backgroundColor: '#EED47F',
        padding: 10,
        width: width * .9,
        borderRadius: 7
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }

})