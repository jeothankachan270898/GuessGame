import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <View  style={styles.screen1}>
        <Header title="Guess a Number"/>
        <StartScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    screen1 : {
      flex: 1
    }
});
