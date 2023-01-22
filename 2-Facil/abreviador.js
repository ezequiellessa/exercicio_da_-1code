const abrevia = (nomes) => {
    const nomesSeparados = nomes.split(" ");
    let abreviacoes = []

    for(let i = 0; i < nomesSeparados.length; i++) {
        let letrasSeparada = nomesSeparados[i].split("")
        abreviacoes.push(letrasSeparada[0] + ".")
    }
    return abreviacoes.join("");
}

console.log(abrevia("ezequiel lessa de oliveira")) // E. L. D. O.



//Primeiro, a função separa a string de entrada em um array de palavras individuais usando o método "split()" e atribui isso à variável "nomesSeparados".

//Em seguida, cria um novo array vazio chamado "abreviacoes" para armazenar as abreviações.

//Em seguida, usa um loop "for" para iterar por cada elemento do array "nomesSeparados". Dentro do loop, ele pega a primeira letra de cada palavra usando o método "split()" e o índice do array da iteração atual. Em seguida, adiciona a primeira letra com um "." no final do array "abreviacoes"

//Depois do loop, ele retorna o array "abreviacoes" juntos com um "" tirar a virgula usando o método join().

//Quando chamado com a entrada "ezequiel lessa de oliveira", ele retorna a string "E. L. D. O." com um espaço entre cada abreviação.//