describe('URL Shortener', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/urls", {fixture:"sample-data.json"})
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
          statusCode: 201,
          body: {
            id:1,
            long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            short_url: "http://localhost:3001/useshorturl/1",
            title: "Awesome photo"
          }
      })
    cy.visit("http://localhost:3000/")
  });

  it("should be able to view the page title and the existing shortened URLs", () => {
    cy.get("h1").contains("URL Shortener")
    cy.get(".shorties").contains("http://localhost:3001/useshorturl/1")
  });

  it("should be able to view the Form with the proper inputs", () => {
    cy.get("form").should("exist")
    cy.get("input").should("have.length", 2)
    cy.get("input").first().should("be.visible")
    cy.get("input").last().should("be.visible")
  });

  it("should be able to view the information reflected in the input fields when they fill out the form", () => {
    cy.get("input").first().type("Howdy")
    cy.get("input").first().should("have.value", "Howdy")
  });



  
})
