import puppeteer from 'puppeteer'
let page, browser

const DEBUG = false

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: !DEBUG })
  page = await browser.newPage()
  page.setViewport({
    width: 800,
    height: 600,
  })
})

afterAll(async () => {
  browser.close()
})

test('Row', async () => {
  await page.goto('http://localhost:8000/examples/row')
  const screenshot = await page.screenshot()

  expect(screenshot).toMatchImageSnapshot()
})

test('iOS', async () => {
  await page.goto('http://localhost:8000/examples/ios')
  const screenshot = await page.screenshot()

  expect(screenshot).toMatchImageSnapshot()
})
