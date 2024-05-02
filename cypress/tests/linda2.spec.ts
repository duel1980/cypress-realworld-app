describe('Visit codelinda.com', () => {
    it('should visit the website successfully', () => {
      cy.visit('https://codelinda.com')
      cy.url().should('include', 'codelinda.com')
    })
  })