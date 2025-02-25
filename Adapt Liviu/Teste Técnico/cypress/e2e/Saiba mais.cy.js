describe('Testes Automatizados para Adapt Liviu - Correto', () => {
    const baseUrl = 'https://adaptliviu.com.br';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Saiba mais', () => {
      cy.get('.elementor-element-c13fc85 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();


    });
  });