# Dialogflow
Repositório contendo chatbot do DialogFlow

Arquivos prontos para importação na ferramente DialogFlow do Google.

## Descrição dos arquivos:

`chatbot.json` - trata-se do chatbot em si, nele está contido o fluxo inicial do chat.

`fallback.json` - neste arquivo está contido as mensagens de não entendimento de informações inseridas no chat.

`greet.json` - arquivo que finaliza o fluxo e envia os dados para o fullfilment.

`fullfilment/index.js` - arquivo contendo a função de inserção de dados no Firebase.

`fullfilment/package.json` - arquivo contendo os pacotes necessários para o funcionamento do Fullfilment.

## Observações:

Este chatbot requer Google Functions e Firestore Database para armazenamento de dados. Será necessário ativar a conta de faturamento. Os arquivos que são responsáveis pela comunicação do chatbot com o Google Functions estão na pasta `fullfilment`.
