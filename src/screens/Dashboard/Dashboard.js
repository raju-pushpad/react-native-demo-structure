import React, {Component} from 'react';
import {
	Text, 
	View
} from 'react-native';
import appStyle from '../style/appStyle'
export default class Signup extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			email: ''
		}
	}

	// below method will be used to configure header
	static navigationOptions = {
		headerTitleStyle: { 
			alignSelf: 'center',
			textAlign: 'center',
			flex: 1
		},
    title: 'Dashboard',
    headerLeft: null
  };

	componentWillMount(){
		//this method called before render this screen
		//we have send email from login screen so get it from navigation and show 
		const { navigation } = this.props;
	    const email = navigation.getParam('email', 'no-Email');
	    this.setState({email})
	}

  render() {
    return (
      <View style={appStyle.container}>
        <View style = {appStyle.dashboardContainer}>
        	<Text>
        		Hello
        	</Text>
        	<Text>
        		{ this.state.email }
        	</Text>
        </View>
      </View>
    );
  }
}

