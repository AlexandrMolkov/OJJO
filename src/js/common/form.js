import '../libs/inputmask.js'     
import '../libs/just-validate.min.js' 



//================== validation
const formReg = document.querySelector('#regform')
if(formReg) {

    const regPassInp = document.querySelector('#regpass')
    let password = ''
    regPassInp.addEventListener('input', ()=> {
        password = regPassInp.value
        validation.fields['#regpassconf'].rules[1].value = new RegExp(password, "g")
    })


    const validation = new JustValidate(formReg);
    validation
        .addField('#regmail', [
        {
            rule: 'required',
            errorMessage: 'Введите вашу почту!',
        },
        {
            rule: 'email',
            errorMessage: 'Введите ваш E-mail!',
        },
        ])
        .addField('#regtel', [
        {
            rule: 'required',
            errorMessage: 'Введите свой телефон!',
        },
        ])
        .addField('#regpass', [
        {
            rule: 'required',
            errorMessage: 'Введите пароль!',
        },
        {
            rule: 'customRegexp',
            //value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            errorMessage: 'Password is invalid!',
        } 
        ])
        .addField('#regpassconf', [
        {
            rule: 'required',
            errorMessage: 'Повторите пароль!',
        },
        {
            rule: 'customRegexp',
            value:  '',
            errorMessage: 'Пароль не верен!',
        } 
        ])
        .onSuccess( ()=> {
            const formData = new FormData(formReg);
            fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            .then(response=>{
            if(response.ok) {
                formReg.reset()
            }
            })
            
        })


    //================== mask
    const inputsTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    maskTel.mask(inputsTel)
}

const formAut = document.querySelector('#authform')
if(formAut) {

    const validation = new JustValidate(formAut);
    validation
        .addField('#authmail', [
        {
            rule: 'required',
            errorMessage: 'Введите вашу почту!',
        },
        {
            rule: 'email',
            errorMessage: 'Введите ваш E-mail!',
        },
        ])
        .addField('#authpass', [
        {
            rule: 'required',
            errorMessage: 'Введите пароль!',
        },
        {
            rule: 'customRegexp',
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            errorMessage: 'Password is invalid!',
        } 
        ])
        .onSuccess( ()=> {
            const formData = new FormData(formReg);
            fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            .then(response=>{
            if(response.ok) {
                formReg.reset()
            }
            })
            
        })


    //================== mask
    const inputsTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    maskTel.mask(inputsTel)
}
const formSub = document.querySelector('#subscrform')
if(formSub) {

    const validation = new JustValidate(formSub);
    validation
        .addField('#subscrmail', [
        {
            rule: 'required',
            errorMessage: 'Введите вашу почту!',
        },
        {
            rule: 'email',
            errorMessage: 'Неправильный адрес!',
        },
        ])
        .onSuccess( ()=> {
            const formData = new FormData(formReg);
            fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            .then(response=>{
            if(response.ok) {
                formReg.reset()
            }
            })
            
        })


    //================== mask
    const inputsTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    maskTel.mask(inputsTel)
}