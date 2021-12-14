## Outline
For this simple challenge, we would like you to use the Stream Feeds API to fetch an activity feed, then render the data on screen using JavaScript and React. 

## How the app should work
1. We recommend using the [`create-react-app`](https://create-react-app.dev/) package for the front-end
2. There is no need for any server-side code, but you will need to run a simple script to add some activities to your feed! This is provided here, just run the script and fill in activity information where there are comments
3. The user token should just be hard coded in the front-end of the app, no need to build an auth flow
4. The app should initialize, fetch the content of the feed, then render the activities in a list

## Hints
1. Try not to overcomplicate it
2. Dont worry about styling too much, im much more interested in how it works 
3. Lean on the [documentation](https://getstream.io/activity-feeds/docs/node/?language=javascript) or stephen if you need (stephen@getstream.io) 
4. You will need an app key and secret, [sign up](https://getstream.io/try-for-free/) for Stream and create an app in the dashboard to generate these credentials
5. You will also need a signed JWT (json web token) to add to your client-side code, you can generate one [here](https://getstream.io/chat/docs/node/token_generator/?language=javascript) with your chosen user_id. Or, you can print it from the provided server-side script.
