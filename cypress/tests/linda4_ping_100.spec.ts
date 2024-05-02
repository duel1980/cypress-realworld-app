describe('Ping Test', () => {
  it('should ping https://codelinda.com 100 times', () => {
    // Define the URL to ping
    const url = 'https://codelinda.com';

    // Define the number of pings
    const numPings = 100;

    // Send HTTP requests in a loop
    for (let i = 0; i < numPings; i++) {
      cy.request(url).then((response) => {
        expect(response.status).to.eq(200); // Check if the response status is OK
      });
    }
  });
});
