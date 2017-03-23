import React, { Component } from 'react';
//native base
import { Container, Content, Toast, Button, Icon, Fab, View, Text, Form, Item, Input } from 'native-base';
//react native
import {
  StyleSheet,
  ListView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity, // ADDED
  ToastAndroid,
} from 'react-native';
import RNFirebase from 'react-native-firebase';

const configurationOptions = {
  debug: true
};
const firebase = new RNFirebase(configurationOptions);

class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            formEnabled: false,
            email: '',
            password: '',
            showToast: false,
            errorToast: false,
            toast: '',
        };
       this.formEnabled = this.formEnabled.bind(this);
       this.container = this.container.bind(this);
       this.createUserWithEmailAndPassword =this.createUserWithEmailAndPassword.bind(this);
    }

    componentWillMount() {

    }

    render() {
        return this.container(this.formEnabled());
    }

    container (form){  
        return(
             <Container>
                <Content>
                {form}
               </Content>
            </Container>
        );            
        
     }   

     formEnabled (){
      return (
           <Form>
            <Item>
                <Input placeholder="Email" 
                value={this.state.email} 
                onChangeText={(text) => this.setState({email: text})}
                />
            </Item>
            <Item last>
                <Input placeholder="Password" 
                type="password"
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})} 
                />
            </Item>
             <Button onPress={this.createUserWithEmailAndPassword}>
                <Text>Click Me!</Text>
            </Button>
        </Form>
        );
    }
    createUserWithEmailAndPassword(){
        var email = this.state.email;
        var password = this.state.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('user created', user);
            ToastAndroid.show('User Created', ToastAndroid.SHORT)
          })
          .catch((err) => {
            console.log('An error occurred', 'The email address is already in use by another account.');
            ToastAndroid.show('The email address is already in use', ToastAndroid.SHORT);
          });
   }
}

export default Tab1;