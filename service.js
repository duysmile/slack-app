const https = require('https');

const HOSTNAME = 'slack.com';
const PATH = '/api/chat.postMessage';

exports.sendMessage = (channel, token, text) => {
  return new Promise((resolve, reject) => {
    const headers = {
      'content-type': 'application/json;charset=utf-8',
      'authorization': `Bearer ${token}`,
    };
  
    const options = {
      headers,
      hostname: HOSTNAME,
      port: 443,
      path: PATH,
      method: 'POST',
    };
  
    const data = JSON.stringify({ channel, text });
    const req = https.request(options, res => {
      console.log('statusCode:' + res.statusCode);

      res.on('data', (result) => {
        const data = result.toString();
        resolve(JSON.parse(data));
      });
    });

    req.on('error', err => {
      reject(err);
    });

    req.write(data);
    req.end();
  });
};
