const users = document.querySelector('.users')
const userInfo = document.querySelector('.userInfo')

export const getUserInfo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        const {
            name,
            username,
            email,
            address: {street, city, suite, zipcode},
            phone,
            website,
            company: {name: companyName}
        } = result
        userInfo.innerHTML = `
                    <label for="name">Name:</label>
                    <input name="name" id="name" value='${name}'>
                    <label for="username">Username:</label>
                    <input name="username" id="username" value='${username}'>
                    <label for="email">Email:</label>
                    <input name="email" id="email" value='${email}'>
                    <label for="city">City:</label>
                    <input name="city" id="city" value='${city}'>
                    <label for="street">Street:</label>
                    <input name="street" id="street" value='${street}'>
                    <label for="suit">Suit:</label>
                    <input name="suit" id="suite" value='${suite}'>
                    <label for="zipcode">Zipcode:</label>
                    <input name="zipcode" id="zipcode" value='${zipcode}'>
                    <label for="phone">Phone:</label>
                    <input name="phone" id="phone" value='${phone}'>
                    <label for="companyName">Company:</label>
                    <input name="companyName" id="companyName" value='${companyName}'>
                    <label for="website">Website:</label>
                    <input name="website" id="website" value='${website}'>
                    <button type="submit" id="submit">Ok</button>`
    })

}

export const setUsersList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        return result.map(el => {
            const option = document.createElement('option')
            option.setAttribute('value', el.id)
            option.innerText = el.name
            users.append(option)
        })
    })
}