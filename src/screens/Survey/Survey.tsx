import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { survey } from '.'; 
const {height, width} = Dimensions.get('window');
export const Survey : React.FC = () => {

    const [currentQuestion, SetCurrentQuestion] = React.useState(0);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WICH TYPE OF DIABETES YOU HAVE ?</Text>
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.footer}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        height: 200,
        backgroundColor: '#FFEAD5',
        justifyContent: 'flex-end',
        padding: 14
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: '#FFFAF5',
        height: height - 300
    },
    footer: {
        height: 100,
        backgroundColor: '#FFFAF5'
    }
});