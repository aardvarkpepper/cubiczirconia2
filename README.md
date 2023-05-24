# User App Instructions

An app for use by developers, either as a template or as a starting point, for their own projects.

User access levels and passwords are implemented at a basic level.  Guest login is unable to participate in create, update, and delete operations, and has no additional selectable themes (under "Settings" in navbar).  Guest login is suitable for testing how insufficient user access level cannot create, update, or delete records.

To access create, update, and delete functionality, login as bruce_wayne, password batman123.  This user also has additional themes (under "Settings" in navbar.

Theme settings change color palette, in the Settings page, but also in the '"Div" styled component on the Home page.  The implementation is similar to Bootstrap; it's much faster to import and write <Div> than it is to call useContext, reference useContext variables and/or methods, and besides makes for much cleaner code.  If you see a <Div>, you know the user's theme is applied in it, without having to make sense of exactly what inline styling is or referencing CSS or such, or read additional lines of code.

To ease developers getting into the application, pages and components are labeled.  For example, the Home page reads "Front End Home", then '"Div" Styled Component', as a div styled component is rendered inside the Home page, to show how a user's color theme applies in different elements.

A full-stack application using front end actions to interact with back end that connects to database.

Some dynamic references and formatting applied.

## Mono Git Repository:
https://github.com/aardvarkpepper/cubiczirconia

## Back End:
https://github.com/aardvarkpepper/cubiczirconia/tree/main/backend

## Front End:
https://github.com/aardvarkpepper/cubiczirconia/tree/main/frontend

## Trello:
https://trello.com/invite/b/qnApPlFu/ATTId8e9e0b349016e5ae5e35ba66c67735bB0202508/user-app

## Back End Deploy:
https://cubiczirconiabackend.onrender.com

## Front End Deploy:
https://gleaming-treacle-df505e.netlify.app/

## History of App:
Built to meet rubric scoring requirements, and to display potential functionality of project.

(E.g. displaying all user account information is not good practice, but is required for rubric purposes.)

Features including but not limited to:

Create-Read-Update-Delete functionality.

Data structure with one to many and many to many relationships.
Uniform folder/file/variable naming and organization conventions.

User login checks for unique names.
Functional password verification.
Conditional rendering depending on user access level.
Limits CRUD functionality depending on user access level.

Styled reusable components similar to Bootstrap.

useContext "user" and "theme" implementation.