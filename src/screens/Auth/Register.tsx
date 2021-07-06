import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from '../../components';

const {height} = Dimensions.get('window');

export const Register : React.FC = () => {

    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>you’ll love it here specially if you have{'\n'}type 1 diabetes, made by diabetics {'\n'}to diabetics. </Text>
                </View>

                <Input placehodler='Name' />
                <Input placehodler='Email' />
                <Input placehodler='Password' secureTextEntry={true} />
                <Input placehodler='Repeat Password' secureTextEntry={true} />
            </View>
            
            <View style={styles.footer}>
                <Button onpress={() => {}} label="Create Account" color="#3F4549" buttonLabelColor="#ffffff" />
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
    footer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})