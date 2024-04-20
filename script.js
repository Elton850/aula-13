const form = document.querySelector('#formulario')
const cardContainer = document.querySelector('#carros')
const inputs = document.querySelectorAll('input')

function montarCarro(carro){
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('card-container')
    carro.forEach(elemento => {
        const p = document.createElement('p')
        novaDiv.appendChild(p)
        if(elemento === 'marca'){
            p.textContent = `Marca: ${elemento.marca}`
            p.classList.add('marca')
        } else if(elemento === 'modelo'){
            p.textContent = `Modelo: ${elemento.modelo}`
        } else if(elemento === 'ano-lancamento'){
            p.textContent = `Ano de Lançamento: ${elemento.ano}`
        } else if(elemento === 'preco'){
            p.textContent = `Preço: ${elemento.preco}`
        } else if(elemento === 'cor'){
            p.textContent = `Cor: ${elemento.cor}`
        }

        if(elemento === 'ar' && elemento.ar){
            p.textContent = "Possui Ar-Condicionado: Sim"
        } else {
            p.textContent = "Possui Ar-Condicionado: Não"
        }
    })
    cardContainer.appendChild(novaDiv)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    inputs.forEach((item)=>{
        const carro = {
            marca: item.id === 'marca' ? item : null,
            modelo: item.id === 'modelo' ? item : null,
            ano: item.id === 'ano=lancamento' ? item : null,
            preco: item.id === 'preco' ? item : null,
            cor: item.id === 'cor' ? item : null,
            ar: item.type === 'checkbox' ? item : null
        }
    })

    montarCarro(carro)

})