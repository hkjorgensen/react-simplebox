import React from 'react'
import { render } from 'react-dom'
import { Grid, Col } from '../src/index'

const styles = {
  blue: {
    boxStyle: { backgroundColor: 'rgba(12, 69, 125, 0.4)' },
  },
  skyblue: {
    boxStyle: { backgroundColor: 'rgba(135, 206, 255, 0.4)' },
  },
  skin: {
    boxStyle: { backgroundColor: 'rgba(250, 235, 215, 0.4)' },
  },
  yellow: {
    boxStyle: { backgroundColor: 'rgba(255, 204, 92, 0.4)' },
  },
  orange: {
    boxStyle: { backgroundColor: 'rgba(232, 112, 42, 0.4)' },
  },
  fit: {
    gap: 16,
    size: 'fit',
  },
}

const App = () => (
  <div style={{ height: '100vh', display: 'flex' }}>
    <Grid height="fill">
      <Col size={48} {...styles.blue}>
        Fixed
      </Col>
      <Col scroll="horizontal" size={60}>
        <Col {...styles.orange} gap={8}>
          <Col>Deeply nested inside scroll</Col>
          <Col>Deeply nested inside scroll</Col>
          <Col>Deeply nested inside scroll</Col>
        </Col>
        <Col {...styles.skin}>Will</Col>
        <Col {...styles.yellow}>Scroll</Col>
        <Col {...styles.orange}>This</Col>
        <Col {...styles.skin}>Will</Col>
        <Col {...styles.yellow}>Scroll</Col>
      </Col>
      <Col size="fit">
        <Col>Nested</Col>
        <Col>within</Col>
        <Col>a</Col>
        <Col>fit</Col>
        <Col>row</Col>
        <Col size={160}>
          <Col {...styles.yellow}>Deeply nested</Col>
          <Col {...styles.skin}>Deeply nested</Col>
        </Col>
      </Col>
      <Col {...styles.skyblue}>Grow with available space</Col>
      <Col {...styles.skin}>Grow with available space</Col>
      <Col size={48} {...styles.blue}>
        Fixed
      </Col>
    </Grid>
  </div>
)

render(<App />, document.getElementById('root'))
