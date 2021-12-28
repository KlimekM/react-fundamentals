// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// Exercise 5 - original
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{fontStyle: 'italic', backgroundColor: 'pink'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{fontStyle: 'italic', backgroundColor: 'orange'}}
//   >
//     large orange box
//   </div>
// )

function getBoxBackgroundColor(size) {
  switch (size) {
    case 'small':
      return 'lightblue'
    case 'medium':
      return 'pink'
    case 'large':
      return 'orange'
    default:
      return 'white'
  }
}

function Box({className = '', style, size, children, ...otherProps}) {
  const boxStyle = {
    backgroundColor: getBoxBackgroundColor(size),
    fontStyle: 'italic',
    ...style,
  }

  return (
    <div
      className={`box box--${size} ${className}`}
      style={boxStyle}
      {...otherProps}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small">small lightblue box</Box>
      <Box size="medium">medium pink box</Box>
      <Box size="large">large orange box</Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
