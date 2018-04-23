import globals from './../globals';
import selectors from './../selectors/subscription';

const subscriptionCommands = {
    subscription(){
        return this 

        .waitForElementVisible('@subscriptionItem',globals.waitForElementVisible)
        .click("@subscriptionItem");
    }
}

export default {
    url : globals.subscriptionUrl,
    commands: [subscriptionCommands],
    elements: {
	  subscriptionItem: {
		selector: selectors.module,
		locateStrategy: 'xpath'
		
	  }
    }
}