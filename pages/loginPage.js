const loginCommands = {
	login(email, pass) {
		return this.waitForElementVisible("@emailInput")
			.setValue("@emailInput", email)
			.setValue("@passInput", pass)
			.waitForElementVisible("@loginButton")
			.click("@loginButton");
	},
};

export default 
	{
		url: "https://dashboard.syncano.io/#/login",
		commands: {
			 login(email, pass) {
			return this.waitForElementVisible("@emailInput")
				.setValue("@emailInput", email)
				.setValue("@passInput", pass)
				.waitForElementVisible("@loginButton")
				.click("@loginButton");
		}},
		elements: {
			emailInput: {
				selector: "input[type=text]",
			},
			passInput: {
				selector: "input[name=password]",
			},
			loginButton: {
				selector: "button[type=submit]",
			},
		},
	};
