import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Branchs = () => {
  let [content, setContent] = useState([])


  useEffect(() => {
    axios.get("http://localhost:4000/bank")
      .then((res) => { setContent(res.data) })
      .catch(() => { console.log('err'); })
  }, [])

  let del = (e) => {
    axios.delete(`http://localhost:4000/bank/${e}`)
    window.location.assign("/branchs")
  }

  return (
    <div>
      {content.map((x) => {
        return (
          <div>
            <label htmlFor="">BankName: </label>
            <input type="text" value={x.bname} />
            <br />
            <br />
            <label htmlFor="">Branch: </label>
            <input type="text" value={x.bbranch} />
            <br />
            <br />
            <label htmlFor="">IFSC: </label>
            <input type="text" value={x.bcode} />
            <br />
            <br />
            <Link to={`/up/${x.id}`}><button>Edit</button></Link>
            <button onClick={() => { del(x.id) }}>Delete</button>
            <br />
            <br />
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default Branchs
