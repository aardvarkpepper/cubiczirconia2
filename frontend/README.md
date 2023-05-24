<!-- using port 3333

Notes to self:  Change "image type" to reference separate database.  Toggle between local, url1, url2, etc.
For badges and users.  Disassociate entirely, and turn them into separate databases, so for example
query image database, for user with id 1, sort by image id number ascending.  Returns array to populate element.
jas = junction associative (junction and association interchangable?)

too big - minify
doesn't have cart - will be added

useContext - not taught in pursuit.  styling, application, global level data.  authentication or user session
multiple componet

state for local stuff mostly

redux?  usecontext?  other tech sql
bootstrap limts

scss - structured css

getAllThemesForUserSortThemeId should likewise disassociate; instead of sorting by theme id, user specified sort.

Change theme default from populating separately for each user?
See how other programs implemnet default themes, what is standard
practice if any?

Redefine default theme to be an array of themes in database.
This is added to array of user themes.

Object.keys returns an array of keys from an object, but the order is inconsistent (browsers, hardware, etc.)  Create a linked list in sql that pulls correct order every time.

*****
Snake to camel, camel to snake.  Look at "humps" package for implementation, but write own.  WHEN/WHERE HUMPS? especially if dynamic.
*****

*****
Ask about implmenetation and storing the entire users array in state.  Can just toggle, really, and have various checks.  INDUSTRY PRACTICES FOR STATE; have loads of state components just floating around, some local, some global-ish (user, theme).  Instead of separate  call to individual element, reference the entire element list stored in state, with sort functions etc.  But this is not commonly done?

redux, mobx
*****

Fix "generictable" reference to reference id.  As Object.keys order is not guaranteed (though apparently should be consistent), consider switch to Map or Set data structure.

For now, use  call to individual (record) and specifying by user (rather than dynamically for badges and themes) as dynamic Link routing not covered in class, and insufficient time to research and implement new feature.  Break  calls into api folder.

Look again for how to use multiple params.  From different components?  From same component?

Mystery:  Why does the GenericTable css styling apply to the UserDetails table?

Index passes variable down to "detail".  user setState set to variable.  If variable not set, then  call to retrieve data.  (such as if URL called directly).  Render component to indicate if  was called or not.

*****
Call  20 units at a time - limit what goes in state, LIMIT RENDERING thousands potential components instead only 40 at a tie or whatever.
Is this backend or frontend?  Or is it a state management thing (get the entire list with one call, then get 20 queries at a time to solve rendering issues?)  It is a rendering, not memory issue?

sQL LIMIT OFFSET 48 ETC.
*****

Passing props.location.value through React Link does not work when page refreshed or using back/forwards buttons on browser.

In UsersIndex,  is called then props passed to sub-component "GenericTable".  But where we access individual users, accessing GenericForm, there is no parent component.  Perhaps I should create one.  It does seem logical, though this is not what we did in class.  

Add escape clauses for UserEdit and UserDetails in case somehow data passed is null.  Though it shouldn't happen.  How can the component even be called outside of the wrapping context?  And the wrapping context provides the variable.  But it's useful in case someone else uses the component improperly, perhaps?  Encapsulation?

*****
htmlFor in label required for other rendering?  But may be eliminated where label wraps input completely, at least for some browsers.  Where/how do I look up versioning?  Like, putting input inside label won't require htmlFor, but that may not be all browsers.
*****

In GenericForm, using ...previous instead of deep copy.
Correct form to use unique key.  This requires some thought.  What is the key naming protocol, considering data structure?  Plan for scalability and brevity.

UserCreate uses state to take user because it's convenient.  But it's not really proper.  What if, for example, badge was created?  Badge is not in state.

UserEdit is not really dynamic for deletion function.

*****

MDN TABLE VERSION LIGHTHOUSE CHROME 
PRACTICAL scalability - database to frontend.
Look into 1 - checking data type of database (if even possible) and having form input type matching data type.  2 - checking input and edit data against "Set" data, constraining range of responses. - QUESTION - separate database to keep track of data types for front end form entry?  Is this standard practice?
And constraints link between database, backend, and frontend how?  Simply duplicating constraints in database, in the frontend?
Or keep a database of constraints?  But the database won't automatically update.

https://dba.stackexchange.com/questions/214863/how-to-list-all-constraints-of-a-table-in-postgresql

Apparently can import non-NOT NULL constraints.  (But what about NOT NULL?  Track separately?  But dynamic reference, undermines purpose.  Maybe try dummy data meeting constraints, and failure of null fields error return specifies what columns are set to non-null.)

https://stackoverflow.com/questions/20194806/how-to-get-a-list-column-names-and-datatypes-of-a-table-in-postgresql

for datatypes

