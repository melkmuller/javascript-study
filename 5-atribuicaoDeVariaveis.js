console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
let primeiroNome = "Melk";
let sobrenome  = "Müller";

// Vírgula funciona como espaço
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`)

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto)

// let - pode variar o valor, receber outras atribuições
// const - não pode ter o valor alterado, nem ser atribuído outro valor

console.log('Trabalhando com listas');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

// Para adicionar itens numa lista/array
// Ele adiciona mesmo a lista sendo uma const, pois não muda o tipo
listaDeDestinos.push("Curitiba");

// Para remover itens usamos o splice, passando primeiro a posição que o item está e quantos itens serão removidos
listaDeDestinos.splice(2,1)

// Mostrar posição epecífica
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

console.log(listaDeDestinos)

