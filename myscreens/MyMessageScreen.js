import React, {Component} from 'react';
import {Header,Title,Left,Right,Body,Text,Icon,Button,Content,Container} from 'native-base';
import FooterBelow from './components/FooterBelow';
import {StackNavigator} from 'react-navigation';

class MyMessageScreen extends Component{
  render(){
    return (
      <Container>
    	<Content>
      		<Text>This is MessageScreen</Text>
      	</Content>
        <FooterBelow />
      </Container>
      );
  }
}

const MessageStack=StackNavigator({
  Messagescreen:{
    screen:MyMessageScreen,
    navigationOptions:({navigation}) => ({
            title: "Messages",
            header:(
              <Header style={{backgroundColor:'white'}}>
          <Left>
            <Button transparent onPress={()=>navigation.navigate('DrawerToggle')}>
             
             <Icon name='menu' style={{color:'#1DA1F2'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>Messages</Title>
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
export default MessageStack;
