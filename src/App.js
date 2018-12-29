import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TopNavigation from './router/TopNavigation';
import Banner from './components/banner';
class App extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <Banner />
        <TopNavigation />
      </View>
    );
  }
}

// forget this, and find bug over half hour!!!
export default App;
