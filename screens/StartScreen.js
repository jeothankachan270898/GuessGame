import react ,{useState}from "react";
import {StyleSheet, View, Text, Button,TouchableWithoutFeedback,Keyboard,Alert} from "react-native";

import CardStyle from "../components/Cardstyle";
import Colors from "../constants/Color";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartScreen = props => {
 const [enteredValue,setEnteredValue] = useState('');
 const [confirmed,setConfirmed] = useState(false);
 const [selectedNumber,setSelectedNumber] = useState('')

 const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
 };
 const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
 };
 const confirmInputHandler = () => {
     const chosenNumber = parseInt(enteredValue);
     if (isNaN(chosenNumber) ||chosenNumber <= 0 ||chosenNumber > 99){
         Alert.alert('Invalid Number!',
         'Number has to a number between 1 and 99',
         [{Text: 'Okey', style: 'destructive' , onPress: resetInputHandler}])
         return;
     }
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue(''); 
        Keyboard.dismiss();      
 };

 let confirmedOutput;

 if (confirmed)
 {
     confirmedOutput=
     <CardStyle style={styles.numberBox}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}></Button>
      </CardStyle>   
 }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.headText}>Start a new Game!</Text>
            <CardStyle style={styles.inputScreen}>
                <Text>Select a Number</Text>
                <Input  style={styles.input}
                blurOnSubmit
                autoCapitalize= 'none'
                autoCorrect= {false}
                keyboardType= 'numeric'
                maxLength={2}
                onChangeText={numberInputHandler}
                 value={enteredValue}
                />
                <View style={styles.buttonView}>
                   <View style={styles.button}>
                       <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View> 
                   <View style={styles.button}>
                       <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View> 
                </View>
            </CardStyle>
           
            {confirmedOutput}
            
            
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles=StyleSheet.create({
   screen : {
       flex: 1,
       paddingTop: 10,
       alignItems: 'center'
   },
   headText: {
       marginVertical: 10,
       fontSize: 20
   },
   inputScreen: {
       alignItems: 'center',
       width: 300,
       maxWidth: '80%',
      
   },
   buttonView: {
       width: '100%',
       flexDirection: 'row',
       paddingHorizontal: 15,
       justifyContent: 'space-between'
   },
   button: {
       width: 100,
   },
   input: {
       width: 40,
       textAlign: 'center'
   },
   numberBox: {
        marginTop: 10,
        alignItems: 'center'
   }
});
export default StartScreen;