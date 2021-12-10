import request from '../helpers/request'

export function getAll(id, token) {
    return request.get(`/data/comments?where=doctorId%3D%22${id}%22`, token)
}

export function addComment(id, user, comment, token) {
    return request.post(`/data/comments`, { doctorId: id, user, comment }, token)
}