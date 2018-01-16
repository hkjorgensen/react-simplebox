# react-simplebox
A simple way to build application layouts

## Installation
With [npm](https://www.npmjs.com/) do:
```bash
npm install react-simplebox --save
```
With [yarn](https://yarnpkg.com) do:
```bash
yarn add react-simplebox
```

## Usage
```js
import React, { Component } from 'react'
import { Grid, Row, Col, Scroll } from 'react-simplebox'
import 'react-simplebox/build/styles.css'

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: 500, width: 500 }}>
        <Grid>
          <Row>First</Row>
          <Row>
            <Col>Second</Col>
            <Col>Third</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

```

## Examples
Goes here...

## Dependencies
react-simplebox depends on [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) - it's recommend to use with react v16.2+ because of [fragments](https://reactjs.org/docs/fragments.html) that helps eliminate wrapping elements noise at a minimum.

## API

### `Grid`
- `gridSize` (number) default: `8` - px value of the desired grid
- `forceGridSize` (bool) default: `false` - All children values will be units of `gridSize` instead of px values.
- `dir` (string) default: `ltr` - content direction one of: "ltr" or "rtl"
- `gap` (number) default: `null` - gap between children elements
- `debug` (bool) default: `false` - enable debug helpers
- `debugType` (string) default: `background` - toggle childrens debug layout with one of: "background" or "outline"
- `gridHelper` (string) default: `null` - toggle background grid with one of: "baseline", "baseline2", "modular", "modular2"

### `Row` & `Col`
- `size` (number|string) default: `0` - define the size of element use a number or `auto`.
- `gap` (number) default: `null` - define the gap between children.
- `justify` (string) default: `null` - define how to justify children with one of "start", "center", "end" or "space-between".
- `align` (string) default: `null` - define how to children according to the Y-axis. Allowed value is "center".
- `relative` (bool) default: `false` - mark the element as relative to the children.
- `paddingStart` (number) default: `null`
- `paddingEnd` (number) default: `null`
- `paddingTop` (number) default: `null`
- `paddingBottom` (number) default: `null`
- `scroll` (string) default: `vertical` - define scrolling behaviour with one of: "vertical", "horizontal" or "both"
- `onScroll` (func) default: `null` - callback used when scrolling position changes.
- `config` (object) default: `{}` - *WARNING: INTERNAL, automatic provided by the parent.*
