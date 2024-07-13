import React, { useState} from 'react'

import axios from 'axios';


const Input = () => {

const [name, setName] = useState('') ; 
const [data, setData] = useState([]);
const [error, setError] = useState(null);

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      console.log(data)
      setData(res.data);
    } catch (error) {
        console.log(error)
      setError(error.message);
    }
  };
  return (
    <div className="input">
       <h2 className="">KATIFUNZA</h2> 
     <form action="/" method="get" onSubmit={handleSubmit}>
     <input 
     type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="name"
        required
     />

     <button value="submit">Search</button>

     </form>

     {/* hanle output display */}
     <div className="output">
        <h1>KATIFUNZA CHAPTER ONE</h1>
       {/* <p>{data}</p> */}
       <p>{JSON.stringify(data)}</p>

       {error && <p style={{ color: 'red' }}>{error}</p> }

     </div>

    </div>
  )
}

export default Input