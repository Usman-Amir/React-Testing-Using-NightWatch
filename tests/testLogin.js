export default {
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    loginPage
      .navigate()
      .subscription();
      
      //.login("840575-A", "Online");

    client.end();
  }
};