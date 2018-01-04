//MODULES
import React from 'react'

//STYLES
import styles from './css/order-input.scss'

//COMPONENT
export default class OrderInput extends React.Component {
  render() {
    return (
      <div className="container">
        <style jsx>{styles}</style>
        <input {...this.props} />
      </div>
    )
  }
}