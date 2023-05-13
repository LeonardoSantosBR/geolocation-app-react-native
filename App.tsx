import React, {useState, useEffect} from 'react';

import {
  View,
  Dimensions,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import MapView, {Region} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('screen');

function App(): JSX.Element {
  const [region, setRegion] = useState<Region>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    });
  });

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={() => {
          Platform.OS === 'android'
            ? PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              )
                .then(() => console.log('Usuário aceitou'))
                .catch(() => console.log('Usuário negou'))
            : '';
        }}
        style={{width: width, height: height}}
        region={region}
        zoomEnabled={true}
        minZoomLevel={17}
        showsUserLocation={true}
        loadingEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
