console.log('test');

// Dadi
const max = 6;

const numberPlayer = Math.ceil (Math.random() * 6);
console.log(numberPlayer);

const numberPc = Math.ceil (Math.random() * 6);
console.log(numberPc);

const result = document.getElementById('result');
console.log(result);

if (numberPlayer < numberPc){
  result.innerHTML = 'Hai perso';
} else if (numberPlayer > numberPc){
  result.innerHTML = 'Hai vinto';
} else {
  result.innerHTML = 'Pareggio';
}