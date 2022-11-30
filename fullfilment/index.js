'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
 
process.env.DEBUG = 'dialogflow:debug';
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function handleOrder(agent) {
    let name = agent.parameters.name;
    let phone = agent.parameters.phone;
    let aceite = agent.parameters.aceite;
    
    db.collection("data").add({
    name : name,
    phone : phone,
    aceite: aceite
    });
    agent.add(`sample response`);
	agent.setFollowupEvent({name:'greet', "parameters": {"name": name}});
  }
  let intentMap = new Map();
  intentMap.set('inicio', welcome);
  intentMap.set('fallback', fallback);
  intentMap.set('chatbot', handleOrder);
  agent.handleRequest(intentMap);
});