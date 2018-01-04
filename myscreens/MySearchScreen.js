import React, {Component} from 'react';
import {Header,Title,Left,Right,Body,Text,Icon,Button,Content,Container,Item,Input} from 'native-base';
import FooterBelow from './components/FooterBelow';
import {StackNavigator} from 'react-navigation';
class MySearchScreen extends Component{
  render(){
    return (
      <Container>
      <Content>
          <Text>This is Search Screen</Text>
        </Content>
        <FooterBelow />
      </Container>
      );
  }
}

class MainSearchScreen extends Component{
  static navigationOptions={
    tabBarVisible:false,
  }
  render(){
    return (
     <Container>
      <Content>
        </Content>
        <FooterBelow />
      </Container>
      
      );
  }
}

const SearchStack=StackNavigator({
  Search:{
    screen:MySearchScreen,
    navigationOptions:({navigation}) => ({
            title: "Search",
            header:(
              <Header searchBar rounded style={{backgroundColor:'white'}}>
                  <Left>
                    <Button transparent onPress={()=>navigation.navigate('DrawerToggle')}>
                      <Icon name='menu' style={{color:'#1DA1F2'}}  />
                    </Button>
                  </Left>
                  <Item rounded>
                    <Input placeholder="Search Twitter" onFocus={()=>navigation.navigate('MainSearch')}/>
                  </Item>
                  <Right>
                  <Icon name="person" style={{color:'#1DA1F2'}}/>
                  </Right>
              </Header>
            ),
          })
  },

  MainSearch:{
    screen:MainSearchScreen,
    navigationOptions:({navigation}) => ({
            title: "MainSearch",
            header:(
              <Header searchBar style={{backgroundColor:'white'}}>
                  <Item>
                    <Icon name="arrow-back" style={{color:'#1DA1F2'}} onPress={()=>navigation.goBack()}/>
                    <Input placeholder="Search Twitter"  autoFocus={true}/>
                  </Item>
              </Header>
            ),
          })
  },
}
,{
  headerMode:'none',
});
export default SearchStack;