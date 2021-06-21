/* global Given, Then, When */

import Auth from '../pages/LoginPage'
import Home from '../pages/HomePage'
import user from '../../fixtures/user.json'

Given("that I am on the login page", () => {
    cy.visit('/login')
})

When("I input username and password", () => {
    Auth.fillFieldUsername(user.username)
    Auth.fillFieldPassword(user.password)
})

And("click in button {string}", () => {
    Auth.clickInButtonLogin()
})

Then("log-in will be successfully", () => {
    Home.validateMessagemWelcome()
})

When("I input username and password invalid", () => {
    Auth.authenticateWithDataInvalid()
})

Then("return message error on screen", () => {
    Auth.validateInvalidUserMessage()
})
