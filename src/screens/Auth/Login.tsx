import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from '../../components';

const {height} = Dimensions.get('window');

export const Login : React.FC = (props: any) => {

    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.title}>Login Back To Your Account ?</Text>
                    <Text style={styles.subtitle}>You’ve been missed !</Text>
                </View>

               
                <Input placehodler='Email' />
                <Input placehodler='Password' secureTextEntry={true} />
                
                <Text onPress={() => props.navigation.goBack()} style={styles.createAccountText}>You dont have an account ? Create One</Text>
                
            </View>
            
            <View style={styles.footer}>
                <Button onpress={() => {}} label="Login" color="#3F4549" buttonLabelColor="#ffffff" />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#FFFAF5',
        
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    subtitle: {
        marginBottom: 45,
        textAlign: 'center',
        fontSize: 17
    },
    createAccountText: {
        textAlign: 'left',
        marginTop: 15,
    },
    footer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})