import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Board, Register, Login} from '../screens';

export const AuthStack : React.FC = () => {

    const { Navigator, Screen } = createStackNavigator();

    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='onboarding' component={Board} />
            <Screen name='register' component={Register} />
            <Screen name='login' component={Login} />
        </Navigator>
    );
}