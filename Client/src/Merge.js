/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Dimensions,
	FlatList
} from 'react-native';
import { Bubble } from './Components'

import io from 'socket.io-client';


class Merge extends Component {
	constructor(props){
		super(props);

		let { width, height } = Dimensions.get('window')

		this.state = {
			text: "",
			list: [{owner: false, text: "Cheese"}, {owner: false, text: "Robot"}, {owner: true, text: "React-Native"},
			{owner: true, text: "New slang when you notice the stripes, the dirt in your fries. Hope it's right when you die, old and bony. Dawn breaks like a bull through the hall, Never should have called But my head's to the wall and I'm lonely."}
			],
			width,
			height
		};
	}

	componentDidMount(){
		console.log('componentDidMount')
		let socket = io('http://127.0.0.1:47236');
		
		socket.on('socketID', e => {
			console.log("socketID", e)
		})
	}

	handleOnText = (text) => {
		console.log(text);
		this.setState({text})
	}
	
	handlePress = () => {
		console.log('handlePress')
		console.log(this.state.list)
		if(this.state.text !== ''){
			this.setState({
				list: [...this.state.list, { owner: true, text: this.state.text}],
				text: ''
			})
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<FlatList
						data={this.state.list}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({item}) =>
							<Bubble text={item.text} owner={item.owner} width={this.state.width}/>
						}
					/>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View style={{ flex: 1, padding: 5 }}>
						<TextInput
							onChangeText={this.handleOnText}
							value={this.state.text}
						/>
					</View>
					<View style={{ padding: 5 }}>
						<Button
							title="Send"
							onPress={this.handlePress}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: '#F5FCFF',
	}
});

export default Merge;