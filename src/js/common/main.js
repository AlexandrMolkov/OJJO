

document.addEventListener('DOMContentLoaded', () => {

 
  if(document.getElementById("zoom")){
    new Panzoom(document.getElementById("zoom"), { click: "toggleCover" })
  }

  if(document.querySelector("[data-fancybox]")) {
    Fancybox.defaults.infinite = 0;
  }
  

  const blur = document.querySelector('.blur')
  const anchors = document.querySelectorAll('a[href*="#"]')
  
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substring(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  
  
  


  

  ///////////////////// read more

  const readmoreButtons = document.querySelectorAll('.read-more')
  readmoreButtons.forEach((e) => {
      e.addEventListener('click', (e) => {
      const target = document.getElementById(e.target.dataset.target)
      target.classList.add('show')})
    })
    




  /////////////////////  search

  const searchBtn = document.querySelector('.search')
  const headerForm = document.querySelector('.header__form-input-wrapper')
  const inputExitBtn = document.querySelector('.header__form-input-exit')

 

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    headerForm.classList.add('header__form-input_active')
    blur.classList.add('blur_active')
    document.querySelector('.burg').style.zIndex = 1

    const hideInput = (e) => {
        if(!e.target.classList.contains('header__form-input')) {
            headerForm.classList.remove('header__form-input_active')
            document.removeEventListener('click', hideInput)
            document.removeEventListener('mousewheel', hideInput)
            inputExitBtn.removeEventListener('click', hideInput)
            blur.classList.remove('blur_active')
            document.querySelector('.burg').style.zIndex = 100
        }
    }
    
    setTimeout(() => {
        document.addEventListener('click', hideInput)
    }, 100);

    document.addEventListener('mousewheel', hideInput)
    inputExitBtn.addEventListener('click', hideInput)

  })

  




  /////////////////////  js-choice

  if(document.querySelector('.js-choice-brand')){
    const element = document.querySelector('.js-choice-brand');
    const choices = new Choices(element,{
      searchEnabled: false,
      itemSelectText: '',
    });
  }

  if(document.querySelector('.js-choice-price')){ 
    const element2 = document.querySelector('.js-choice-price');
    const choices2 = new Choices(element2,{
      searchEnabled: false,
      itemSelectText: '',
    });
  }


  if(document.querySelector('.js-choice-whom')){ 
    const element3 = document.querySelector('.js-choice-whom');
    const choices3 = new Choices(element3,{
      searchEnabled: false,
      itemSelectText: '',
    });
  }

  if(document.querySelector('.js-choice-collection')){ 
    const element4 = document.querySelector('.js-choice-collection');
    const choices4 = new Choices(element4,{
      searchEnabled: false,
      itemSelectText: '',
    });
  }

  if(document.querySelector('.js-choice-season')){ 
    const element5 = document.querySelector('.js-choice-season');
    const choices5 = new Choices(element5,{
      searchEnabled: false,
      itemSelectText: '',
    });

  }

  if(document.querySelector('.js-choice-event')){ 
    const element6 = document.querySelector('.js-choice-event');
    const choices6 = new Choices(element6,{
      searchEnabled: false,
      itemSelectText: '',
    });

  }


  /////////////////// popup

  document.querySelectorAll('.account-reg').forEach( b => {
    b.addEventListener('click', (e) => {
      document.getElementById('popupreg')
        .classList.add('visible')
        document.body.classList.add(`lock`)
    })
  })
  document.querySelectorAll('.account-auth').forEach( b => {
    b.addEventListener('click', (e) => {
      document.getElementById('popupauth')
        .classList.add('visible')
        document.body.classList.add(`lock`)
    })
  })



  document.querySelectorAll('.popup-registration__exit-button')
    .forEach( b => {    
        b.addEventListener('click', (e) => {
            e.target.closest('.popup-registration')
            .classList.remove('visible')
          document.body.classList.remove(`lock`)
        })
      })







      window.addEventListener('resize', () =>  {
          document.body.classList.remove(`lock`)
          document.querySelector(document.querySelector(`.burg`).dataset.target).classList.remove(`show`)
          document.querySelector(`.burg`).classList.remove(`open`)
          blur.classList.remove('blur_active')
          document.getElementById('popupreg').classList.remove('visible')
      });


})




