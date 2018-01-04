//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import _ from 'lodash'

//STYLES
import styles from './css/contact.scss'

//COMPONENTS
import Button from '../../components/BlueButton'
import Input from '../../components/Input'

//COMPONENT
export default class Contact extends React.Component {
  componentDidMount() {
    setTimeout(() => this.setState({mounted: true}), 300)
  }

  state = {
    mounted: false,
    name: null,
    email: null,
    message: null,
  }

  handleChange(name, value) {
    this.setState({[name]: value})
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state.email)
  }

  renderContent = state => {
    let { scrollState } = this.props
    let { mounted, name, email, message } = this.state

    scrollState = !mounted ? 'init' : scrollState 
    state = !mounted ? 'init' : state 
    
    return (
      <div className={`${styles.container} ${state} fade`}>
        <form onSubmit={this.onSubmit} >
        <Transition 
          in={this.props.in}
          timeout={100}
        >
        { state => <h1 className={`${styles.title} ${state} float-${scrollState} `}>Contact Us</h1> }
        </Transition>
        <Transition 
          in={this.props.in}
          timeout={200}
        >
        {
        state =>
        <div className={`${styles.wrapper} ${state} float-${scrollState} `}>
          <Input
            value={name}
            type="text" name="name"
            onChange={this.handleChange.bind(this, 'name')}
            placeholder="Name"
            required
          />

          <Input
            value={email}
            type="email" name="email"
            onChange={this.handleChange.bind(this, 'email')}
            placeholder="Email"
            required
          />

          <Input
            value={message}
            type="text" name="message"
            onChange={this.handleChange.bind(this, 'message')}
            placeholder="Type your Message.."
            rows={3}
            required
          />
        </div>
        }
        </Transition>
        <Transition 
          in={this.props.in}
          timeout={300}
        >
        {
        state =>
        <div className={`${styles['button-wrapper']} ${state} float-${scrollState} `}>
        <Button label="Submit" icon="send" type="submit" />
        </div>
        }
        </Transition>
        </form>
        <span className={styles.footer}>Copyright &copy; 2017 Ignitech. All rights reserved</span>
      </div>
    )
  }

  render() {
    return (
      <Transition 
        in={this.props.in}
        timeout={100}
      >
      {this.renderContent}
      </Transition>
    )
  }
}