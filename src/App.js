import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import React, { useState } from 'react'
import './App.css';
import { useRef } from 'react'

export default function App() {

  const [items, setItems] = useState([])
  const [item, setItem] = useState(null)

  let myInput = useRef(null)

  function handleChange(e) {
    setItem(e.target.value)
  }

  function handleClick() {

    if (myInput.current.value !== '') {
      setItems([...items, item])
      myInput.current.value = ''
    } else {
      alert("Vous devez d'abord spécifier une tache")
    }
  }

  return (
    <div className='text-center'>
      <div className='mb-5'>
        <h1 className='text-uppercase'>
          <span className=''>__</span> to-do Now <span>__</span>
        </h1>
      </div>

      <div className='mb-5'>
        <form className='row w-50 mx-auto rounded-pill' id='input'>
          <input
            ref={myInput}
            type="text" onChange={handleChange}
            className='col form-control rounded-pill' />
          <button type='button'
            className='btn rounded-pill col-2'
            onClick={handleClick} id='input-btn'>Add task</button>
        </form>
      </div>
      <hr className='mx-auto w-75' />
      <div className='my-5 text-center'>
        {
          items &&
          items.map((item, index) => (
            <ul className='my-3 w-50 mx-auto  rounded row list-items' key={index}>
              <li className='col text-start list-items-text py-1 overflow-hidden' > {item} </li>
              <button className='btn col-1 list-items-btn'
                onClick={() => {
                  let rep = window.confirm("Voulez-vous vraiment supprimer cette tache?")
                  if (rep) {
                    setItems(items.filter((image, i) => i !== index))
                  } else {
                    alert("Suppression annulée!")
                  }


                }} >
                <i className="bi bi-trash"></i>
              </button>
            </ul>
          ))
        }
      </div>
    </div>
  )
}


