import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCBJfLWdOGKuLVpfZ8hJZu5Mj-pcUQE12Y",
            authDomain: "auth-f61e3.firebaseapp.com",
            databaseURL: "https://auth-f61e3.firebaseio.com",
            projectId: "auth-f61e3",
            storageBucket: "auth-f61e3.appspot.com",
            messagingSenderId: "233674379457"
        });
    }


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App;