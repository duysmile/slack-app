const service = require('./service');

class SlackLog {
  constructor(token, channel) {
    this.token = token;
    this.channel = channel;
  }

  handleRequest(message) {
    return service.sendMessage(this.channel, this.token, message)
      .then(result => {
        console.log(result);
        if (result.ok === false) {
          throw new Error(result.error);
        }

        return { success: true };
      });
  }

  sendError(message) {
    return this.handleRequest(message);
  }

  sendWarning(message) {

  }

  sendInfo(message) {

  }

}

module.exports = SlackLog;