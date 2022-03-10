import react from "react";
import {View, StyleSheet ,Text} from "react-native";

const CardStyle = props => {
    return ( 
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8
    }
});

export default CardStyle;