console.log('test');

const authorizedUsers = ['carloduminuco@gmail.com','alessandrocosta@libero.it','giuliamanzone@yahoo.com', 'andrearossi@gmail.it' ];
console.log(authorizedUsers);

const userEmail = prompt('Inserisci la tua email!');
console.log(userEmail,'Email inserita');

const authorizedUsersList = authorizedUsers.length;
console.log(authorizedUsersList);

let output ='non sei autorizzato';

for(let i = 0; i < authorizedUsersList; i++){
  if (userEmail === authorizedUsers[i]){
    output ='sei autorizzato';
  }
}
console.log(output);

// Stampare a video risultato