describe('Routing E2E', () => {
    it('should redirect to the user page', () => {
        cy.visit('http://release.highlander.fail');
        const userInfo = cy.get('li.list-group-item').first().get('a');
        userInfo.get('span#first-name').invoke('text')
            .then(firstName => {
                userInfo.get('span#last-name').invoke('text')
                    .then(lastName => {
                        userInfo.click();
                        cy.get('div#user-info > span#first-name').should('have.text',`Prénom : ${firstName}`);
                        cy.get('div#user-info > span#last-name').should('have.text',`Nom : ${lastName}`);
                    });
            })
    });
});
