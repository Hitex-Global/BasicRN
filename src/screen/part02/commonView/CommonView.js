import React, { Component } from 'react'
import {
    Text, View, Platform,
    TextInput,
    Image,
    FlatList,
    ScrollView
} from 'react-native'

export default class CommonView extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}