import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const cpfConsultationPage = require("../pages/cpf_consultation.page");

Given("the user accesses the CPF consultation page", () => {
  cpfConsultationPage.visit();
});

When("the user fills the consultation form with valid data", () => {
  cpfConsultationPage.fillFormWithFixtureData();
});

Then("the reCAPTCHA challenge should be displayed on the screen", () => {
  cpfConsultationPage.verifyCaptchaIsVisible();
});

And('the "Consultar" button should be visible', () => {
  cpfConsultationPage.verifyConsultButtonIsVisible();
});

When('the user clicks the "Consultar" button', () => {
  cpfConsultationPage.elements.consultButton().click();
});

Then('the user should be redirected to the "CPF Status" page', () => {
  cy.url().should("include", "/ConsultaSituacao/Resultado.asp");
});
