import DATA from './data.js'

const  createCards = () => {
    const card_box = document.querySelector('.card_box')
    DATA.forEach((item)=>{
        const divMain = document.createElement('div')
        const divSub1 = document.createElement('div')
        const divSub2 = document.createElement('div')
        const div1 = document.createElement('div')
        const div11 = document.createElement('div')
        const div12 = document.createElement('div')
        const image  = document.createElement('img')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')

        divMain.classList.add('card')

        image.src = item.img
        image.alt = item.name
        divMain.appendChild(image)

        divSub1.classList.add('card-title')
        h3.innerHTML = item.name
        divSub1.appendChild(h3)
        divMain.appendChild(divSub1)

        divSub2.classList.add('card-info')
                div1.classList.add('basic')
                div11.classList.add('authName')  
                h4.innerHTML = item.Author
                div11.appendChild(h4)  
            div1.appendChild(div11)
                div12.classList.add('sub')
                div12.innerHTML = item.sub
                div1.appendChild(div12)
                p.innerHTML = item.desc
            divSub2.appendChild(div1)
            divSub2.appendChild(p)
        divMain.appendChild(divSub2)

        card_box.appendChild(divMain)
    })
    
}

const selected = []
const filterOptions = (id) =>{
    const button = document.querySelector(`#${id}`);
    button.classList.toggle('active');
    button.classList.contains('active') ? selected.push(id) : selected.splice(selected.indexOf(id), 1) 
    

    const cards = document.querySelectorAll('.card')
    if(selected.length === 0){
        cards.forEach((item)=>{
            item.style.display = 'flex'
        })
    }else{
        cards.forEach((item)=>{
            item.style.display = 'none'
        })

        //can be optimized
        
        selected.forEach((item)=>{
            cards.forEach((card)=>{
                if(card.querySelector('.sub').innerHTML === item){
                    card.style.display = 'flex'
                }
            })
        })
    }
    
}

const FILTER = ['Physics', 'Chemistry', 'Mathematics'];
const createOption = () => {
    const filter = document.querySelector('.filter')
    FILTER.forEach((item)=>{
        const div = document.createElement('div')
        div.classList.add('filter-option')
        div.innerHTML = `<button class="filter-button" id = ${item}>${item}</button>`
        filter.appendChild(div)
    })
    const ch = document.querySelectorAll('.filter-button')
    ch.forEach((item)=>{
        item.addEventListener('click', ()=>{
            filterOptions(item.id)
        })
    })
}









document.body.addEventListener('load', createOption());

document.body.addEventListener('load', createCards())
