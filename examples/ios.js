import React from 'react'
import { render } from 'react-dom'
import { Grid, Row, Col } from '../src/index'

const styles = {
  header: {
    size: 64,
    align: 'center',
    justify: 'space-between',
    paddingStart: 16,
    paddingEnd: 16,
    boxStyle: { borderBottom: '1px solid #eaeaea' },
  },
  footer: {
    size: 64,
    boxStyle: { borderTop: '1px solid #eaeaea' },
  },
  listItem: {
    size: 128,
    paddingStart: 16,
    paddingEnd: 16,
    boxStyle: { backgroundColor: 'lightgrey' },
  },
  menu: {
    justify: 'center',
    align: 'center',
  },
}

const App = () => (
  <div style={{ height: '100vh', display: 'flex' }}>
    <Grid height="block">
      <Row {...styles.header}>
        <Col>
          <a href="#">Back</a>
        </Col>
        <Col>
          <h1>Title</h1>
        </Col>
        <Col>
          <a href="#">Save</a>
        </Col>
      </Row>
      <Row scroll="vertical" gap={16}>
        <Row {...styles.listItem}>1</Row>
        <Row {...styles.listItem}>2</Row>
        <Row {...styles.listItem}>3</Row>
        <Row {...styles.listItem}>4</Row>
        <Row {...styles.listItem}>5</Row>
        <Row {...styles.listItem}>6</Row>
        <Row {...styles.listItem}>7</Row>
        <Row {...styles.listItem}>8</Row>
        <Row {...styles.listItem}>9</Row>
        <Row {...styles.listItem}>10</Row>
      </Row>
      <Row {...styles.footer}>
        <Col {...styles.menu}>
          <a href="#">Menu 1</a>
        </Col>
        <Col {...styles.menu}>
          <a href="#">Menu 2</a>
        </Col>
        <Col {...styles.menu}>
          <a href="#">Menu 3</a>
        </Col>
      </Row>
    </Grid>
  </div>
)

render(<App />, document.getElementById('root'))
