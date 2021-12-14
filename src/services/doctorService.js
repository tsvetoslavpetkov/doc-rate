import request from '../helpers/request'

export function getAll() {
    return request.get('/data/doctors')
}

export function getTopThree() {
    return request.get('/data/doctors?sortBy=_createdOn%20desc&pageSize=5')
}

export function getOne(id, token) {
    return request.get(`/data/doctors/${id}`, token)
}

export function create(data, token) {
    return request.post('/data/doctors', data, token)
}

export function edit(id, data, token) {
    return request.put(`/data/doctors/${id}`, data, token)
}

export function del(id, token) {
    return request.del(`/data/doctors/${id}`, token)
}


