describe('Testes Automatizados para Adapt Liviu - Correto', () => {
    const baseUrl = 'https://adaptliviu.com.br';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Fale com a nossa equipe', () => {
      cy.get('.elementor-element-c9a742e > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
      cy.get('.elementor-element-7462b00 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
      cy.get('#form-field-name', { timeout: 5000 }).should('be.visible').type('Maxwell Hora');
      cy.get('#form-field-email').type('Maxwell@hotmail.com');
      cy.get('#form-field-message').type('Microsoft Corporation');
      cy.get('#form-field-field_f4f7f90').select('LIviu Content');
      cy.get('#form-field-field_195975d').type('11 98314-8548');
      cy.get('#form-field-field_98bbe7d').type('Gostaria de Conhecer mais sobre Adapt.');
      cy.get('#form-field-field_757d493').click();
  
      cy.get('.elementor-field-type-submit .elementor-button .elementor-button-content-wrapper').click();


    });
  });