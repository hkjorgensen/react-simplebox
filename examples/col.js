import React from 'react'
import { render } from 'react-dom'
import { Grid, Col, Row } from '../src/index'

const App = () => (
  <div style={{ minHeight: '100vh', display: 'flex' }}>
    <Grid>
      <Row>First</Row>
      <Row>
        <Col>Second</Col>
        <Col>Third</Col>
      </Row>
    </Grid>
  </div>
)

render(<App />, document.getElementById('root'))
