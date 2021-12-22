import request from '../helpers/request'

export async function login(email, password) {
    let response = await request.post('/users/login', { email, password })
    return response
}

export function register(email, password) {
    return request.post('/users/register', { email, password })
}

export function logout(token) {
    return request.get('/users/logout', token)
}

export async function setUserImage(imageUrl, userId, token) {
    let avatars = await request.get('/data/avatars');
    if (avatars.errorMessage) {
        return request.post(`/data/avatars`, { userId, imageUrl }, token);
    } else {
        if (avatars?.find(x => x.userId === userId)) {
            let entry = avatars?.find(x => x.userId === userId);
            entry.imageUrl = imageUrl;
            return request.put(`/data/avatars/${entry._id}`, entry, token);
        } else {
            return request.post(`/data/avatars`, { userId, imageUrl }, token);
        }
    }
}
export async function getUserImage(userId) {
    let avatars = await request.get('/data/avatars');

    if (avatars.errorMessage) {
        console.log(avatars.errorMessage);
    } else {
        if (avatars?.find(x => x.userId === userId)) {
            return avatars?.find(x => x.userId === userId);
        }
    }
}



