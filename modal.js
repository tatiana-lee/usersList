import { getUserData } from "./getUsersData.js";
import { getUserInfo } from "./setUsersList.js";

const form = document.querySelector('.userInfo')
const input = form.querySelectorAll('input')

export function updateUserSubmit(id) {
    
    let [
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        phone,
        website,
        companyName
      ] = input

      
    getUserInfo(id)
      
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        address: {
          street: street,
          suite: suite,
          city: city,
          zipcode: zipcode,
        },
        phone: phone,
        website: website,
        company: {
          name: companyName,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => (json));
  }