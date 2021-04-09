import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LokalizacjaRaport from './Lokalizacja-Raport/LokalizacjaRaport';
import WprowadzanieDanych from './Pole-1-Do-Wprowadzania-Danych/WprowadzanieDanych';
import PoleHaslo from './Pole-Hasło/PoleHaslo';
import PoleKategoria from './Pole-Kategoria/PoleKategoria';
import PoleKod from './Pole-Kod/PoleKod';
import PoleLogin from './Pole-Login/PoleLogin';
import PoleLokalizacja from './Pole-Lokalizacja/PoleLokalizacja';
import PoleNazwa from './Pole-Nazwa/PoleNazwa';

export default function App() {
	return <PoleNazwa />;
}
