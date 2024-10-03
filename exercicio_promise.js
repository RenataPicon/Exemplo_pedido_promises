console.log("Buscar dados em servidor.")

let promessaDeBusca = new Promise((resolve, reject) => {
    console.log("Buscando dados.")
    setTimeout(() => {
        let sucesso = true;
        if (sucesso) {
            resolve({name: 'Fabio', age: 28})
        }else{
            reject('Dados não encontrados.')
        }
    }, 5000)
})
console.log("Fazendo outras coisas enquanto os dados são buscados no servidor.")

promessaDeBusca
    .then (console.log)
    .catch(console.log)