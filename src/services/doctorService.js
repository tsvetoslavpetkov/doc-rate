import request from '../helpers/request'

export function getAll (){
    return request.get('/jsonstore/doctors')
}

export function getOne (id){
    return request.get(`/jsonstore/doctors/${id}`)
}

export function create (data){
    console.log('asdsadsad');
    return request.post('/jsonstore/doctors', data)
}