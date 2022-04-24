import { View, Text, StyleSheet, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

function BarcodeScanner() {
  const [cameraPermission, setCameraPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [upc, setUpc] = useState('No UPC scanned')
  
  const askCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
        setCameraPermission(status === 'granted')
    })() 
  }

  useEffect( () => {
    askCameraPermission();
  }, [])

  const barCodeScannerHandler = ({ type, data }) => {
    setScanned(true)
    setUpc(data)
    console.log(`Type: ${type} UPC data: ${data}`);
  }

  // Check for camera permission and return
  if (cameraPermission === null) {
    return (<View style={styles.container}>
      <Text>Requesting camera permission</Text>
    </View>)
  }  
  
  if (cameraPermission === false) {
    return (<View style={styles.container}>
      <Text style={{ margin: 10 }}>No access to camera</Text>
      <Button title={'Allow camera permission'}
        onPress={() => askCameraPermission()} />
    </View>)
  }

  // Return the camera View
  return (
    <View style={styles.container}>
      <View style={styles.barcodeBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : barCodeScannerHandler}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.text}>{upc}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    margin: 20,
  },
  barcodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});

export default BarcodeScanner