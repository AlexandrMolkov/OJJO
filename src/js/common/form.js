import '../libs/inputmask.js'     
import '../libs/just-validate.min.js'   // https://just-validate.dev/documentation/

"use strict"



//================== validation
const formSelector = document.querySelector('#form')
if(formSelector) {

/*   form.addEventListener('submit', (e)=>{
    e.preventDefault()
}) */

  const validation = new JustValidate(formSelector);
  validation.addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя кота',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Введите ваше имя',
      },
      {
        rule: 'email',
        errorMessage: 'Введите ваш E-mail',
      },
    ])
    .addField('#weight', [
      {
        rule: 'required',
        errorMessage: 'Введите вес кота',
      },
      {
        rule: 'minLength',
        value: 1,
      },
    ])
    .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Введите свой телефон',
        },
      ])
    .onSuccess( ()=> {
        const formData = new FormData(form);
        fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        .then(response=>{
          if(response.ok) {
            form.reset()
          }
        })
        
    })
  /*   .addField('#password', [
      {
        rule: 'required',
        errorMessage: 'Password is required',
      },
      {
          rule: 'customRegexp',
          //value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
          value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        errorMessage: 'Password is invalid!',
      } 
  ]); */
  
  //================== mask
  const inputsTel = document.querySelector('input[type="tel"]')
  const maskTel = new Inputmask('+7 (999) 999-99-99')
  maskTel.mask(inputsTel)
}

