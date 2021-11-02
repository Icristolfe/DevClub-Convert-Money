const button = document.getElementById("convert-button")
const select = document.getElementById(`currency`)


const dolar = 5.68
const euro = 6.58

const convertValue = () => {

    const realValue = document.getElementById(`value-real`)
    const CurrencyValue = document.getElementById(`currency-value`)
    const input = document.getElementById(`input-real`).value
    


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

}

const currencyCoin = () => {
    const coinConvert = document.getElementById(`coin-convert`)
    const currencyFlag = document.getElementById(`currency-flag`)



    if (select.value === `€ Euro`) {
        coinConvert.innerHTML = `Euro`
        currencyFlag.src = `./assets/Euro.png`

    }

    if (select.value === `US$ Dolar americano`) {
        coinConvert.innerHTML = `Dolar americano`
        currencyFlag.src = `./assets/EUA.png`
    }
    convertValue()


}


button.addEventListener('click', convertValue)

select.addEventListener(`change`, currencyCoin)

