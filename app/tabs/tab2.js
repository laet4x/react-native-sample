import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, TabHeading } from 'native-base';

class Tab2 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.firstname, // states for connecting to ddp
        }
     }
    render() {
    console.log(this.state.firstname);
        return (
            <Container>
                <Content>
                   <Text>Tab2</Text>
                </Content>
            </Container>
        );
    }
}

export default Tab2;