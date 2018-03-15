/**
 * inputField clears, sets, and verifies an input field
 * @param {object} browser the Nightwatch object
 * @param {string} selector the selector for the field in question
 * @param {string} value the value to set the field to
 */
let inputField = (browser, selector, value) => {
    browser
        .clearValue(selector)
        .setValue(selector, value)
        .verify.value(selector, value)
}

module.exports = {
    inputField: inputField
}