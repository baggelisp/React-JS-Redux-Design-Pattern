import axios from 'axios';

export function getToDos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
}