describe('Contact Form Submission Test', () => {
  it('should submit the contact form successfully', () => {
    // Step 1: Go to https://codelinda.com
    cy.visit('https://codelinda.com')

    // Step 2: Click on "Contact"
    cy.contains('Contact').click()

        // Wait for 1 s
        cy.wait(1000)

    // Step 3: Type "Linda" in the "Name*" field
    cy.get('input[placeholder="Your name"]').type('Linda')


    // Step 4: Type "Test" in the "Last name" field
    cy.get('input[placeholder="Your last name"]').type('Test')



    // Step 5: Type "test@codelinda.com" in the "Your email*" field
    cy.get('input[placeholder="Your email address"]').type('test@codelinda.com')

    // Step 6: Type "test contact form" in the "Message*" field
    cy.get('textarea[placeholder="Enter your message"]').type('test contact form')

    // Step 7: Click "Submit"
    cy.get('button.form__button').click()



    // Assertion: Verify that the form submission is successful (you may need to adjust this assertion based on the actual behavior of the website)
    cy.contains('Thank').should('exist')
  })
})
