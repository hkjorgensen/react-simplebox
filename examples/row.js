import React from 'react'
import { render } from 'react-dom'
import { Grid, Row } from '../src/index'

const App = () => (
  <div style={{ minHeight: '100vh', display: 'flex' }}>
    <Grid>
      <Row size={48} boxStyle={{ background: 'tomato' }}>
        Header
      </Row>
      <Row boxStyle={{ background: 'steelblue' }}>Content</Row>
      <Row size={48} boxStyle={{ background: 'tomato' }}>
        Footer
      </Row>
    </Grid>
  </div>
)

render(<App />, document.getElementById('root'))
