const { By } = require('selenium-webdriver')

const movieNotifaction = async (driver) => {

    const movie = "Detective Pikachu";
    await driver.findElement(By.xpath('//input')).sendKeys(movie)
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/button')).click()

    const asideText = await driver.findElement(By.xpath("//aside")).getText();
    expect(asideText).toEqual(`${movie} deleted!`);

    await driver.sleep(2000)


}

module.exports = {
    movieNotifaction,
}

