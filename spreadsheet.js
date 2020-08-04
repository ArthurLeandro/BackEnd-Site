const {google} = require('googleapis');
const cred = require('./credentials.json');
var valueToInsert = 3;
const client = new google.auth.JWT(
  //removi elementos da minha conta para a minha segurança
);

module.exports.Authorize = client.authorize(function(email){
  // if(err){
  //   console.log("ERROR - "+  err);
  //   return;
  // }
  // else{
    console.log("CONNECTED");
    UpdateInSheet(client, [[email],[""]]);
    spreadsheetRun(client);
  // }
});

async function spreadsheetRun(client){
  const gsApi = google.sheets({version:'v4',auth:client});
  const options = {
    //removi elementos da minha conta para a minha segurança
  };
  let data = await gsApi.spreadsheets.values.get(options);
  console.log(data.data.values);
};
async function UpdateInSheet(client,dataArray){
  const gsApi = google.sheets({version:'v4',auth:client});
  const options = {
    //removi elementos da minha conta para a minha segurança
    valueInputOption: "USER_ENTERED",
    resource:{ values : dataArray }
  };
  let response = await gsApi.spreadsheets.values.update(options);
  valueToInsert++;
}

