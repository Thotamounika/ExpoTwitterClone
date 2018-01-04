import React, {Component} from 'react';
import {Header,Title,Left,Right,Body,Text,Icon,Button,Content,Fab,Container} from 'native-base';
import Cards from './components/Cards';
import FooterBelow from './components/FooterBelow';
import {StackNavigator} from 'react-navigation';


class MyHomeScreen extends Component{    
  render(){

    return (
    <Container>
      <Content>
{/*Here you can pass different data for different tweets by using the same component Cards*/}
<Cards title="NativeBase" subtitle="@GeekyAnts .1d" notes="NativeBase is a free and open source UI component library for React Nativeto build native mobile apps for iOS and Android platforms."/>
<Cards title="NativeBase" subtitle="@GeekyAnts .2d" notes="One of our main goal with NativeBase 2.0 is to make it easy to theme the components with very little changes to components themselves."/>
<Cards title="Build your App" subtitle="@TechCrunch .4d" notes="Get on the mobile fast track with the featured apps of NativeBase, to build high-quality iOS and Android mobile apps."/>

      
       </Content> 
       <Fab
      position="bottomRight"
            ><Icon name="logo-twitter"/></Fab>
            <FooterBelow />   
       </Container> 
      );
  }
}


const HomeStack=StackNavigator({
  Searchscreen:{
    screen:MyHomeScreen,
    navigationOptions:({navigation}) => ({
            title: "Home",
            header:(
              <Header style={{backgroundColor:'white'}}>
          <Left>
            <Button transparent onPress={()=>navigation.navigate('DrawerToggle')}>
             
             <Icon name='menu' style={{color:'#1DA1F2'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>Home</Title>
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
export default HomeStack;
