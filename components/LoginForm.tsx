import React from 'react';
import { Image, StyleSheet, TextInput, Dimensions, View, Button, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';
import { Link, useRouter } from 'expo-router';


const LoginForm = () => {
    const router = useRouter()
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const onLoginClick = () => {
        router.push('/dashboard')
    }

    const { width } = Dimensions.get('window');

    const styles = StyleSheet.create({
        loginForm: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 10,
        },
        logo: {
            marginTop: 30,
            height: 300,
            width: width * 0.6,
        },
        input: {
            height: 40,
            margin: 0,
            borderWidth: 1,
            padding: 10,
            width: '80%',
            borderRadius: 5,
            paddingLeft: 40
        },
        inputContainer: {
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: width,
        },
        button: {
            backgroundColor: '#1C1E1E',
            paddingVertical: 10,
            borderRadius: 3,
            width: 200,
            display: 'flex',
            alignItems: 'center'
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
        },
        forgotPasswordButton: {
            width: 200,
            display: 'flex',
            alignItems: 'center'
        },
        forgotPasswordButtonText: {
            color: '#000',
            fontSize: 14,
        },
        signUpContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
        },
        signUpText: {
            fontSize: 14,
            color: 'gray',
        },
        signUpButton: {
            padding: 0,
        },
        signUpButtonText: {
            fontWeight: 'bold',
            textDecorationLine: 'underline',
        },
        inputWrapper: {
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
        },
        icon: {
            position: 'absolute',
            left: 10,
            marginRight: 10,
        },
        loginBtnWrapper: {
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
        },
        loginIcon: {
            position: 'absolute',
            right: 10,
        },
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.loginForm}>
                <Image
                    source={require("@/assets/images/chronosheesh.png")}
                    style={styles.logo}
                    resizeMode='contain'
                />

                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="envelope" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            placeholder="Username"
                            value={email}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="lock" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            placeholder="Password"
                            value={password}
                            textContentType='password'
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={styles.loginBtnWrapper}>
                    <TouchableOpacity style={styles.button} onPress={onLoginClick}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <FontAwesomeIcon name="arrow-right" size={19} color="white" style={styles.loginIcon} />
                </View>

                <TouchableOpacity style={styles.forgotPasswordButton} onPress={onLoginClick}>
                    <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
                </TouchableOpacity>


                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>
                        Don&apos;t have an account?{' '}
                    </Text>
                    <TouchableOpacity style={styles.signUpButton} onPress={onLoginClick}>
                        <Link href="/signup" style={styles.signUpButtonText}>Sign Up</Link>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </SafeAreaProvider >
    );
};


export default LoginForm;
