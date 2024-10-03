//primeiraPromisse()
    //.then((resultado) => {
        //return segundaPromisse(resultado)
    //})
//.then((resultado2) => {
    //return algumaCoisaParaOUsuario
//})

console.log('Fazer autenticação no instagram e buscar fotos recentes dos meus seguidores')
let autenticaçãoInstagram = new Promise((resolve, reject) => {
    console.log('Autenticação do usuário')

    setTimeout(() => {
        let sucesso = true;
        if(sucesso) {
            return resolve({ username: 'Renata', following: [{ user: 1}, { user: 2}, { user: 3}]})
        }else{
            reject('Ocorreu um erro na autenticação.')
        }
    }, 3000)
});

let buscaDasFotosSeguindo = (quemEuSigo) => new Promise((resolve, reject) => {
    console.log('Iniciando busca das fotos recentes de quem o usuário segue')

    setTimeout(() => {
        let sucesso = true;
        if (sucesso) {
            return resolve([{foto: 'src1', username: 1 }, {foto: 'src2', username: 2 }, {foto: 'src3', username: 3 }])
        }else{
            return reject('As fotos não foram encontradas.')
        }
    }, 3000)
})
autenticaçãoInstagram
    .then((resposta) => {
        return buscaDasFotosSeguindo(resposta)
})
    .then((respostaFotosRecentes) => {
        console.log(respostaFotosRecentes)
    })
