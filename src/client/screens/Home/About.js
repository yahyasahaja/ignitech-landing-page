//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'

//STYLES
import styles from './css/about.scss'

//COMPONENTS
import Button from '../../components/BlueButton'

//COMPONENT
export default class About extends React.Component {
  componentDidMount() {
    setTimeout(() => this.setState({mounted: true}), 300)
  }

  state = {
    mounted: false,
  }

  renderContent = state => {
    let { scrollState } = this.props
    let { mounted } = this.state

    scrollState = !mounted ? 'init' : scrollState 
    state = !mounted ? 'init' : state 
    
    return (
      <div className={`${styles.container} ${state} fade`}>
        <Transition 
          in={this.props.in}
          timeout={100}
        >
        { state => <h1 className={`${styles.title} ${state} float-${scrollState} `}>About Us</h1> }
        </Transition>
        <Transition 
          in={this.props.in}
          timeout={200}
        >
        {
        state =>
        <div className={`${styles.wrapper} ${state} float-${scrollState} `}>
          <div className={styles.card}>
            <h1>Mission Statement</h1>
            <p>Lorem impsum dolor sit amet Lorem impsum dolor sit amet 
            Lorem impsum dolor sit amet
            Lorem impsum dolor sit amet
            Lorem impsum dolor sit amet
            Lorem impsum dolor sit amet
            </p>
          </div>
          <div className={styles.card}>
            <h1>Mission Statement</h1>
            <p>Lorem impsum dolor sit amet Lorem impsum dolor sit amet 
            Lorem impsum dolor sit amet
            Lorem impsum dolor sit amet
            Lorem impsum dolor sit amet
            Lorem impsum dolor sit amet
            </p>
          </div>
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
        <Button label="Get to know us" icon="account-multiple" />
        </div>
        }
        </Transition>
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