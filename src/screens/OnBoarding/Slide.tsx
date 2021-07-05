import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { SlideButton } from '.'


interface SlideProps {
    title: string;
    description: string;
    buttonColor: string;
    image: string;
}

const {width} = Dimensions.get('window');
export const Slide : React.FC<SlideProps> = ({title, description, buttonColor, image}) => {

    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Text style={styles.image}>{image}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <SlideButton label="Next" color={buttonColor} />
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