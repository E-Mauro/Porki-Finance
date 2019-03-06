import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>Porki Finance App</Text>


        <TouchableOpacity onPress={this.saveData}>
          <Text>Click me to save data!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
          <Text>Click me to display data!</Text>
        </TouchableOpacity>

      </View>
    );
  }

  saveData() {
    const user = 'Mauro';
    AsyncStorage.setItem('user', user);

  }

  displayData = async () => {

    try {
      const user = await AsyncStorage.getItem('user');
      alert(user);
    }
    catch (error) {
      alert(error);
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
