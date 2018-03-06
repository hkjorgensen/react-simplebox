import React from 'react'
import { render } from 'react-dom'
import { Grid, Row, Col } from '../src/index'

const App = () => {
  const maxHeight = {
    maxHeight: 50,
    display: 'flex',
  }

  const styleFixedViewport = {
    display: 'flex',
    height: '200px',
    width: '400px',
  }

  const styles = {
    maastrichtBlue: { boxStyle: { backgroundColor: 'rgba(0,11,51,0.8)' } },
    darkSkyBlue: { boxStyle: { backgroundColor: 'rgba(149,188,214, 0.8)' } },
    catalineBlue: { boxStyle: { backgroundColor: 'rgba(0,0,0, 0.8)' } },
    steelBlue: { boxStyle: { backgroundColor: 'rgba(62,120,178, 0.8)' } },
    appleGreen: { boxStyle: { backgroundColor: 'rgba(123,168,0, 0.8)' } },
  }

  return (
    <React.Fragment>
      <h1>Height = fit, Width = fit</h1>
      <div>
        <Grid height="fit" width="fit">
          <Col>
            <Row {...styles.maastrichtBlue}>One</Row>
            <Row {...styles.darkSkyBlue}>Two</Row>
          </Col>
          <Col>
            <Row {...styles.catalineBlue}>Three</Row>
            <Row {...styles.steelBlue}>Four</Row>
          </Col>
        </Grid>
      </div>

      <hr />

      <h1>Height = fill, width = fill</h1>
      <div style={styleFixedViewport}>
        <Grid height="fill" width="fill">
          <Col>
            <Row {...styles.maastrichtBlue}>One</Row>
            <Row {...styles.darkSkyBlue}>Two</Row>
          </Col>
          <Col>
            <Row {...styles.catalineBlue}>Three</Row>
            <Row {...styles.steelBlue}>Four</Row>
          </Col>
        </Grid>
      </div>

      <hr />

      <h1>Height = fill, width = fill, with vertical scroll</h1>
      <div style={maxHeight}>
        <Grid height="fill">
          <Row scroll="vertical">
            <Row size={20} {...styles.maastrichtBlue}>
              One
            </Row>
            <Row size={20} {...styles.darkSkyBlue}>
              Two
            </Row>
            <Row size={20} {...styles.catalineBlue}>
              Three
            </Row>
            <Row size={20} {...styles.steelBlue}>
              Four
            </Row>
            <Row size={20} {...styles.appleGreen}>
              Five
            </Row>
          </Row>
        </Grid>
      </div>

      <hr />

      <h1>Height = fill, width = fill, with horizontal scroll</h1>
      <div style={styleFixedViewport}>
        <Grid height="fill" width="fill">
          <Row scroll="horizontal">
            <Col size={170} {...styles.maastrichtBlue}>
              One
            </Col>
            <Col size={170} {...styles.darkSkyBlue}>
              Two
            </Col>
            <Col size={170} {...styles.catalineBlue}>
              Three
            </Col>
          </Row>
        </Grid>
      </div>
    </React.Fragment>
  )
}

render(<App />, document.getElementById('root'))
