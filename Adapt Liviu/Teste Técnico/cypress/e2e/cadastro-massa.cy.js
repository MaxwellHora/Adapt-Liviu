import { usuarios } from '../fixtures/usuario.json';

describe('Página de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adaptliviu.com.br');
        cy.contains('Fale com a nossa equipe', { timeout: 10000 }).click();
    });

    usuarios.forEach((usuario) => {
        it(`Deve preencher o formulário corretamente para o usuário: ${usuario.nome}`, () => {
            cy.get('#form-field-name').clear().type(usuario.nome);
            cy.get('#form-field-email').clear().type(usuario.email);
            cy.get('#form-field-message').clear().type(usuario.empresa); 
            cy.get('#form-field-field_195975d').clear().type(usuario.telefone); 
            cy.get('#form-field-field_98bbe7d').clear().type(usuario.mensagem); 
       
            cy.get('#form-field-field_f4f7f90').select(usuario.produto);

            cy.get('#form-field-field_757d493').check({ force: true });

            cy.get('.elementor-button[type="submit"]').click();

            cy.contains('Mensagem enviada com sucesso', { timeout: 10000 }).should('be.visible');
        });
    });
});