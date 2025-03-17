document.querySelector('#btn_convert').addEventListener('click', async () => {
    const amount = document.querySelector('#amount').value
    const to = document.querySelector('#to').value
    const from = document.querySelector('#from').value

    if(amount == '' || amount <= 0){
        showAlert('#03658C', 'Digite um valor valido!')
        return
    }
    if(to == '' || from == ''){
        showAlert('#8C111B', 'Selecione as moedas para continuar!')
        return
    }
    if(to === from){
        showAlert('#F2AE30', 'Seleciona tipos diferentes de moeda!')
        return
    } 
    
    try {
        const rate = await getExchangeRate(to, from)
        if(!rate) {
            showAlert('#8C111B', 'Erro ao obter a taxa de câmbio.');
            return
        }
        const convert = (amount * rate).toFixed(2)
        document.querySelector('#result').innerHTML = `Valor convertido: ${convert} ${to}`
        showAlert('#7FA62D', 'Moeda convertida com sucesso!')
    } catch (e) {
        showAlert('#8C111B', 'Erro ao obter a taxa de câmbio.')
        console.log('Erro na conversão:', e)
    }
})

async function getExchangeRate(to, from){
    try {
        const url = `https://api.exchangerate-api.com/v4/latest/${from}`
        const response = await fetch(url)
        if(!response.ok) throw new Error('Erro na API')
        
        const data = await response.json()
        return data.rates[to]
    } catch(e) {
        console.log('Erro ao buscar taxa de câmbio:', e)
        return null
    }
}

function showAlert(color, msg) {
    let showAlert = document.getElementById('showAlert') 
    if(showAlert) showAlert.remove()

    let alert = document.createElement('div')
        alert.id = 'showAlert'
        alert.innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat"></i> ${msg}`
        alert.style.backgroundColor = color
        alert.style.color = '#fff'
        alert.style.fontSize = '1.2rem'
        alert.style.padding = '10px 17px'
        alert.style.borderRadius = '5px'
        alert.style.position = 'absolute'
        alert.style.opacity = '0'
        alert.style.top = '-30%'
        alert.style.left = '50%'
        alert.style.transform = 'translate(-50%)'
        alert.style.transition = 'top .5s ease-out, opacity .5s ease'
        document.body.appendChild(alert)

    setTimeout(() => {
        alert.style.opacity = '1'
        alert.style.top = '5%'
    }, 10)    

    if(window.innerWidth <= 400){
        alert.style.width = '90%'
        alert.style.fontSize = '1rem'
    }
    setTimeout(() => {
        alert.style.opacity = '0'
        alert.style.top = '-30%'
        alert.style.transition = 'top 2s ease-out, opacity 2s ease'
        setTimeout(() => {
            if(document.body.contains(alert)){
                document.body.removeChild(alert)
            }
        }, 2600)
    }, 2500)
}