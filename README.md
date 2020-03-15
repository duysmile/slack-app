# slack-app
This project make something cool with slack

## Step by step
- Create Slack App.
- Add `chat:write` permission to your app at `https://api.slack.com/apps/AV4QXJHG9/oauth`.
- Install App and get oAuth `TOKEN`.
- From your slack application, create a channel and get channel_id as `CHANNEL`.
- Use our lib to send any message to slack channel.

## Example
```javascript
  const SlackLog = require('slack-log');
  const log = new SlackLog(TOKEN, CHANNEL);
  log.sendError('Error here');
  log.sendWarning('Warning here');
  log.sendInfo('Info here');
```