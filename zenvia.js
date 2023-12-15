const { post } = require('request-promise');

//requisição post para mandar os dados para api da zenvia para fazer os disparos no whatsapp
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
        text: "Olá você foi indicado por "+ obj.nome + " para estudar na Unigran Ead acesse o link a seguir para mais informações de matricula" + "https://www.unigran.br/ead/vestibular?utm_source=meu-amigo-vale-muito&utm_medium=desconto&utm_content=" + obj.RGM,
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
