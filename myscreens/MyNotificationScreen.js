import React, {Component} from 'react';
import {Header,Title,Left,Right,Body,Text,Icon,Button,Content,Container} from 'native-base';
import FooterBelow from './components/FooterBelow';
import {StackNavigator} from 'react-navigation';
class MyNotificationScreen extends Component{

  render(){
    return (
      <Container>
      <Content>
          <Text>This is Notifications Screen</Text>
        </Content>
        <FooterBelow />
      </Container>
      );
  }
}

const NotificationStack=StackNavigator({
  Notificationscreen:{
    screen:MyNotificationScreen,
    navigationOptions:({navigation}) => ({
            title: "Notifications",
            header:(
              <Header style={{backgroundColor:'white'}}>
          <Left>
            <Button transparent onPress={()=>navigation.navigate('DrawerToggle')}>
             
             <Icon name='menu' style={{color:'#1DA1F2'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>Notifications</Title>
          </Body>
          <Right />
        </Header>
            ),
          })
  },
}
,{
  headerMode:'none',
});
export default NotificationStack;