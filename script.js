function trocar(){

const body = document.body

body.classList.toggle('dark-mode')

}


function converter(){

let valor_da_moeda = parseFloat(document.getElementById('valor-da-moeda').value)

if(isNaN(valor_da_moeda) || valor_da_moeda < 0){

return

}

const convertido = converter_para(valor_da_moeda)
const para = document.getElementById('converter-moeda').value
document.getElementById('valor_convertido').innerText=`${para == 'USD'?
    '$': 
    para == 'EUR'?
    '€': 
    para == 'JPY'?
    '¥':
    para == 'NOK'?
    'kr': '$'
} ${convertido.toFixed(2)}`

}


function converter_para(valor){


const para = document.getElementById('converter-moeda').value

switch(para){

    case 'USD':
        return valor / 5.66;
    
    case 'EUR':
        return valor / 6.24
    
    case 'JPY':
        return valor * 25.14

    case 'NOK':
        return valor * 1.91

    case 'MXN':
        return valor * 3.55
    
    default:
        return valor

}
}