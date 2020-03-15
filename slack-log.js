const service = require('./service');

class SlackLog {
  constructor(token, channel) {
    this.token = token;
    this.channel = channel;
  }

  handleRequest(message) {
    return service.sendMessage(this.channel, this.token, message)
      .then(result => {
        if (result.ok === false) {
          throw new Error(result.error);
        }

        return { success: true };
      });
  }

  sendError(message) {
    return this.handleRequest(`
      \`ERROR\`: ${message}
    `);
  }

  sendWarning(message) {
    return this.handleRequest(`
      *WARNING*: ${message}
    `);
  }

  sendInfo(message) {
    return this.handleRequest(`
      _INFO_: ${message}
    `);
  }

}

module.exports = SlackLog;