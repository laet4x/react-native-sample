import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, TabHeading, ListItem, Spinner } from 'native-base';

class Tab2 extends Component {
    constructor(props) {
    super(props);
        this.state = {
          movie: []
        }
        this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
        this.listView = this.listView.bind(this);
        this.listLoading = this.listLoading.bind(this);

     }

    componentDidMount(){
        this.getMoviesFromApiAsync();
    }

    render() {
        if(this.state.movie.length == 0){
           return this.listLoading(); 
        } 
        return this.listView();
    }

    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({'movie':responseJson.movies})
          })
          .catch((error) => {
            console.error(error);
          });
     }

     listView() {
         return (
            <Container>
             <Content>
                    {this.state.movie.map((movie,index)=>
                     <ListItem key={index}>
                        <Text>{movie.title}</Text>
                    </ListItem>
                    )}
                </Content>
            </Container>
        );
     }

     listLoading() {
          return (
            <Container>
                <Content>
                    <Spinner color='blue' />
                </Content>
            </Container>
        );
     }
}

export default Tab2;