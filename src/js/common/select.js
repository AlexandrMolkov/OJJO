"use strict"

document.addEventListener('DOMContentLoaded', () => {
    
    const SELECT_CLASS = 'custom-select'

    const activateSelect = (elements) => {
        if(elements.length < 1) console.log('select not found')
         
        for(let i = 0; i < elements.length; i++) {
            const el = elements[i]
            const target = document.querySelector(`${el.dataset.target}`)
            //              target.style.display = 'none'


            const divCurVal = document.createElement('div')
            divCurVal.classList.add(`${SELECT_CLASS}__current-value`)
            divCurVal.setAttribute('data-current_value',target.value)

            // default value
            if(el.dataset.place) divCurVal.innerText = el.dataset.place
            else divCurVal.innerText = target.value
            
            el.append(divCurVal)
            const optionsUl = document.createElement('ul')
            optionsUl.classList.add('options')
            el.append(optionsUl)

           
            const selectKeyDownCheck = (k)=> {

                window.addEventListener('keydown', (k)=> {
                    if(k.key === "Enter" || k.key === "Space") {


                        console.log('keydown')

                        if(el.classList.contains('active')) {
                            el.classList.remove('active')
                            el.querySelector('.options').classList.remove('show')
                        } else {
                            el.classList.add('active')
                            el.querySelector('.options').classList.add('show')
                        }   
                    }
                })
            }

            el.addEventListener('focus', selectKeyDownCheck)

            el.addEventListener('blur', ()=> { 
                el.removeEventListener('focus', selectKeyDownCheck)
                
                el.classList.remove('active')
                el.querySelector('.options').classList.remove('show')

                console.log('bluur')
            })




            for(let i = 0; i < target.children.length; i++) {
                const curOpt = target.children[i]
                const opt = document.createElement('li')
                opt.classList.add('options__option')
                opt.setAttribute('tabindex', 0)
                opt.innerText = curOpt.innerText

                opt.addEventListener('focus', (e) => {
                    console.log(e.target)
                    window.addEventListener('keydown', (k)=> {
                        if(k.key === "Enter") {




                            const options = el.querySelectorAll('.options__option')
                    
                            for(let o of options) {o.classList.remove('active')}
                            e.target.classList.add('active')
        
                            el.dataset.current_value = e.target.innerText
                            el.querySelector(`.${SELECT_CLASS}__current-value`)
                                .innerText = e.target.innerText
        
                           const target = document.querySelector(`${el.dataset.target}`)
                           target.value = e.target.innerText

                           el.querySelector('.options').classList.remove('show')
                            el.closest('.'+SELECT_CLASS).classList.remove('active')



                            
                        }
                    },{once: true})
                })

                if(curOpt.innerText === divCurVal.innerText) opt.classList.add('active')

                optionsUl.append(opt)
            }

            el.addEventListener('click', (e)=> {

                optionsUl.classList.toggle('show')
                el.classList.toggle('active')
                
                if(e.target.classList.contains('options__option')) {

                    const options = el.querySelectorAll('.options__option')
                    
                    for(let o of options) {o.classList.remove('active')}
                    e.target.classList.add('active')

                    el.dataset.current_value = e.target.innerText
                    el.querySelector(`.${SELECT_CLASS}__current-value`)
                        .innerText = e.target.innerText

                   const target = document.querySelector(`${el.dataset.target}`)
                   target.value = e.target.innerText
                } 
            })
            
        }

        document.addEventListener('click', e => {
            if (!e.target.closest('.custom-select')) {
                document.querySelectorAll(`.${SELECT_CLASS}`)
                    .forEach(e=>{
                        e.querySelector('.options')
                            .classList.remove('show')
                    })
                    
            }
        })
    }

    activateSelect(document.querySelectorAll(`.${SELECT_CLASS}`))

})

 