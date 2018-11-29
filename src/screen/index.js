import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AsyncStorages from './part02/passPropsAndFunction/PassProps';

export default class Part02Demo extends Component {
    render() {
        return (
            <View>
                <AsyncStorages />
            </View>
        )
    }
}