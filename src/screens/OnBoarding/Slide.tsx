import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Button } from '../../components';

interface SlideProps {
    title: string;
    description: string;
    buttonColor: string;
    image: string;
    color: string;
    buttonLabelColor: string;
    onButtonClick: () => void;
    is_last: boolean;
}

const {width} = Dimensions.get('window');
export const Slide : React.FC<SlideProps> = (props) => {

    const {title, description, buttonColor, image, color, buttonLabelColor, onButtonClick, is_last} = props;
    

    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={[styles.title, {color}]}>{title}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.description, {color}]}>{description}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Text style={styles.image}>{image}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Button onpress={() => onButtonClick()} label={is_last ? "Join Us" : "Next."} buttonLabelColor={buttonLabelColor} color={buttonColor} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        //height: 100,
        //padding: 20,
        
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        marginVertical: 12
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
    },
    imageContainer: {

    },
    image: {
        fontSize: 150
    },
    footer: {
        padding: 20,
        paddingTop: 0,
        height: 100
    }
});