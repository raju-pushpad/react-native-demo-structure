import {StyleSheet} from 'react-native';

//create a comman style here

const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  subContainer: {
  	flex: 1,
  	padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20
  },
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInputField: {
    borderColor: 'rgba(112,112,112,0.4)', 
    borderWidth: 1, 
    paddingLeft: 10,
    paddingRight: 10
  },
  textInputContainer: {
  	marginTop: 20
  },
  buttonContainer: {
  	marginTop: 20
  },
  dashboardContainer: {
  	flex: 1, 
  	justifyContent: 'center', 
  	alignItems: 'center'
  }

});

export default appStyle

