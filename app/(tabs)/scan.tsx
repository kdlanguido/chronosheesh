import { scanQrCode } from '@/api/record';
import { getUserId } from '@/utils/user.storage';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [userId, setUserId] = useState<string>('')

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  useEffect(() => {
    const fetchUserId = async () => {
      const userid = await getUserId()
      setUserId(userid)
    }

    fetchUserId()

    if (userId) {

      console.log(userId)

      const runScanQr = async () => {
        await scanQrCode(qrCodeData, userId)
      }

      runScanQr()
    }

  }, [qrCodeData]);

  if (!permission) {
    return <View><Text>Requesting camera permissions...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setQrCodeData(data);
    setScanned(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing={facing}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} // Only scan once, or reset state
        >
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Text style={styles.textInside}>Scan Class QR</Text>
            </View>
          </View>
        </CameraView>
      </View>

      {scanned && (
        <View style={styles.scannedContainer}>
          <Text style={styles.text}>Class Code: <Text style={{ fontWeight: "bold" }}>{qrCodeData}</Text></Text>
          <Button title={'Tap to Scan Another Class'} onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  cameraContainer: {
    width: 300,
    height: 400,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
  textInside: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  scannedContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
});
