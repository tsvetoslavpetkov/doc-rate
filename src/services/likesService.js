import request from '../helpers/request'

export function getLikes(id) {
    return request.get(`/data/likes?where=doctorId%3D%22${id}%22&distinct=_ownerId&count`)
}

export function getAllLikes() {
    return request.get(`/data/likes`)
}

export function hasLiked(id, userId, token) {
    return request.get(`/data/likes?where=doctorId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`, token)
}

export function like(id, token) {
    return request.post(`/data/likes`, { doctorId: id }, token)
}