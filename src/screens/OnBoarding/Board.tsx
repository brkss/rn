import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Slide, slides } from '.';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash/lib/module/v1';
import Animated from 'react-native-reanimated'

const {width, height} = Dimensions.get('window');
export const Board : React.FC = () => {
    
    const x = useValue(0);
    const onScroll = onScrollEvent({x});
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, index) => index * width),
        outputRange: slides.map((slide) => slide.bgColor) 
    });

    return(
        <Animated.View style={[styles.container, {backgroundColor}]}>
            <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={true} snapToInterval={width} decelerationRate='fast' scrollEventThrottle={1} {...{onScroll}}>
                {
                    slides.map((slide, index) => (
                        <Slide key={index} is_last={index === slides.length - 1 } color={slide.color} buttonLabelColor={slide.buttonLabelColor} title={slide.title} buttonColor={slide.buttonColor} description={slide.description} image={slide.image} />
                    ))
                }
            </Animated.ScrollView>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        //backgroundColor: '#FFF5D4',
        //padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})