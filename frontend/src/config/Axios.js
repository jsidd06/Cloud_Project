import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://siddjain-business.herokuapp.com/',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
})

export default Axios
