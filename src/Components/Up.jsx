import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Up = () => {
    let [bank, setBank] = useState("")
    let [branch, setBranch] = useState("")
    let [code, setCode] = useState('')
    let navigate = useNavigate()
    let object = useParams()

    let BankName = (e) => {
        setBank(e.target.value)
    }
    let Branch = (e) => {
        setBranch(e.target.value)
    }
    let Code = (e) => {
        setCode(e.target.value)
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/bank/${object.id}`)
            .then((res) => {
                setBank(res.data.bname)
                setBranch(res.data.bbranch)
                setCode(res.data.bcode)
            })
            .catch(() => { console.log('err'); })
    }, [object.id])

    let FormHandle = () => {
        let payload = { bname: bank, bbranch: branch, bcode: code }
        axios.put(`http://localhost:4000/bank/${object.id}`, payload)
            .then(() => { console.log("got data"); })
            .catch(() => { console.log("err"); })
        navigate("/branchs")
    }

    return (
        <div>
            <div>
                <label htmlFor="">BankName: </label>
                <input type="text" value={bank} onChange={BankName} />
                <br />
                <br />
                <label htmlFor="">Branch: </label>
                <input type="text" value={branch} onChange={Branch} />
                <br />
                <br />
                <label htmlFor="">IFSC: </label>
                <input type="text" value={code} onChange={Code} />
                <br />
                <br />
                <button onClick={FormHandle}>Update</button>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Up
