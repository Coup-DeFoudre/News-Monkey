import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center'>
        <img className='h-14' src={loading} alt="loading..." />
      </div>
    )
  }
}

export default Spinner
