import React, { Component} from 'react'
import classNames from 'classnames'

class SplitHeader extends Component {

  constructor(props) {
    super(props)

    this.state = {
      focus: 'center',
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

    const leftClickHandler = () => {
      console.log('left clicked!')
      this.setState({
        focus: 'left',
      })
    }
    const rightClickHandler = () => {
      console.log('right clicked!')
      this.setState({
        focus: 'right',
      })
    }

    const { focus } = this.state
    const leftClass = classNames({
      "split-image": true,
      "left-split": focus === 'center',
      "left-split-left": focus === 'left',
      "left-split-right": focus === 'right',
    })
    const rightClass = classNames({
      "split-image": true,
      "right-split": focus === 'center',
      "right-split-left": focus === 'left',
      "right-split-right": focus === 'right',
    })
    

    return (
      <div className="split-header">
        <div 
          className={leftClass} 
          style={leftStyle}
          onClick={leftClickHandler}
        >
        </div>
        <div 
          className={rightClass}
          style={rightStyle}
          onClick={rightClickHandler}
        ></div>
      </div>
    )
  }
}

export default SplitHeader
