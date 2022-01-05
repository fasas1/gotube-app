import axios from 'axios'

const KEY = 'AIzaSyBOkdpfhUUOy7Iu1Hb0zB2PKhq7l0avC1k'


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part: "snippet",
        type: "video",
        maxResult: 10,
        key:KEY,
    },
})