import globals from './../globals';
import selectors from './../selectors/login';

const loginCommands = {
	login(email, pass) {
	  return this
		.waitForElementVisible('@emailInput',5000)
		.setValue('@emailInput', email)
		.setValue('@passInput', pass)
		.click('@loginButton')
	}
  };


  
  export default {
	url: globals.loginUrl,
	commands: [loginCommands],
	elements: {
	  emailInput: {
		selector: selectors.userName
	  },
	  passInput: {
		selector: selectors.passWord
	  },
	  loginButton: {
		selector: selectors.loginButton
	  }
	}
  };