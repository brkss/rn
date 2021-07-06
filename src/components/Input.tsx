import React from 'react';
import { Dimensions } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
    placehodler: string,
    secureTextEntry?: boolean
}

const {width} = Dimensions.get('window');
export const Input : React.FC<InputProps> = ({placehodler, secureTextEntry}) => {

    return(
        <View style={styles.container}>
            <TextInput secureTextEntry={secureTextEntry} placeholder={placehodler} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width * .9,
        backgroundColor: '#F8E9DA',
        padding: 15,
        borderRadius: 7,
        marginVertical: 10
    }
});