import React from 'react';
import { Image, StyleSheet, TextInput, Dimensions, View, Button, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';
import { registerUser } from '@/api/user';
import { Link, useRouter } from 'expo-router';

const SignUpForm = () => {

    const router = useRouter()
    const [email, onChangeEmail] = React.useState('');
    const [fullName, onChangeFullName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [password2, onChangePassword2] = React.useState('');
    const [specialPassword, onChangeSpecialPassword] = React.useState('');

    const onSignUpClick = async () => {

        const res = await registerUser(email, password, specialPassword, fullName)

        if (res.status === 200) {
            alert("Sign-up Success")
            router.push('/login')
        }
        else {
            alert("Sign-up Failed")
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.signUpForm}>
                <Image
                    source={require("@/assets/images/chronosheesh.png")}
                    style={styles.logo}
                    resizeMode='contain'
                />

                <View style={styles.inputContainer}>

                    <Text style={styles.signUpHeader}>Sign Up</Text>

                    <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="envelope" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            placeholder="Email"
                            value={email}
                            textContentType='emailAddress'
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

                    <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="lock" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword2}
                            placeholder="Re-enter Password"
                            value={password2}
                            textContentType='password'
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="lock" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeSpecialPassword}
                            placeholder="Special Password"
                            value={specialPassword}
                            textContentType='password'
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="circle-user" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeFullName}
                            placeholder="Full Name"
                            value={fullName}
                        />
                    </View>
                </View>

                <View style={styles.signUpBtnWrapper}>
                    <TouchableOpacity style={styles.button} onPress={onSignUpClick}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    <FontAwesomeIcon name="arrow-right" size={19} color="white" style={styles.signUpIcon} />
                </View>

            </SafeAreaView>
        </SafeAreaProvider >
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    signUpHeader: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 20
    },
    signUpForm: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
    },
    logo: {
        marginTop: 30,
        height: 200,
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
    signUpBtnWrapper: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    signUpIcon: {
        position: 'absolute',
        right: 10,
    },
});

export default SignUpForm;
