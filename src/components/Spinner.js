import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  
    return (
      <div className='flex justify-center'>
        <img className='h-14' src={loading} alt="loading..." />
      </div>
    )
  }


export default Spinner
