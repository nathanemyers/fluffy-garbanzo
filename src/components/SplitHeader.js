import React, { Component} from 'react'
import classNames from 'classnames'

class SplitHeader extends Component {

  constructor(props) {
    super(props)

    this.state = {
      focus: 'center',
      fullScreen: false,
    }
  }

  render() {
    const { rightImage, leftImage } = this.props

    const leftStyle = {
      backgroundImage: `url(${leftImage})`,
    }
    const rightStyle = {
      backgroundImage: `url(${rightImage})`,
    }

    const { focus, fullScreen } = this.state
    console.log(`focus: ${focus}`);
    console.log(`fullScreen: ${fullScreen}`);

    const leftClass = classNames({
      "split-image": true,
      "left-split": focus === 'center',
      "left-split-left": focus === 'left',
      "left-split-right": focus === 'right',
      "fullscreen": fullScreen,
    })
    const rightClass = classNames({
      "split-image": true,
      "right-split": focus === 'center',
      "right-split-left": focus === 'left',
      "right-split-right": focus === 'right',
      "fullscreen": fullScreen,
    })
    

    return (
      <div className="split-header">
        <div 
          className={leftClass} 
          style={leftStyle}
          onMouseEnter={() => this.setState({ focus: 'left' })}
          onClick={() => this.setState({ fullScreen: true })}
        >
        </div>
        <div 
          className={rightClass}
          style={rightStyle}
          onMouseEnter={() => this.setState({ focus: 'right' })}
          onClick={() => this.setState({ fullScreen: true })}
        ></div>
      </div>
    )
  }
}

export default SplitHeader
