import React from 'react';
import { Image, StyleSheet, Text, Dimensions, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HistoryTable from '@/components/HistoryTable';  // Make sure this path is correct!

const Dashboard = () => {
    const { width } = Dimensions.get('window');
    const userName = 'Josh Wa';

    const styles = StyleSheet.create({
        dashboard: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 40,
        },
        bannerContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 5,
        },
        bannerWelcomeText: {
            fontSize: 20,
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        logo: {
            width: width * 0.2,
        },
        logoText: {
            fontSize: 30,
            fontWeight: 'bold',
        },
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.dashboard}>
                <View style={styles.bannerContainer}>
                    <Text>Hi, {userName}</Text>
                    <Text style={styles.bannerWelcomeText}>Welcome Back</Text>
                </View>

                <View style={styles.logoContainer}>
                    <Image
                        source={require('@/assets/images/chronosheesh.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.logoText}>ChronoTech</Text>
                </View>

                <HistoryTable />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Dashboard;
