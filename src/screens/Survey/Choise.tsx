import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'; 


const {width, height} = Dimensions.get('window');
interface ChoiseProps {
    is_selected?: boolean;
    label: string;
    onChoose: () => void;
}

export const Choise : React.FC<ChoiseProps> = ({is_selected, label, onChoose}) => {


    return(
        <TouchableOpacity onPress={() => onChoose()} style={[styles.container, is_selected ? {backgroundColor: '#FDE0C3'} : {}]} >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF2E4',
        padding: 15,
        borderRadius: 8,
        width: width * .9,
        marginVertical: 10
    },
    label: {
        fontWeight: 'bold',
        opacity: .8
    }
})