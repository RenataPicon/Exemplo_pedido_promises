console.log("Eu preciso de um caderno novo.")
let promessaDeCompra = new Promise((resolve, reject) => {
    console.log("Amigo, estou indo comprar o caderno para você.");

    setTimeout(() => {
        let sucesso = true;
        if (sucesso){
            resolve("Consegui comprar o caderno para você.");
        }else{
            reject("Não consegui comprar o caderno para você.")
        }
    }, 5000);
});
console.log("Eu vou continuar estudando enquanto você compra o caderno para mim.");

promessaDeCompra
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro)); //simulando erro só colocar false aqui: "let sucesso = true;"

