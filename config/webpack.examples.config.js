const path = require('path')
const fs = require('fs')
const fourZeroFourHtml = (page, pages) => `
<html>
  <head>
    <title>Page not found</title>
  </head>
  <body>
    <h1>Could not find page "${page}".</h1>
    <p>Try one of the valid pages:</p>
    <ul>
      ${Object.keys(pages)
        .map(page => `<li><a href="/examples/${page}">${page}</a></li>`)
        .join('\n')}
    </ul>
  </body>
</html>
`

const indexHtml = ({ pages }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>react-simplebox</title>
  <style>
    html { box-sizing: border-box; }
    *, *:before, *:after { box-sizing: inherit; }
    body { font-family: sans-serif; margin: 0; }
  </style>
</head>
<body>
  <p>Try one of the examples:</p>
  <ul>
    ${Object.keys(pages)
      .map(page => `<li><a href="/examples/${page}">${page}</a></li>`)
      .join('\n')}
  </ul>
</body>
</html>
`

const pageHtml = ({ title, jsSource }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${title}</title>
  <style>
    html { box-sizing: border-box; }
    *, *:before, *:after { box-sizing: inherit; }
    body { font-family: sans-serif; margin: 0; }
  </style>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="/${jsSource}"></script>
</body>
</html>
`

const pages = fs
  .readdirSync(path.join(__dirname, '..', 'examples'))
  .filter(file => /\.js$/.test(file))
  .reduce((memo, file) => {
    memo[file.replace('.js', '')] = path.join(__dirname, '..', 'examples', file)
    return memo
  }, {})

const before = app => {
  app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'styles.css'))
  })

  app.get('/', (req, res) => {
    const html = indexHtml({ pages })
    res.send(html)
  })

  app.get('*', (req, res, next) => {
    // js files are handled by webpack-dev-server
    if (/\.js$/.test(req.path)) {
      next()
      return
    }

    const page = req.path.replace('/examples/', '')

    if (!pages[page]) {
      res.status(404).send(fourZeroFourHtml(page, pages))
      return
    }

    const html = pageHtml({
      title: `Example: ${page}`,
      jsSource: `${page}.js`,
    })

    res.send(html)
  })
}

module.exports = {
  entry: pages,
  output: { pathinfo: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'examples'),
    compress: true,
    port: 8000,
    before: before,
  },
}
