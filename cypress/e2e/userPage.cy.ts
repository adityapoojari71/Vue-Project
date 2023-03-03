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
      cy.get('#email').type(userId)
      cy.get('#password').type(password)
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
      // cy.contains('li', 'Log Out')
      // cy.get('#navbarSupportedContent .dropdown-menu ul.list > li').each(($ele) => {
      //   console.log($ele)
      //   cy.log($ele.text()) //prints Home Page Hello Hi
      // })
      // cy.on('uncaught:exception', (err, runnable) => {
      //   console.log(err)
      //   cy.get('#dropdownMenuButton1').click({force: true})
      //   return false
      // })


  })
})