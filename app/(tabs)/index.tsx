import { Image, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HistoryTable from '@/components/HistoryTable';
import { setIsLoggedIn } from '@/utils/storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { getUserFullName } from '@/utils/user.storage';


export default function HomeScreen() {
  const [userName, setUserName] = useState<string>()

  const router = useRouter()

  const onLogout = async () => {
    await setIsLoggedIn(false)
    router.push('/login')
  }

  useEffect(() => {

    const checkUserFullname = async () => {

      const username = await getUserFullName();

      setUserName(username)

    };

    checkUserFullname();
  }, []);


  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.dashboard}>

        <View style={styles.headerContainer}>

          <View style={styles.bannerContainer}>
            <Text>Hi, {userName}</Text>
            <Text style={styles.bannerWelcomeText}>Welcome Back</Text>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
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
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 30,
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
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#FF4C4C',
    borderRadius: 5,
    height: 30
  },
  logoutButtonText: {
    color: '#FFFFFF',
  },
});