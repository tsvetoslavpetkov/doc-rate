import request from '../helpers/request'

export function getAll(id) {
    return request.get(`/data/comments?where=doctorId%3D%22${id}%22`)
}
export function getCount(id) {
    return request.get(`/data/comments?where=doctorId%3D%22${id}%22&distinct=_ownerId&count`)
}

export function addComment(id, user, comment, token) {
    return request.post(`/data/comments`, { doctorId: id, user, comment }, token)
}