import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'

export default class SpecificCode extends Component {
    render() {
        return (
            <View>
                {
                    Platform.OS == 'ios'
                        ?
                        <Text>{'IOS'}</Text>
                        :
                        <Text>{'Android'}</Text>
                }

            </View>
        )
    }
}