import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRound,setGuessRound] = useState(0);

  const configureNewGameHandler = () =>{
    setGuessRound(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  
  };
  
  const gameOverHandler = numOfRound => {
    setGuessRound(numOfRound);
  }
  let content = <StartScreen  onStartGame={startGameHandler}/>;

  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }else if(guessRound > 0){
    content= <GameOverScreen  roundsNumber={guessRound} userNumber={userNumber} onRestart={configureNewGameHandler}/> ;
  }

  return (
    <View  style={styles.screen1}>
        <Header title="Guess a Number"/>
        {content}
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    screen1 : {
      flex: 1
    }
});
