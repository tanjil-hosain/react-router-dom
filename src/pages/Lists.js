import React from 'react'

export default function Lists() {
    const fruits=['Apple', 'Banena', 'Jackfruit'];
  return (
    <>
      <h1>List</h1>
      <ul>
        {
            fruits.map((fruit) =><li>This is a {fruit}</li> )
        }
      </ul>

    </>
  )
}
