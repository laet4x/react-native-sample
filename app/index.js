import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, TabHeading } from 'native-base';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

class AwesomeNativeBase extends Component {
   constructor(props) {
    super(props);
    this.state = {
      firstname: 'Al', // states for connecting to ddp
        }
     }
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                        <Tab2 firstname={this.state.firstname}/>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                        <Tab3 />
                    </Tab>
                </Tabs>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default AwesomeNativeBase;