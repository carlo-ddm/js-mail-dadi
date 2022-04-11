console.log('test');

const authorizedUsers = ['carloduminuco@gmail.com','alessandrocosta@libero.it','giuliamanzone@yahoo.com', 'andrearossi@gmail.it' ];
console.log(authorizedUsers);

const userEmail = prompt('Inserisci la tua email!');
console.log(userEmail,'Email inserita');

const authorizedUsersList = authorizedUsers.length;
console.log(authorizedUsersList);

const result = document.getElementById('result');

for(let i = 0; i < authorizedUsersList; i++){
  if (userEmail === authorizedUsers[i]){
    output = 'Autoriazzazione';
  } else {
    output = 'No Autoriazzazione';
  }
}
console.log(output);