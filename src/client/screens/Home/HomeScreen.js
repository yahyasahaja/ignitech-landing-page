//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'

//STYLES
import styles from './css/home-screen.scss'

//COMPONENT
export default class HomeScreen extends React.Component {
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
        {
        state => 
        <img 
          src="/img/ignitech1-logo_glass_shadow.png" 
          className={`${styles.logo} ${state} float-${scrollState} `}  
        />
        }
        </Transition>

        <div className={styles.desc}>  
          <Transition in={this.props.in} timeout={200}>{state => 
            <span className={`${styles.desc1} ${state} float-${scrollState} `}>Get 
              <span style={{color: '#FFC107'}}> Lit</span>
            </span>
          }</Transition>

          <Transition in={this.props.in} timeout={250}>{state => 
            <span className={`${styles.desc2} ${state} float-${scrollState} `}>with 
              <span style={{color: 'rgb(101, 186, 247)'}}> Tech</span>!
            </span>
          }</Transition>

          <Transition in={this.props.in} timeout={300}>{state => 
            <span className={`${styles.desc3} ${state} float-${scrollState} `}>
              Android, iOS, Web Developer
            </span>
          }</Transition>
        </div>
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