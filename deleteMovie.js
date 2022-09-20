const { By } = require('selenium-webdriver')

const deleteMovie = async (driver) => {

    await driver.findElement(By.xpath("//li/button")).click();
    await driver.sleep(2000)

}

module.exports = {
    deleteMovie,
}

