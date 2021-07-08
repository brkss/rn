import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { survey } from '.'; 
import { Choise } from '.';
import { Button } from '../../components';

const {height, width} = Dimensions.get('window');

export const Survey : React.FC = () => {

    const [currentQuestion, SetCurrentQuestion] = React.useState(0);
    const [selectedChoise, SetSelectedChoise] = React.useState(0);
    
    const handleMovingToNextQuestion = () => {
        if(currentQuestion < survey.length){
            SetCurrentQuestion(prev => prev < survey.length ? prev + 1 : 0);
        }
    }
    
    const handleSelectingChoise = (index) => {
        SetSelectedChoise(index);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{survey[currentQuestion].title}</Text>
            </View>
            <View style={styles.body}>
                {
                    survey[currentQuestion].choices.map((choise, index) => (
                        <Choise onChoose={() => handleSelectingChoise(index)} is_selected={index === selectedChoise} label={choise} key={index} />
                    ))
                }
            </View>
            <View style={styles.footer}>
                <Button onpress={() => handleMovingToNextQuestion()} label="Next" color="#3F4549" buttonLabelColor="#ffffff" />
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
        height: height - 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        height: 100,
        backgroundColor: '#FFFAF5',
        justifyContent: 'center',
        alignItems: 'center'
    }
});