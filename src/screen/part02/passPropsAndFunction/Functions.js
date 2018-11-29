
import React, { Component } from 'react'
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native'

// Bind in Constructor (ES2015)
class Foo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <TouchableOpacity onPress={this.handleClick}>{this.props.title || 'No title'}</TouchableOpacity>;
    }
}

//   Class Properties (Stage 3 Proposal)
class Foo1 extends Component {
    // Note: this syntax is experimental and not standardized yet.
    handleClick = () => {
        console.log('Click happened');
    }
    render() {
        return <TouchableOpacity onPress={this.handleClick}>Click Me</TouchableOpacity>;
    }
}

//   Bind in Render
class Foo2 extends Component {
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <TouchableOpacity onPress={this.handleClick.bind(this)}>Click Me</TouchableOpacity>;
    }
}

//   Arrow Function in Render

class Foo3 extends Component {
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <TouchableOpacity onPress={() => this.handleClick()}>Click Me</TouchableOpacity>;
    }
}

export default class Functions extends Component {
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return (
            <Foo title={'click'} />
        )
    }
}