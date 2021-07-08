import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Survey, BodyInformation } from '../screens';

export const AppStack: React.FC = () => {

    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='bodyinformation' component={BodyInformation} />
            <Screen name='survey' component={Survey} />
        </Navigator>
    );
}