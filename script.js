let i = console.log

let login = document.querySelector('.login-box')

let registration = document.querySelector('.registration-box')

let body = document.querySelector('body')

let log = document.querySelector('.login')

let reg = document.querySelector('.password')

let roomsChat = document.createElement('div')
body.appendChild(roomsChat)
roomsChat.className = 'rooms-chat'
roomsChat.style.display='none'




let rooms1 = document.createElement('div')
rooms1.className = 'rooms1'

let rooms2 = document.createElement('div')
rooms2.className = 'rooms2'

let rooms3 = document.createElement('div')
rooms3.className = 'rooms3'


roomsChat.appendChild(rooms1)
roomsChat.appendChild(rooms2)
roomsChat.appendChild(rooms3)






function registrationLogin (){
    login.style.display = 'none'
    registration.style.display='grid'
   }


   let checkName = 1
   let checkPassword = 1



   function Check (){
if (log.value == checkName & reg.value == checkPassword) {
    login.style.display = 'none'
    registration.style.display='none'
    roomsChat.style.display='grid'
    
} else {
    login.style.display = 'none'
    registration.style.display='none'
    let modalError = document.createElement('div')
    body.appendChild(modalError)
    modalError.className = 'modal-error'
    modalError.innerText = 'Неправильный логин или пароль'

    let buttonOk = document.createElement('button')
    buttonOk.className = 'button-ok'
    buttonOk.innerText = 'OK'
    buttonOk.onclick = function ()  {login.style.display = 'grid',modalError.style.display = 'none' }
    modalError.appendChild(buttonOk)


    login.style.display = 'none'
    registration.style.display='none'


}
   }
   
   
   




