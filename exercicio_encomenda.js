console.log('Faça seu pedido')
   let confirmacaoDoPedido = new Promise((resolve, reject) => {
        console.log('Pedido confirmado!')

        setTimeout(() => {
            let sucesso = true;
            if(sucesso) { 
                return resolve([{descrição: 'tomate'}, {descrição: 'cebola'}, {descrição: 'batata'}])
            }else{
                return reject('Ocorreu um erro ao fazer o pedido.')
            }
        }, 3000)
   });

let fazerOPagamento = (pagamento) => new Promise((resolve, reject) => {
    console.log('Escolha uma forma de pagamento: cartão de crédito, pix ou cartão de débito.')
    
    setTimeout(() => {
        let sucesso = true;
        if (sucesso) {
            return resolve('Pagamento efetuado. Aguardando envio.')
        }else{
            return reject('O pagamento não foi efetuado. Verifique o seu método de pagamento.')
        }
    }, 3000)
})
confirmacaoDoPedido
    .then((resposta) => {
        return fazerOPagamento(resposta)
})
    .then((pagamento) => {
        console.log(pagamento)
})
    
