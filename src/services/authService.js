import { MAIN_URL } from '../config/constants'

export function login(email, password) {
    return fetch(`${MAIN_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(data => {
            return data
        })
}

export function register(email, password) {
    return fetch(`${MAIN_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(data => {
            return data
        })
}


