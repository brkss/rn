import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Board} from '../screens';

export const AuthStack : React.FC = () => {

    const { Navigator, Screen } = createStackNavigator();

    return(
        <Navigator>
            <Screen name='onboarding' component={Board} />
        </Navigator>
    );
}