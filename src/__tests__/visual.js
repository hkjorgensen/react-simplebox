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

test('row', async () => {
  await page.goto('http://localhost:8000/examples/row')
  const screenshot = await page.screenshot()

  expect(screenshot).toMatchImageSnapshot()
})

test('ios', async () => {
  await page.goto('http://localhost:8000/examples/ios')
  const screenshot = await page.screenshot()

  expect(screenshot).toMatchImageSnapshot()
})

test('fibonacci', async () => {
  await page.goto('http://localhost:8000/examples/fibonacci')
  const screenshot = await page.screenshot()

  expect(screenshot).toMatchImageSnapshot()
})
