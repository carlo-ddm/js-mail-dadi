console.log('test');

const authorizedUsers = ['carloduminuco@gmail.com','alessandrocosta@libero.it','giuliamanzone@yahoo.com', 'andrearossi@gmail.it' ];

const userEmail = prompt('Inserisci la tua email!');
console.log(userEmail);

const authorizedUsersList = authorizedUsers.length;
console.log(authorizedUsersList);

let = 'la tua email non è autorizzata'
for(let i = 0; i < authorizedUsersList; i++){
  if (userEmail === authorizedUsers[i]){
    output = 'Autoriazzazione'
  }
}
console.log(output);