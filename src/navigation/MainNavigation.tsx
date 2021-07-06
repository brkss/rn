import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './authstack';
import { AppStack } from './appstack';
export const MainNavigation : React.FC = () => {

    return(
        <NavigationContainer>
            <AppStack />
            {/* <AuthStack /> */}
        </NavigationContainer>
    );
}