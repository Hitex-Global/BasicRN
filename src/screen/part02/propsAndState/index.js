import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ParentView from './ParentView';

export default class PropsAndState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
    }
    
    updateValue = () => {
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.updateValue}
                style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <ParentView message={this.state.value} />
            </TouchableOpacity>
        )
    }
}