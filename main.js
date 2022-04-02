import { getUserData } from "./getUsersData.js"
import { updateUserSubmit } from "./modal.js"
import { setUsersList } from "./setUsersList.js"

const userInfo = document.getElementById('userInfo')
const users = document.querySelector('.users')
const btnDel = document.querySelector('.delete')
const btnUpd = document.querySelector('.update')
const modal = document.getElementById('myModal');

setUsersList()

btnDel.addEventListener('click', event => {
    event.preventDefault()
    const id = users.value
    if (id === 'none') {
        alert('Select user')
        return
    }
    const option = users.querySelector('option[value="'+id+'"]')
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    })
    option.remove()
    userInfo.innerHTML = ''
})

btnUpd.addEventListener('click', event => {
    event.preventDefault()
    const id = users.value
    if (id === 'none') {
        alert('Select user')
        return
    }
    modal.style.display = 'block'
    updateUserSubmit(id)
})

users.addEventListener('change', event => {
    event.preventDefault()
    const id = users.selectedIndex
    if (id === 0) {
        userInfo.innerHTML = ''
    } else {
        getUserData(users[id].value)
    }   
})