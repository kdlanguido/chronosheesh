import { Image, StyleSheet, Text, Dimensions, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HistoryTable from '@/components/HistoryTable';


export default function HomeScreen() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.dashboard}>

        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/chronosheesh.png')}
            style={styles.logo}
            resizeMode='contain'
          />
          <Text style={styles.logoText}>ChronoTech</Text>
        </View>

        <Text style={styles.logoText}>History</Text>

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
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  logo: {
    width: width * 0.2,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});