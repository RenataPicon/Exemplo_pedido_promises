//objeto que representa uma eventual conclusão ou eventual falha - pending(operação ainda nao concluída); fulfill(concluída) ou rejected (não concluída)
let promise = new Promise((resolve, reject) => {
    let sucesso = true;
    if (sucesso) {
        resolve("Operação bem sucedida!");
    }else{
        reject("A operação falhou.");
    }
});
//apenas sintaxe da promise