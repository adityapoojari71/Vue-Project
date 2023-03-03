/// <reference types="cypress" />


// describe('The Home Page', () => {

//   it('successfully loads', () => {
//     cy.visit('/')
//   })
// })

describe('Login Tests', function () {
  it('Successfull login', function () {
      cy.visit('/')

      // login Credential
      const userId ="adityapoojari71@gmail.com";
      const password ="123456";
      cy.get('#email').type(userId).should('have.value', userId)
      cy.get('#password').type(password).should('have.value', password)
      cy.get('#loginButton')
      .click()

      //serch User
      cy.get('#search').type('carl')
      cy.wait(1000)
      cy.get('#searchUserButton').click({force: true})

      //clear serch User
      cy.wait(1000)
      cy.get('#search').clear()
      cy.get('#searchUserButton').click({force: true})

      //code for view detail of user
      cy.get('#userCard').click()

      //code view all images
      cy.wait(1000)
      cy.get('#allImages').click()
      cy.wait(1000)
      cy.get('#close').click()
      cy.wait(1000)

      //code for back screen
      cy.go('back')
      cy.once('uncaught:exception', () => false);
      cy.get('#dropdownMenuButton1').click({force: true})
      cy.wait(1000)
      cy.get(':nth-child(5) > .dropdown-item').click()

  })
})