# certisfied-server

This is the main repository for the certisfied server project.

## Functionality
- Added TypeScript for typing and an overall better development experience
- Added nodemon for live reloads when changes are saved
- Added ts-node to complie TS files while developing instead of recompiling everything every time
- Added node types to get all of the node library types
- Added express.js for an easier API development
- Added express types to get all of the express library types
- Added mongoose.js for an easier DB connection and schemas
- Added bcrypt for password encryption and verification
- Added bcrypt types to get all of the bcrypt library types
- Added jsonwebtoken for token creation and verification 
- Added jsonwebtoken types to get all of the jsonwebtoken library types

## Available scripts
- npm start - starts the development server (with ts-node and nodemon)
- npm build - builds all of the TS files into one JS file in the folder dist

## Available routes
| Route | Purpose |
| :------------ | :------------ |
| / | Check if the server is online in a simple way |
| /user/register | Register the user |
| /user/login | Login the user |
| /templates | Get all of your templates |
| /template/new | Create a new template |
| /template/edit/id | Edit a template |
| /template/delete/id | Delete a template |
| /template/id | Get a template |
| /certificate/new | Create a new certificate |
| /certificates | Get all of your certificates |
| /certificate/edit/id | Edit a certificate |
| /certificate/delete/id | Delete a certificate |
| /certificate/id | Get a certificate |
| /verify/id | Verify a certificate |

## TO DO
- Create API documentation - Route name, method, expected data
