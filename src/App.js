import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCBJfLWdOGKuLVpfZ8hJZu5Mj-pcUQE12Y",
            authDomain: "auth-f61e3.firebaseapp.com",
            databaseURL: "https://auth-f61e3.firebaseio.com",
            projectId: "auth-f61e3",
            storageBucket: "auth-f61e3.appspot.com",
            messagingSenderId: "233674379457"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            )
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />
        } 
    }


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;