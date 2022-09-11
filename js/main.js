const botaoConverter = document.querySelector('.converte-valor');

const converteMoedaParaReal = (moeda, valor) => {
    const mostraNaTela = document.querySelector('.resultado');
    
    const eur = 6.20;
    const btc = 10000.45;
    const usd = 5.45;
    const jpy = 0.036;

    switch(moeda){
        case 'usd':
            const valorDolar = valor * usd;
            mostraNaTela.innerHTML = `R$ ${valorDolar.toFixed(2)}` ;
        break;
        case 'btc':
            const valorBtc = valor * btc;
            mostraNaTela.innerHTML = `R$ ${valorBtc.toFixed(2)}` ;
        break;
        case 'eur':
            const valorEur = valor * eur;
            mostraNaTela.innerHTML = `R$ ${valorEur.toFixed(2)}`;
        break;
        case 'jpy':
            const valorIenes = valor * jpy;
            mostraNaTela.innerHTML = `R$ ${valorIenes.toFixed(2)}`;
        break;
    }

}


botaoConverter.addEventListener('click', (event) =>{
    event.preventDefault();
    const moeda = document.querySelector('#seleciona-moeda').value;
    const valor = document.querySelector('#valor').value;

    if(valor > 0 ){
        converteMoedaParaReal(moeda, valor);
    }
    
});