describe('App E2E', () => {
    it('should an excluding tax CA of 0', () => {
        cy.visit('http://release.highlander.fail');
        cy.get('div#Ca').within(() =>{
            cy.get('span#HT')
                .should('have.text', 'Chiffre d\'affaire d\'Highlander HT : 0€');
        })
    });
});
