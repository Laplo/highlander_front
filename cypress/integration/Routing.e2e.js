describe('Routing E2E', () => {
    it('should redirect to the user page', () => {
        cy.visit('http://release.highlander.fail');
        let firstName = null;
        let lastName = null;
        cy.get('ul>li.list-group-item')
            .within(() => {
                cy.get('span#first-name').first().then($firstNameText => firstName = $firstNameText.text());
                cy.get('span#last-name').first().then($lastNameText => lastName = $lastNameText.text());
                cy.get('a').first().click();
            });
        cy.get('div#user-info > span#first-name').should($span => {
            expect($span).to.have.text('Prénom : ' + firstName)
        });
        cy.get('div#user-info > span#last-name').should($span => {
            expect($span).to.have.text( 'Nom : ' + lastName)
        });
    });
});
