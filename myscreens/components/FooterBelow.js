import React, {Component} from 'react';
import {Footer,FooterTab,Body,Text,Icon} from 'native-base';

class FooterBelow extends Component{

  render(){

    
    return (
      <Footer>
          <FooterTab style={{backgroundColor:'white'}} >
          <Body>
              <Text style={{color:'skyblue'}} padder>All</Text>
              </Body>
            </FooterTab>
          <FooterTab style={{backgroundColor:'white'}}>
          <Body>
          <Text style={{color:'gray'}}>Mentions</Text>
          </Body>
          </FooterTab>
          <FooterTab style={{backgroundColor:'white'}}>
          <Body>
          <Icon name='settings'style={{color:'skyblue'}}/>
          </Body>
          </FooterTab>
        </Footer>
      );
  }
}

export default FooterBelow;

















