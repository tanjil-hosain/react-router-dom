import React from 'react'

export default function Props() {
    const person = {
        name: 'Tanjil Hossain',
        age: 23,
        address: 'Mirpur'
    }
    // const {a,b,c} = person
  return (
    <>
      <h1>distructuring</h1>
      Name: {person.name} <br />
      Age: {person.age} <br />
      Address: {person.address}

    </>
  )
}
