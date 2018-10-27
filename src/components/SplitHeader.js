import React, { Component} from 'react'

class SplitHeader extends Component {

  render() {

    const { rightImage, leftImage } = this.props

    const sharedStyles = {
      width: "100%",
      height: "400px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }

    const leftStyle = {
      backgroundImage: `url(${leftImage})`,
      ...sharedStyles,
    }

    const rightStyle = {
      backgroundImage: `url(${rightImage})`,
      ...sharedStyles,
    }

    return (
      <div>
        Hello World        

        <div style={leftStyle}></div>
        <div style={rightStyle}></div>

        <svg className="clip-svg" width="0" height="0">
          <defs>
            <clipPath id="left-clip-shape" clipPathUnits="objectBoundingBox" >
              <polygon points="0 0, 0 0.6, 0.4 1, 1 0" />
            </clipPath>

            <clipPath id="right-clip-shape" clipPathUnits="objectBoundingBox" >
              <polygon points="0 1, 0 0, 1 0, 0.7 1" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }
}

export default SplitHeader
