import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import AHeader from './src/components/AHeader';
import Banner from './src/components/Banner';
import ComContainer from './src/components/ComContainer';
export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
         <AHeader/>
         <Banner/>
         <ComContainer/>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
