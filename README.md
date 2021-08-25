# Challenge

**This guide contains all the steps that you need to run the tests**

## Tools

- TestCafe
- Postman + newman

## Dependencies

After clone the repo you need to install the dependencies first, please make sure you have installed node and npm:

- Node, validate if you have install the lastest version, if you don't have it run this command.
  brew upgrade node
- NPM, go to your terminal and run this command to install NPM
  npm install
- We use **eslint** to perform static code analysis
  npm install eslint
  **note: you can add new rules and plugins**

### how to run your tests

**note: the command above will run all the frontend tests**
run all the tests in headless mode
npm run ChromeHeadless
run all tests in your local
npm run test
run all with QR
npm run test:remote
run all in browserstack
npm run test:configurationFile

### reporting

if for some reason your tests fail then the corresponding screenshots will be generated into the Reports folder

## Backend tests

We use **postman and newman** to perform backend tests **locally**, make sure you have installed newman.
If you don't have newman run this in your terminal:
npm install -g newman

run all the tests
npm run test:backend

## Coverage of the test cases

- Frontend
  Validate log in flow with differents scenarios and validate add task after log in.The test validate:
  *Succesful log in
  *Unsuccesful with:
  *Wrong pasdword
  *Nickname user
  *Whitout Password
  *Without Email
  \*Without credencials

- Backend
  Validate the APIs for projects and task. Test validate diferent parts of the request as:
  *Scheme body response
  *Code Status
  *Status code name
  *Response time
  *Response header
  *New task or project is include into the general list
