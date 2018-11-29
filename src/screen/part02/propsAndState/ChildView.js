import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ChildView extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: 100, borderRadius: 5, borderWidth: 1, borderColor: '#ccc' }}>
                <Text style={styles.text}>{this.props.value}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: { color: 'black', fontWeight: 'bold' },
})