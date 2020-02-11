describe('User E2E', () => {
    it('should have the correct profil page', () => {
        cy.visit('http://release.highlander.fail/profil/b7d0f709-5058-4c9b-a601-91f7c2c59912');
        cy.get('div#user-info').within(() => {
            cy.get('span#first-name')
                .should('have.text', 'Prénom : ');
        });
    });
});
