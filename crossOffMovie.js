const { By } = require('selenium-webdriver')

const crossOffMovie = async (driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(2000)

}

module.exports = {
    crossOffMovie,
}