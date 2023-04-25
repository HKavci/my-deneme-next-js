import React from 'react'

const page = ({params}) => {
    console.log(params);
  return (
    <div>Post: {params.post}</div>
  )
}

export default page