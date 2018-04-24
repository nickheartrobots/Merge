import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './styles'


const Bubble = (props) => {
    var flex = props.owner ? 'flex-end' : 'flex-start'

    return (
        <View style={{ alignItems: flex, marginBottom: 5 }}>
            <View style={props.owner ? styles.bubbleBlue : styles.bubbleGray} width={(props.width * .8)}>
                <Text style={props.owner ? styles.textBlue : styles.textGray }>{props.text}</Text>
            </View>
        </View> 
    )
}

export default Bubble;