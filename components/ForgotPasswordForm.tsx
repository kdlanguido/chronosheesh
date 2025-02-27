import React from 'react';
import { Image, StyleSheet, TextInput, Dimensions, View, Button, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';
import { confirmVerificationCode, sendForgotPassword } from '@/api/mailer';
import { confirmChangePassword } from '@/api/user';
import { useRouter } from 'expo-router';

const ForgotPasswordForm = () => {

    const router = useRouter()
    const [email, onChangeEmail] = React.useState('');
    const [verificationCode, onChangeVerificationCode] = React.useState('');
    const [newPassword, onChangeNewPassword] = React.useState('');
    const [newPassword2, onChangeNewPassword2] = React.useState('');
    const [step, setStep] = React.useState(0);

    const OnConfirmEmailPress = async () => {
        await sendForgotPassword(email)
        setStep(step + 1)
    }

    const OnConfirmVerificationCode = async () => {
        const res = await confirmVerificationCode(verificationCode, email)
        if (res.status === 200) { setStep(step + 1) }
    }

    const OnConfirmChangePassword = async () => {
        const res = await confirmChangePassword(email, newPassword)
        if (res.status === 200) {
            router.push('/login')
            alert("Change password success!")
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

                    <Text style={styles.signUpHeader}>Forgot Password</Text>

                    {step === 0 && <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="envelope" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            placeholder="Email"
                            value={email}
                            textContentType='emailAddress'
                        />
                    </View>
                    }

                    {step === 1 && <View style={styles.inputWrapper}>
                        <FontAwesomeIcon name="envelope" size={19} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeVerificationCode}
                            placeholder="Verification Code"
                            value={verificationCode}
                        />
                    </View>
                    }

                    {step === 2 && <>
                        <View style={styles.inputWrapper}>
                            <FontAwesomeIcon name="lock" size={19} color="gray" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNewPassword}
                                placeholder="New Password"
                                value={newPassword}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <FontAwesomeIcon name="lock" size={19} color="gray" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNewPassword2}
                                placeholder="Confirm New Password"
                                value={newPassword2}
                            />
                        </View>
                    </>
                    }

                </View>

                {step === 0 && <View style={styles.signUpBtnWrapper}>
                    <TouchableOpacity style={styles.button} onPress={OnConfirmEmailPress}>
                        <Text style={styles.buttonText}>Send Verification</Text>
                    </TouchableOpacity>
                    <FontAwesomeIcon name="envelope" size={19} color="white" style={styles.signUpIcon} />
                </View>
                }

                {step === 1 && <View style={styles.signUpBtnWrapper}>
                    <TouchableOpacity style={styles.button} onPress={OnConfirmVerificationCode}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    <FontAwesomeIcon name="arrow-right" size={19} color="white" style={styles.signUpIcon} />
                </View>
                }
                {step === 2 && <View style={styles.signUpBtnWrapper}>
                    <TouchableOpacity style={styles.button} onPress={OnConfirmChangePassword}>
                        <Text style={styles.buttonText}>Save Password</Text>
                    </TouchableOpacity>
                    <FontAwesomeIcon name="arrow-right" size={19} color="white" style={styles.signUpIcon} />
                </View>
                }

            </SafeAreaView>
        </SafeAreaProvider >
    );
};

export default ForgotPasswordForm;

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