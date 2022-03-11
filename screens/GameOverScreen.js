import react from "react";
import {View,Text, StyleSheet , Button} from 'react-native';

const GameOverScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>Game over!</Text>
            <Text>Number of Rounds : {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default GameOverScreen;

