import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class FormScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Bonjour je suis FormScreen</Text>
            </View>
        );
    }
}