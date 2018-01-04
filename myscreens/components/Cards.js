import React, {Component} from 'react';
import {Image} from 'react-native';
import {Left,Body,Text,Icon,Thumbnail,Card,CardItem,Button,Content} from 'native-base';
import {StyleSheet} from 'react-native';
class Cards extends Component{
render(){
return(
  //This is a skeleton structure for tweet card displayed on home screen. You can pass different data for different tweets using props

<Card>
  <CardItem>
  <Left>
  <Thumbnail source={require('./icon.png')}/>


  <Text>{this.props.title}</Text>
  <Text note>{this.props.subtitle}</Text>

  </Left>
  </CardItem>
  <CardItem>
  <Text>
  {this.props.notes}
  </Text>
  </CardItem>
  <CardItem cardBody>
  <Image source={require('./pic.jpeg')} style={{height: 200, width: null, flex: 1}}/>
  </CardItem>

  <CardItem style={styles.container}>
  <Button transparent small>
  <Icon active name='ios-text-outline' style={styles.iconcontainer}/>
  <Text>10</Text>
  </Button>
  <Button transparent small>
  <Icon active name='md-git-compare' style={styles.iconcontainer}/>
  <Text>4</Text>
  </Button>

  <Button transparent small>
  <Icon active name='heart' style={styles.iconcontainer}/>
  <Text>4</Text>
  </Button>

  <Button transparent small>
  <Icon active name='mail'style={styles.iconcontainer}/>
  <Text>0</Text>
  </Button>
  
  </CardItem>
</Card>
  
);
}
}

const styles = StyleSheet.create({
    iconcontainer: {
      color:"gray",
      marginRight:0,
     
    },
    container: {
    flex: 1,
    justifyContent: 'space-around',
  },
    
  });



export default Cards;
