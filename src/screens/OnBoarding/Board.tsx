import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Slide, slides } from '.';


const {width, height} = Dimensions.get('window');
export const Board : React.FC = () => {

    return(
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={true} snapToInterval={width} decelerationRate='fast' scrollEventThrottle={1}>
                {
                    slides.map((slide, index) => (
                        <Slide key={index} title={slide.title} buttonColor={slide.buttonColor} description={slide.description} image={slide.image} />
                    ))
                }
                
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#FFF5D4',
        //padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})