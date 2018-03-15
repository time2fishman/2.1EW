module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after: browser => {
        browser.end()
    },

    'basic test': browser => {
        browser.waitForElementVisible('.cake', 4000)
    }

}