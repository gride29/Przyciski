import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PoleNazwa = () => {
	return (
		<View style={styles.iconContainer}>
			<Icon
				name="archive"
				color="#000"
				size={28}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Nazwa"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		backgroundColor: '#fec786',
		borderColor: '#fec786',
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

export default PoleNazwa;
