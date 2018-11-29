import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ChildView from './ChildView';

export default class ParentView extends Component {
    render() {
        return (
            <View>
                <ChildView value={this.props.value} />
            </View>
        )
    }
}
