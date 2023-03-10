import axios from 'axios'

const baseUrl = 'http://localhost:3001/tasks'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }