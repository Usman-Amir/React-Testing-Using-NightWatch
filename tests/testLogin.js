export default {
  'User Logs in': (client) => {
    client
    .url('http://todomvc.com/examples/react/#/')
    .waitForElementVisible('.header h1',3000)
    .expect.element('.main').to.not.be.present;
  client.end();
  }
};
