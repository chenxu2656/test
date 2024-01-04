// folder
import axios from 'axios'
const headers = {
    token: localStorage.getItem("token")
}
const createEms = async(field)=>{
    const resp = await axios({
        url: "/api/ems",
        method: "post",
        headers: headers,
        data: field
    })
    if (resp) {
        return resp
    }
}
const emsList = async()=>{
    const resp = await axios({
        url: "/api/ems",
        method: "get",
    })
    if (resp) {
        return resp
    }
}
const createEmi = async(field)=>{
    const resp = await axios({
        url: "/api/emi",
        method: "post",
        headers: headers,
        data: field
    })
    if (resp) {
        return resp
    }
}
const emiList = async()=>{
    const resp = await axios({
        url: "/api/emi",
        method: "get",
    })
    if (resp) {
        return resp
    }
}
export{
    createEms,
    emsList,
    createEmi,
    emiList
}