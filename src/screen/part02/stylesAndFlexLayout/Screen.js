
import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import styles from './styles'
export default class Functions extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> textInComponent </Text>
            </View>
        )
    }
}

