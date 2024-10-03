console.log('Faça seu pedido');

setTimeout(() => {
    let confirmacaoDoPedido = new Promise((resolve, reject) => {
        console.log('Pedido confirmado! Confirme se esses são seus itens:\nTomate\nCebola\nBatata.');

        // Simulando o sucesso do pedido
        let sucesso = true;
        if (sucesso) {
            return resolve([{ descrição: 'tomate' }, { descrição: 'cebola' }, { descrição: 'batata' }]);
        } else {
            return reject('Ocorreu um erro ao fazer o pedido.');
        }
    });

    confirmacaoDoPedido
        .then((resposta) => {
            return fazerOPagamento(resposta);
        })
        .then((pagamento) => {
            console.log(pagamento);
        })
        .catch((error) => {
            console.error(error);
        });

}, 5000);

let fazerOPagamento = (pagamento) => new Promise((resolve, reject) => {
    console.log('Escolha uma forma de pagamento: cartão de crédito, pix ou cartão de débito.');

    setTimeout(() => {
        let sucesso = true;
        if (sucesso) {
            return resolve('Pagamento efetuado. Aguardando envio.');
        } else {
            return reject('O pagamento não foi efetuado. Verifique o seu método de pagamento.');
        }
    }, 3000);
});
