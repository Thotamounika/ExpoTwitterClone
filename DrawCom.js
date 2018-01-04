import React, { Component } from 'react';
import { Drawer } from 'native-base';
import StackNav from './RootNavigator';
import SideBar from './myscreens/SideBar';

import CommonHeader from './myscreens/components/CommonHeader';
export default class DrawCom extends Component {
  closeDrawer(){
        this._drawer._root.close()
      }
      openDrawer(){
        this._drawer._root.open()
}


  render() {
    return (
       <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
      <StackNav openDrawer={this.openDrawer.bind(this)}/>
      </Drawer>
    );
  }
}