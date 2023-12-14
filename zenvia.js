const { post } = require('request-promise');


async function disparo(obj){
  const sent = post({
    uri: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
    headers: {
      'X-API-TOKEN': 'lLTqvuuOOy8JMOP9Jx7F-bqJKpTl9yPYOA8N',
    },
    body: {
      from: '551148377404',
      to: obj.numero,
      contents: [{
        type: 'text',
        text: obj.link,
      }],
    },
    json: true,
  })
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
 return sent;
}
module.exports = {disparo}
