const userInfo = document.getElementById('userInfo')

export const getUserData = (id) => {
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
            <p class="name">${name}</p>
            <p class="userName">${username}</p>
            <p class="email">${email}</p>
            <p class="address">${city}, ${street}, ${suite}, ${zipcode}</p>
            <p class="phone">${phone}</p>
            <p class="company">${companyName}</p>
            <p class="website"><a href='#'>${website}</a></p>`
    })
}




