import request from '../helpers/request'

export function getAll (){
    return request.get('/data/doctors')
}

export function getOne (id, token){
    return request.get(`/data/doctors/${id}`, token)
}

export function create (data, token){
    console.log('asdsadsad');
    return request.post('/data/doctors', data, token)
}