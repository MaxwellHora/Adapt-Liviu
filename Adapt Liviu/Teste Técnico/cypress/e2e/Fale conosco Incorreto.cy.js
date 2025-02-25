describe('Testes Automatizados para Adapt Liviu - Incorreto', () => {
    const baseUrl = 'https://adaptliviu.com.br';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Fale com a nossa equipe', () => {
      cy.contains('Fale com a nossa equipe').click();
      cy.get('#form-field-name').type('M4xwell_H@ra');
      cy.get('#form-field-email').type('Maxwellemail.com');
      cy.get('#form-field-message').type('Adapt');
      cy.get('#form-field-field_f4f7f90').select('Liviu Drive');
      cy.get('#form-field-field_195975d').type('98314-8548321093832');
      cy.get('#form-field-field_98bbe7d').type('Gostaria de saber mais sobre a Adapt Liviu');
      cy.get('#form-field-field_757d493').click();
      cy.get('.elementor-field-type-submit > .elementor-button').click();
      cy.contains('Dados incorretos, por favor verifique').should('be.visible');
    });
  });
  
  
  