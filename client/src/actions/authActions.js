import { GET_ERRORS } from '../constants'
import axios from 'axios'

export const registerUser = (userData, history) => dispatch => {
    axios.post('http://localhost:5000/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}