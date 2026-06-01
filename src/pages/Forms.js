import React, { useState } from 'react'

export default function Forms() {
  const[inputs , setInputs]=  useState({});

  const fromHandle = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
    console.log(inputs)
  }
  return (
    <>
      <h1>Forms</h1>
      Name: <br />
      <input type="text" name='name' value={inputs.name} onChange={fromHandle}/> <br />
      Phone: <br />
      <input type="text" name='phone' value={inputs.phone} onChange={fromHandle} />

    </>
  )
}
