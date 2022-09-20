const { Builder, Capabilities } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {crossOffMovie} = require('../crossOffMovie.js')
const {deleteMovie} = require('../deleteMovie.js')
const {movieNotifaction} = require('../movieNotifaction.js')


beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

test('Cross off a movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test('Delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})

test('Delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})

test('Movie notifacation', async () => {
    await movieNotifaction(driver)
    await driver.sleep(3000)
})
