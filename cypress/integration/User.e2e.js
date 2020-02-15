describe('User E2E', () => {
    it('should have the correct profil page', () => {
        cy.visit('http://release.highlander.fail/profil/2e2756f1-38fc-4a9a-a38c-a67c25360d1b');
        cy.get('div#user-info').within(() => {
            cy.get('span#first-name')
                .should('have.text', 'Prénom : Ronan');
        });
    });
});
