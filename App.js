import React from 'react';
import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Timer from './Timer';


export default class App extends React.Component{      
      render(){
           return (
            <Timer/>
           )
        } 
      
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  containerElement : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  count:{
    fontSize: 48,
  }
});
