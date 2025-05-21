//DOM

const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

//Evento

botao.addEventListener('click',gerarQR)

//Função

function gerarQR(){
    texto = url.value
    qr.innerHTML=''

    code = new QRCode(
        qr,
        {
            text:texto,
            width:400,
            height:400,
            colorDark:'rgba(0,0,0,0)',
            colorLight:'black'
        }
    )
}