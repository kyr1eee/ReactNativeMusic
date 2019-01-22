import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Navigator from '../../router/Navigator';
class Home extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    );
  }
}

// forget this, and find bug over half hour!!!
export default Home;
