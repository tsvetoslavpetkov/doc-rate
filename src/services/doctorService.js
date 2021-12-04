import request from '../helpers/request'

export function getAll (){
    return request.get('/jsonstore/doctors')
}

export function create (data){
    console.log(data);
    return request.post('/jsonstore/doctors', data)
}