import React from 'react'
import { render } from 'react-dom'
import { Grid, Row, Col } from '../src/index'

const styles = {
  one: {
    boxStyle: { backgroundColor: 'rgba(68, 235, 255, 0.4)' },
  },
  two: {
    boxStyle: { backgroundColor: 'rgba(244, 233, 26, 0.4)' },
  },
  three: {
    boxStyle: { backgroundColor: 'rgba(245, 138, 247, 0.4)' },
  },
  four: {
    boxStyle: { backgroundColor: 'rgba(85, 182, 118, 0.4)' },
  },
  five: {
    boxStyle: { backgroundColor: 'rgba(244, 73, 180, 0.4)' },
  },
  six: {
    boxStyle: { backgroundColor: 'rgba(162, 114, 132, 0.4)' },
  },
  seven: {
    boxStyle: { backgroundColor: 'rgba(22, 112, 124, 0.4)' },
  },
  eight: {
    boxStyle: { backgroundColor: 'rgba(223, 226, 225, 0.4)' },
  },
}

const GRID_SIZE = 20

const App = () => (
  <div
    style={{
      height: GRID_SIZE * 21,
      width: GRID_SIZE * 21 + GRID_SIZE * 13,
      display: 'flex',
    }}
  >
    <Grid
      gridSize={GRID_SIZE}
      forceGridSize
      gridHelper="modular"
      height="block"
    >
      <Col size={21} align="center" justify="center" {...styles.one}>
        21
      </Col>
      <Col size={13}>
        <Row size={13} align="center" justify="center" {...styles.two}>
          13
        </Row>
        <Row size={8}>
          <Col size={5}>
            <Row size={3}>
              <Col size={3} align="center" justify="center" {...styles.five}>
                3
              </Col>
              <Col size={2}>
                <Row size={2} align="center" justify="center" {...styles.six}>
                  2
                </Row>
                <Row size={1}>
                  <Col align="center" justify="center" {...styles.seven}>
                    1
                  </Col>
                  <Col align="center" justify="center" {...styles.eight}>
                    1
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row size={5} align="center" justify="center" {...styles.four}>
              5
            </Row>
          </Col>
          <Col size={8} align="center" justify="center" {...styles.three}>
            8
          </Col>
        </Row>
      </Col>
    </Grid>
  </div>
)

render(<App />, document.getElementById('root'))
