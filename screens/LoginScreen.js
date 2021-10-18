import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/logo-instagram.png')}
                />
            </View>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }
})

export default LoginScreen
