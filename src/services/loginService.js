import { MAIN_URL } from '../config/constants'

export function login(email, password) {

    console.log(email, password);

   return fetch(`${MAIN_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email,
            password,
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data
        })

}


