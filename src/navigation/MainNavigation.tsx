import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './authstack';

export const MainNavigation : React.FC = () => {

    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}