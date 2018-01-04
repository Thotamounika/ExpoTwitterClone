import React, { Component } from 'react';
import { Container,List, ListItem, Text,Left,Icon,Body,Right,Thumbnail ,Card,CardItem} from 'native-base';

export default class SideBar extends Component{

  
render(){
    return (
//This is the content that is rendered inside sidebar
        <Container style={{backgroundColor:'#ffffff'}}>

          <List>
                <ListItem>

                <Thumbnail source={require('./profile.png')}/>
                </ListItem>
                <ListItem>

<Body>
                <Text>Thota Mounica</Text>
                <Text note>@ThotaMounica</Text>
</Body>
                </ListItem>

                <ListItem>
                <Left><Text>2 following</Text></Left>
                <Body><Text>2 followers</Text></Body>
                </ListItem>


                <ListItem icon >
                    <Left>
                      <Icon name="person" style={{color:'gray'}}/>
                    </Left>
                    <Body>
                      <Text >Profile</Text>
                    </Body>
                  </ListItem>

                  <ListItem icon>
                      <Left>
                        <Icon name="md-list-box" style={{color:'gray'}} />
                      </Left>
                      <Body>
                        <Text>Lists</Text>
                      </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                          <Icon name="md-flash" style={{color:'gray'}}/>
                        </Left>
                        <Body>
                          <Text>Moments</Text>
                        </Body>
                      </ListItem>

                      <ListItem icon>
                          <Left>
                            <Icon name="ios-browsers-outline" style={{color:'gray'}}/>
                          </Left>
                          <Body>
                            <Text>Highlights</Text>
                          </Body>
                          </ListItem>
                        <ListItem>
                        <Text>Settings and privacy</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Help Center</Text>
                        </ListItem>
                        <ListItem>
                        
                        <Left>
                          <Icon name="ios-moon" style={{color:'#1DA1F2'}}/>
                        </Left>
                        <Body/>
                        <Right>
                          <Icon name="ios-qr-scanner" style={{color:'#1DA1F2'}}/>
                        </Right>
                        </ListItem>

          </List>
        </Container>

    );
  }
  }
