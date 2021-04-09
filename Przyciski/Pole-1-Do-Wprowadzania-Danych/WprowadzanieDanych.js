import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WprowadzanieDanych = () => {
	return (
		<View style={styles.iconContainer}>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Dane"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		backgroundColor: '#8fa5be',
		borderColor: '#8fa5be',
		paddingBottom: 10,
		width: 300,
		height: 50,
		paddingVertical: 10,
		paddingHorizontal: 13,
		borderWidth: 1,
		borderRadius: 25,
		fontSize: 16,
	},
	inputStyle: {
		flex: 1,
	},
});

export default WprowadzanieDanych;
