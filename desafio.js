//Var com os ítens adicionados pela(s) cliente(s) no carrinho de compras
let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteCris = [
    {produto: 'Vestido preto', valor: 279.0},
    {produto: 'Jaqueta de couro', valor: 350.0},
    {produto: 'Camiseta branca', valor: 49.0},
    {produto: 'Blaser forrado off white', valor: 199.0},
    {produto: 'Scarpin nude 37', valor: 125.0}]

    let clienteSilvana = [
     {produto: 'Jaqueta sarja branca', valor: 145.0},
     {produto: 'Camiseta vermelha', valor: 34.0},
     {produto: 'Regata estampada', valor: 29.0},
     {produto: 'Calça jeans', valor: 98.0},
     {produto: 'Tênis All Star 37', valor: 289.0},
     {produto: 'Sandália salto médio 37', valor: 78.0},
     {produto: 'Bolsa tiracolo caramelo', valor: 120.0},
     {produto: 'Meias de lã branca', valor: 15.0}]

function carrinhoDeCompras(produtosDaCliente) {
   let valorTotal = 0
   let descontoAplicado = 0
   let valorFinal = 0
   let quantidadeDeItens = produtosDaCliente.length
   
   for(let item of produtosDaCliente) {
       valorTotal += item.valor
       if (item.valor >= 200.0) {
           descontoAplicado += (item.valor * 0.5)
           valorFinal += (item.valor * 0.5)
       } else if (item.valor >= 100.0) {
           descontoAplicado += (item.valor * 0.2)
           valorFinal += (item.valor * 0.8)
       } else if (item.valor >= 80.0) {
           descontoAplicado += (item.valor * 0.1)
           valorFinal += (item.valor * 0.9)
       } else if (item.valor >= 50.0) {
           descontoAplicado += (item.valor * 0.05)
           valorFinal += (item.valor * 0.95)
       } else {
           valorFinal += item.valor
       }
   }

   let dataDaCompra = new Date()
   console.log(dataDaCompra)

   let cupomFiscal = {
       "Valor Total": `R$${valorTotal.toFixed(2).replace('.',',')}`,
       "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.',',')}`,
       "Valor Final": `R$${valorFinal.toFixed(2).replace('.',',')}`,
       "Data da Compra": dataDaCompra.toLocaleDateString('pt-BR', {
           hour: 'numeric',
           minute: 'numeric',
           second: 'numeric'
       })
   }

   if(quantidadeDeItens > 10 || valorFinal > 800.0) {
       return console.table({
           ...cupomFiscal,
           "Bônus": 'Parabéns! Você ganhou um voucher de desconto no valor de R$50,00 para a sua próxima compra!'
       })
    } else { 
       return console.table(cupomFiscal)
       }
   }

   carrinhoDeCompras(clienteLilit)
   carrinhoDeCompras(clienteCris)
   carrinhoDeCompras(clienteSilvana)


function realizarCompra(comprasDaCliente) {
    let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
    let descontoAplicado = 0 // variável com a soma de todos os descontos aplicados
    let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
    let quantidadeDeProdutos = comprasDaCliente.length

    for(let item of comprasDaCliente) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            descontoAplicado += (item.valor * 0.5)
            valorFinal += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            descontoAplicado += (item.valor * 0.2)
            valorFinal += (item.valor * 0.8)
        } else if (item.valor >= 80.0) {
            descontoAplicado += (item.valor * 0.1)
            valorFinal += (item.valor * 0.9)
        } else if (item.valor >= 50.0) {
            descontoAplicado += (item.valor * 0.05)
            valorFinal += (item.valor * 0.95)
        } else {
            valorFinal += item.valor
        }
    }

    let dataDaCompra = new Date()
    console.log(dataDaCompra)

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)
