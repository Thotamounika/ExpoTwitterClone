import React, {Component} from 'react';
import DrawNav from './RootNavigator';
import Expo from 'expo';
class App extends Component{


state={
    isReady: false
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
}
  render(){

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (      
      <DrawNav/>
      );
}
}
export default App;