CSS "specificity" determines which style takes priority.
*****

Slice is used for entry.  This is bad practice, as edit and  -->

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


html, email, specific for form data type.

html is text only communication protocol.

html, classname, id overrides css

track eye moves. Copy youtube, amazon, simple stuff that emphasizes product.  one or two simple things that does something "cool".  Just a little flair.  Focus the product, and the IDEA of the product.
look into design specs

ui 

MOBILE presentation

flexbox - even space between elements
layout with header, aside, main, if too small then main goes on top and aside goes below then grid is easier for that.  Grid is like newspaper layout.

books on ux/ui design.

"angel list" - startups (?) - wellfound.  Startups, wear a lot of hats, teach self everything, teaching minimal.
midsize IBM or other, good training.

Google, Netflix, don't really have junior positions.  Work somewhere 6-12 months first; the FAANG companies
facebook, amazon, apple, netflix, google - apply after experience.  Maybe interneships, but even then not best
use of time to apply.

Ruby on rails - create CRUD app.  instant!  just add water.  Larabel for PHP.
Nest.js  Sails.js (similar to Rails)  Convention over configuration; if just follow the rules then it'll work.
Don't have to build functionality.  Just build it for you.  "The pit of success" - generally successful
if made by yourself.  But in React, could build bad patterns or hard to maintain patterns.

Rails - senior devs design it.  Just follow the pattern. Scalable &c.  (Look at Rails, does it right,
industry standard.  How handle authentication?  What pattern?  MVC?  Restful routes.  (What's MVC ?))

Tuesday, WEDS esp, thursday best days to come to campus.  Reach out to lillian, tristan.

look into relative "benefits", selling points of different structures - like React.

What large database projects use React.  Angular built by Google; Angular.js.  Then Facebook made React in 2014
or 2015.  View, purely open source.  New Angular uses TypeScript.  Java likes the new Angular.  (New is very different from old for Angular.)  React load time - 40% Fellows get jobs with React.  ANyways, look at load time loading animation and/or games or something.  The Python/SQL thing.  But isn't . . . another database used?

Numbers game.  Every interview a lesson.  What did I learn about company culture?  Don't sleep on it.  Go go go.

MIT self-driving course 2-d racetrack?

npm package "create james-app"

(eventually?)

Skeleton CSS https://cdnjs.com/libraries/skeleton

padding, center form, reduce form size

sass color variables

ADD

Login / logout functionality.

Logo

Template (change datatype, research template . . . color . . . palettes)

https://v5.reactrouter.com/native/example/auth-workflow

Login logout without authentication; shows flow of components.

Add object to reference action types and access level required to perform action.

Write documentation for use.  CSS styling.  Adding to database.

User Login should prevent duplicate usernames on edit as well.  Just create for now.  Also should be in util.


***** Theme notes
/*

    theme_id SERIAL PRIMARY KEY,
    theme_name VARCHAR(40) NOT NULL,
    theme_show_badges BOOLEAN NOT NULL,
    background_color VARCHAR(20)
    color 
    font_family 
    font_weight 
    font_size 
    border_color 
    border_style
    border_width
    user_id INT NOT NULL,

    Convert snake to camel

    color: textcolor
    fontfamily: arial, verdana, tahoma, Times New Roman
    Georgia, Garamond, Courier New
    Arial, sans-serif; if Arial not available, generic sans-serif used.
    #000000 reference works too (hexadecimal)
    */

    /*
    Set the fields I want.  Pull the ones I don't want out
    of the  call with deconstruction.  Set the remainder
    to state.  Aggregate multiple  calls.

    Find and replace all components like div with Div,
    as Bootstrap does.
    */

    Reconsider UserThemes.jsx.  See how the  call has nothing to do with any front end component.  It's just a call, it's just data.  ID is pulled from URL, then put into a call to the backend; apart from that there's no interaction between front and backend and database.
    ***** END THEME NOTES

    Cleanup files (e.g. userSettings is now component, not a page. - fixed, but future)

    Create file, flowchart, data structures to reduce calls to server, local file size, boost or reduce performance (?) with customizable settings.  Need to monitor performance (how)?  But also, stuff like make sure theme array data only lives in state locally in the theme component; the *chosen* theme is nearly global. but the others, no.

    Plan out data structure, one to many, many to many. Anticipate things like user settings having a default theme.  Like building in ability to add a secondary theme.  Modularity, reusability, encapsulation.

    Build out the theme selection component a little.  Also, implement Set or other validation on data types.  How to do this?  Local implementation for each and every variable?

 -->

# User App Front End

Use Navbar element at top to navigate between home, user index, and create new user views.

A full-stack application using front end actions to interact with back end that connects to database.

Some dynamic references and formatting applied.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
