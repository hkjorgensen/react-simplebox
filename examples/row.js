import React from 'react'
import { render } from 'react-dom'
import { Grid, Row } from '../src/index'

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
    <Grid height="block">
      <Row size={48} {...styles.blue}>
        Fixed
      </Row>
      <Row scroll="vertical" size={60}>
        <Row {...styles.orange} gap={8}>
          <Row>Deeply nested inside scroll</Row>
          <Row>Deeply nested inside scroll</Row>
          <Row>Deeply nested inside scroll</Row>
        </Row>
        <Row {...styles.skin}>Will</Row>
        <Row {...styles.yellow}>Scroll</Row>
        <Row {...styles.orange}>This</Row>
        <Row {...styles.skin}>Will</Row>
        <Row {...styles.yellow}>Scroll</Row>
      </Row>
      <Row size="fit">
        <Row>Nested</Row>
        <Row>within</Row>
        <Row>a</Row>
        <Row>fit</Row>
        <Row>row</Row>
        <Row size={80}>
          <Row {...styles.yellow}>Deeply nested</Row>
          <Row {...styles.skin}>Deeply nested</Row>
        </Row>
      </Row>
      <Row {...styles.skyblue}>Grow with available space</Row>
      <Row {...styles.skin}>Grow with available space</Row>
      <Row size={48} {...styles.blue}>
        Fixed
      </Row>
    </Grid>
  </div>
)

render(<App />, document.getElementById('root'))
