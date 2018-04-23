export default {
    'User subscription ': (client) => {
      const loginPage = client.page.subscriptionPage();
  
      loginPage
        .navigate()
        .subscription()
        
        //.login("840575-A", "Online");
  
      client.end();
    }
  };