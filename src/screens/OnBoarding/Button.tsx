import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 

interface SlideButtonProps{
    label: string;
    color: string;
    buttonLabelColor: string;
}

export const SlideButton : React.FC<SlideButtonProps> = ({label, color, buttonLabelColor}) => {

    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]}>
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
        width: "100%",
        borderRadius: 7
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }

})