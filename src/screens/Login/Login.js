import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import {userLogin} from '../../actions/user'
import appStyle from '../style/appStyle' 

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  // below method will be used to configure header
  static navigationOptions = {
    headerTitleStyle: { 
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1
    },
    title: 'Login',
    headerLeft: null
  };

  goToSignup(){
    // this method navigate screen to signup screen
    this.props.navigation.navigate('Signup')
  }

  login(){
    // warn if email and password has empty values otherwise return to dashboard
    var values = this.state
    if(values.email.trim() && values.password.trim()){
      // this.props.userLogin(data)
      // the above method will call actions method for authentication and if success then reducer return 
      // result back to same screen to handle response


      //check email validation
      var isEmailValid = this.checkEmailValidation()
      if(isEmailValid){
        //check password length and other stuff 
        //skip password validation , but you may do here
        this.props.navigation.navigate('Dashboard', {email: this.state.email})

      }else{
        alert('Invalid Email')
      }

    }else{
      alert('Empty email or password')
    }
  }

  checkEmailValidation(){
    return true
  }

  render() {
    return (
      <View style={appStyle.container}>
        <ScrollView style={appStyle.container}>
          <View style={[appStyle.subContainer,{marginTop: 70}]}>
            
            <Text style={appStyle.welcome}>Login Screen</Text>
           
            <View style={appStyle.textInputContainer}>
              
              <TextInput
                style={appStyle.textInputField}
                placeholder = "Enter Email"
                keyboardType="email-address"
                onChangeText={(email) => {
                  this.setState({email})
                }}
                value={this.state.email}
              />
            </View>

            <View style={appStyle.textInputContainer}>
              <TextInput
                style={appStyle.textInputField}
                placeholder = "Enter Password"
                keyboardType="default"
                secureTextEntry= {true}
                onChangeText={(password) => {
                  this.setState({password})
                }}
                value={this.state.password}
              />
            </View>
            
            <View style={{marginTop: 30}}>
              <Button
                onPress={()=>{this.login()}}
                title="Login"
                color="#841584"
              />
            </View>

            <View style={appStyle.buttonContainer}>
              <Button
                onPress={()=>{this.goToSignup()}}
                title="Sign up"
                color="#841584"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // this method handle response when reducer return anything
  return{
   'login': state
  };
}


const LoginScreen = connect(mapStateToProps, { userLogin })(Login)
export default LoginScreen