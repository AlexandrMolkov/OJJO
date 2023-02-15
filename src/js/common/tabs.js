const tabs = document.querySelectorAll('.tabs')

tabs.forEach( (tab)=> {
    const content = tab.querySelectorAll('.tabs__content')
    const buttons = tab.querySelectorAll('.tabs__button')
    
    buttons[0].classList.add('tabs__button_current')
    content.forEach((content, index)=> {
            if(index != 0) {
                content.style.display = 'none'
                content.classList.add('tabs__content_hidden')
                
            }
        })

    tab.addEventListener('click', (e)=> {
        if(e.target.classList.contains('tabs__button')){

            tab.querySelectorAll('.tabs__button').forEach((c)=>{
                c.classList.remove('tabs__button_current')
            })

            e.target.classList.add('tabs__button_current')

          tab.querySelectorAll('.tabs__content').forEach( (c)=>{
            
            c.classList.add('tabs__content_hidden')
            c.style.display = 'none'
            
          })
          const target = document.querySelector(e.target.dataset.target)

          target.style.display = 'block'

          setTimeout(() => {
            target.classList.remove('tabs__content_hidden')
          }, 0);
          
        }
    })
})

