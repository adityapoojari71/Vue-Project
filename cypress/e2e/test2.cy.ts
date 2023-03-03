const credential = {
  UserType1: {
    login: 'UserType1Login',
    password: 'UserType1Password',
  },
  UserType2: {
    login: 'UserType2Login',
    password: 'UserType2Password'
  }
};

const logInTheUser = (credentials) => {
  cy.log(credentials)  
  cy.get('#email').type(credentials.UserType1.login);
  cy.get('#password').type(credentials.UserType1.password);
  cy.get('#loginButton').click();
}

describe('Checks login', () => {

  beforeEach('Log in the user', () => {
    cy.visit('/');
  });

  it('prints error and does not redirect if user is blocked', () => {
    logInTheUser(credential);
    cy.get('#password').should('contain', 'User blocked');
    // cy.url().should('not.include', '/orders/published');
  });

  // it('redirects user of type 2 to stores page', () => {
  //   logInUser(credentials.UserType2);
  //   cy.url().should('include', '/stores');
  // });

  // it('prints error and does not redirect if user does not exist', () => {
  //   loginUser(credentials.nonExisting);
  //   cy.get('[data-cy=passwordError]').should('contain', 'No user with such login');
  //   cy.url().should('not.include', '/orders/published');
  // });

  // it('redirects user of type 1 to published orders page', () => {
  //   loginUser(credentials.UserType1);
  //   cy.url().should('include', 'orders_all/published');
  // });

  // ...other tests
});