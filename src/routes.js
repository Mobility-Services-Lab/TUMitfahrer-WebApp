// React components
var Application = require('./components/application.jsx');
var IndexPage = require('./components/static/indexPage.jsx');
var Authentication = require('./components/auth/authentication.jsx');
var User = require('./components/users/user.jsx');

// Static pages
var ImprintPage = require('./components/static/imprintPage.jsx');
var LegalInformationPage = require('./components/static/legalInformationPage.jsx');
var ContactPage = require('./components/static/contactPage.jsx');

// Auth pages
var LoginPage = require('./components/auth/loginPage.jsx');
var RegistrationPage = require('./components/auth/registrationPage.jsx');
var ResetPasswordPage = require('./components/auth/resetPasswordPage.jsx');
var SignOutPage = require('./components/auth/signOutPage.jsx');

// User pages
var UserProfilePage = require('./components/users/userProfilePage.jsx');

var routes = [
  {
    path: '/',
    component: Application,
    indexRoute: {component: IndexPage},
    childRoutes: [
      {
        path: 'auth',
        component: Authentication,
        childRoutes: [
          {path: 'logout', component: SignOutPage},
          {path: 'register', component: RegistrationPage},
          {path: 'login', component: LoginPage},
          {path: 'reset-password', component: ResetPasswordPage}
        ]
      },
      {
        path: 'user',
        component: User,
        childRoutes: [
          {path: 'profile', component: UserProfilePage}
        ]
      },
      {path: 'imprint', component: ImprintPage},
      {path: 'legal-information', component: LegalInformationPage},
      {path: 'contact', component: ContactPage}
    ]
  }
]

module.exports = routes;
