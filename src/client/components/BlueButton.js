//MODULES
import React from 'react'

//STYLES
import styles from './css/blue-button.scss'

//COMPONENT
export default class BlueButton extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.props.onClick} type={this.props.type}>
          {
            this.props.icon ? 
            <span className={`mdi mdi-${this.props.icon} ${styles.icon}`} /> : 
            null
          }
          <span>{this.props.label}</span>
        </button>
      </div>
    )
  }
}