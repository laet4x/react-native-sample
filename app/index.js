import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, TabHeading,} from 'native-base';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

class AwesomeNativeBase extends Component {
   constructor(props) {
    super(props);
    this.state = {
          firstname: 'Al', 
          active: false,
          form: false
        }
     }
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="film" /><Text>Movie</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="apps" /><Text>Apps</Text></TabHeading>}>
                        <Tab3 />
                    </Tab>
                </Tabs>              
            </Container>
        );
    }
}

export default AwesomeNativeBase;