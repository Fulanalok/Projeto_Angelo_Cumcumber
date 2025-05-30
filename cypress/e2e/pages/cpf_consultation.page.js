class CpfConsultationPage {
  elements = {
    cpfField: () => cy.get("#txtCPF"),
    birthDateField: () => cy.get("#txtDataNascimento"),
    consultButton: () => cy.get("#btnConsultar"),
    captcha: () => cy.get('iframe[title="reCAPTCHA"]'),
  };

  visit() {
    cy.visit(
      "https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp"
    );
  }

  fillFormWithFixtureData() {
    cy.fixture("cpf_data").then((data) => {
      this.elements.cpfField().type(data.validCpf);
      this.elements.birthDateField().type(data.validBirthDate);
    });
  }

  verifyCaptchaIsVisible() {
    this.elements.captcha().should("be.visible");
  }

  verifyConsultButtonIsVisible() {
    this.elements.consultButton().should("be.visible");
  }
}

module.exports = new CpfConsultationPage();
