
import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'

export default class AsyncStorages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: { phone: 012345678, name: 'ATran' }
        }
    }

    componentWillMount() {

        AsyncStorage.setItem('userInfo', JSON.stringify(this.state.userInfo))
    };

    componentDidMount() {
        await AsyncStorage.getItem('userInfo').then((userInfo) => {
            if (userInfo) {
                alert(JSON.stringify(userInfo))
            }
        })
    };

    render() {
        return (
            <View>
            </View>
        )
    }
}