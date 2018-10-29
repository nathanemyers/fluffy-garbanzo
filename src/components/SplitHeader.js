import React, { Component} from 'react'
import classNames from 'classnames'

class SplitHeader extends Component {

  constructor(props) {
    super(props)

    this.state = {
      focus: 'center',
      fullScreen: false,
    }

    this.openFullScreen = () => {
      console.log('open fullscreen');
      if (!this.state.fullScreen) {
        debugger
        this.setState({ fullscreen: true })
      }
    }

    this.closeFullScreen = () => {
      console.log('close fullscreen');
      if (this.state.fullScreen) {
        this.setState({ fullscreen: false })
      }
    }

    this.setFocus = (side) => {
      console.log(`set focus ${side}`);
      this.setState({ focus: side })
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

    const leftButton = classNames({
      "hidden": !fullScreen,
      "close-button": true
    })
    const rightButton = classNames({
      "hidden": !fullScreen,
      "close-button": true
    })

    return (
      <div className="split-header">
        <div 
          className={leftClass} 
          style={leftStyle}
          onMouseEnter={() => this.setFocus('left')}
          onClick={this.openFullScreen}
        >
        </div>
        <div 
          className={rightClass}
          style={rightStyle}
          onMouseEnter={() => this.setFocus('right')}
          onClick={this.openFullScreen}
        >
          <button 
            className={rightButton}
            onClick={this.closeFullScreen}
          >
            Close
          </button>
        </div>
    </div>
    )
  }
}

export default SplitHeader
