- Your task is build a basic social media site

- On application load, the application should route to '/' and show the Login Page

- A provided user list can be found in users.ts

- Login credentials must match one of the users in the list

- Create a custom validator to validate that users logging in are using an '@mail.com' account and the username does not contain numbers

- If the user credentials are inccorect or do end with '@mail.com', alert with the message 'Invalid User!'

- On successful login, save a token to the browser storage, and navigate to the Wall Page

- Make an HTTP request to fetch users from 'https://jsonplaceholder.typicode.com/users' and posts from 'https://jsonplaceholder.typicode.com/posts'

- When making the request, append the token you saved in the browser storage to the header of the request

- Users should not be able to navigate to the Wall Page routing to '/wall' or the Profile routing to '/profile' if they are not logged in

- Users should not be able to navigate to the Login Page if they are logged in

- In the Wall Page, use a custom pipe to display each user's name and username in the Post Component. Display the user's post's below the user's name and username

- In the Profile Page, clicking on the Edit button should render the Edit Component

- In the Edit Page, users should be able to change their credentials and be able to log in with the new credentials
