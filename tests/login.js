export default {
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();

    loginPage
      .navigate()
      .login()
      
      //.login("840575-A", "Online");

    client.end();
  }
};