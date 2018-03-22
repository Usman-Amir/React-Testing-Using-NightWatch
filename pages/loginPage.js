const loginCommands = {
	login(email, pass) {
	  return this
		.waitForElementVisible('@emailInput',5000)
		.setValue('@emailInput', email)
		.setValue('@passInput', pass)
		//.waitForElementVisible('@loginButton',5000)
		.click('@loginButton')
	},
	subscription() {
		return this
		
		 .waitForElementVisible('@subscriptionItem',global.waitForElementVisible)
		 .click("@subscriptionItem");
		  
	  }
  };


  
  export default {
	url: 'http://localhost/840575/reg.htm',
	commands: [loginCommands],
	elements: {
	  emailInput: {
		selector: 'input[ID=LoginForm_UserName]'
	  },
	  passInput: {
		selector: 'input[ID=LoginForm_Password]'
	  },
	  loginButton: {
		selector: 'a[ID=LoginForm_btnSave]'
	  },
	  subscriptionItem: {
		selector: '//a[normalize-space(.)=\'Basic\']',
		locateStrategy: 'xpath'
		
	  }
	}
  };