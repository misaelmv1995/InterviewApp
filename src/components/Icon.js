import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontAwesome } from '@styles';

const Icon = ({ name, color = Colors.mint, style }) => {
	const iconValue = FontAwesome.getIcon(name);

	return (
		<Text style={[styles.icon, style, {fontFamily: 'FontAwesome',  color: color }]}>{iconValue}</Text>
	);
};

const styles = StyleSheet.create({
	icon: {
		fontSize: 15,
	}
});

export default Icon;
