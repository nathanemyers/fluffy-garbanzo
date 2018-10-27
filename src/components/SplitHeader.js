import React, { Component} from 'react'

class SplitHeader extends Component {

  render() {
    const { rightImage, leftImage } = this.props

    const leftStyle = {
      backgroundImage: `url(${leftImage})`,
    }
    const rightStyle = {
      backgroundImage: `url(${rightImage})`,
    }

    return (
      <div className="split-header">
        <div className="split-image left-split" style={leftStyle}></div>
        <div className="split-image right-split" style={rightStyle}></div>
      </div>
    )
  }
}

export default SplitHeader
