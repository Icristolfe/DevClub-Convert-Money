const button = document.getElementById("convert-button")
const select = document.getElementById(`currency`)

const convertValue = async () => {

    const realValue = document.getElementById(`value-real`)
    const CurrencyValue = document.getElementById(`currency-value`)
    const input = document.getElementById(`input-real`).value

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = 90305

    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(input)


    if (select.value === `US$ Dolar americano`) {
        CurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(input / dolar)
    }

    if (select.value === `€ Euro`) {
        CurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(input / euro)
    }
    if (select.value === `₿ Bitcoin`) {
        CurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(input / bitcoin)

    }

}

const currencyCoin = () => {
    const coinConvert = document.getElementById(`coin-convert`)
    const currencyFlag = document.getElementById(`currency-flag`)



    if (select.value == `€ Euro`) {
        coinConvert.innerHTML = `Euro`
        currencyFlag.src = `./assets/Euro.png`

    }

    if (select.value == `US$ Dolar americano`) {
        coinConvert.innerHTML = `Dolar americano`
        currencyFlag.src = `./assets/EUA.png`
    }


    if (select.value == `₿ Bitcoin`) {
        coinConvert.innerHTML = `Bitcoin`
        currencyFlag.src = `./assets/bitcoin.png`
    }
    convertValue()


}


button.addEventListener('click', convertValue)

select.addEventListener(`change`, currencyCoin)

