import React from 'react';

import MapView from 'react-native-maps';
import {View, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <MapView
        style={{width: width, height: height}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
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
