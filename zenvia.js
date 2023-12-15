const { post } = require('request-promise');

//requisição post para mandar os dados para api da zenvia para fazer os disparos
async function disparo(obj){
  const sent = post({
    uri: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
    headers: {
      'X-API-TOKEN': 'Yf5aJaokiTzvA0QxbjHD_6FgyQyzAevupAak',
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
