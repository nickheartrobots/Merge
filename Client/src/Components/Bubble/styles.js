import { StyleSheet } from 'react-native'

const colors = {
    gray: '#E5E5E5',
	blue: '#1E88E5',
	fontBlue: '#FAFAFA',
	fontGray: '#212121'
}

export default StyleSheet.create({
	container: {

	},
	bubbleBlue: {
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: colors.blue,
		marginRight: 5,
		borderRadius: 10,
		padding: 10,
	},
	textBlue: {
		color: colors.fontBlue,
	},
	bubbleGray: {
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: colors.gray,
		marginLeft: 5,
		borderRadius: 10,
		padding: 10
	},
	textGray: {
		color: colors.fontGray,
	}
});