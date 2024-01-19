import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Bank = () => {

    let [bank, setBank] = useState("")
    let [branch, setBranch] = useState("")
    let [code, setCode] = useState('')
    let navigate = useNavigate()

    let BankName = (e) => {
        setBank(e.target.value)
    }
    let Branch = (e) => {
        setBranch(e.target.value)
    }
    let Code = (e) => {
        setCode(e.target.value)
    }

    let FormHandle = () => {
        let payload = { bname: bank, bbranch: branch, bcode: code }
        axios.post("http://localhost:4000/bank", payload)
            .then(() => { console.log("got data"); })
            .catch(() => { console.log("err"); })
        navigate("/branchs")
    }
    return (
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
            <label htmlFor="">Country: </label>
            <input type="text" value={code} onChange={Code} />
            <br />
            <br />
            <button onClick={FormHandle}>Submit</button>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Bank
