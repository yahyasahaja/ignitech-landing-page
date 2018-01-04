//MODULES
import React from 'react'

//STYLES
import styles from './css/input.scss'

//COMPONENT
export default class Input extends React.Component {
  onChange = e => {
    if (this.props.onChange) this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className={styles.container}>
        {
          this.props.rows ? 
          <textarea 
          type={this.props.type} 
          value={this.props.value} 
          onChange={this.onChange}
          placeholder={this.props.placeholder}
          style={{height: this.props.rows * 40}}
          required={this.props.required}
          name={this.props.name}
        />
        :
        <input 
          type={this.props.type} 
          value={this.props.value} 
          onChange={this.onChange}
          placeholder={this.props.placeholder}
          required={this.props.required}
          name={this.props.name}
        />
        }
      </div>
    )
  }
}