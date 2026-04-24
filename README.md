# BASIC INFO

This react native app template comes with some functions, packages and services set up to ease the starting up of a new app. It also includes some sample files and workflows set up. It uses clerk for authentication, tailwindcss for styling, Zustand for global state management, Sentry for user feedback and analytics, Neon for database & Drizzle for the ORM

### TODO:

1. Change the app slug & name in app.json to match the ones for the specific app you're building.

## Clerk auth

This app already has some sso workflows for google auth, apple auth and github auth set up in the hooks/useSocialAuth file. It also has a sign-in page as well as some basic logic to handle user redirection based on the sign-in status. In addition, it has also a basic sign-in page set up.

### TODO:

1. Make sure to set the EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in the .env file
2. Customize the useSocialAuth file to cater for your desired sign-in options
3. Customize the sign-in page with desired styling

## Tailwindcss

This app has tailwindcss already installed and set up for development, together with color theming built in, and support for light/dark theming modes.
In addition to this, I have written a simple hook called useThemeColors to enable you access the color values from anywhere within the app.

### TODO:

1. Modify the global.css file to house the desired color theme of your choice. Use hsl color values to keep their opacity easily editable

## Neon database & Drizzle orm

These have also been installed and set up.

### TODO:

1. Update the database url in the .env file to the url of the database you are using to reflect the one on the neon webpage for your project
2. Edit the database schema file to have the desired schema you would like to use for your database tables. an example is included
3. Next, create the basic database actions in the db-actions file to communicate data to & from the database. An example is included
4. Create API endpoints in your app file with the naming format of name+api.ts to shield the database from hackers
5. In these api routes, define methods e.g POST, GET, etc... which implement the db actions

## Zustand

This app uses Zustand for global state management

### TODO:

1. Create a store in the store folder to handle communication between the frontend and the backend through the api routes
2. In this store, make the final versions of the db-actions, but these should just work with the api routes defined earlier

## Sentry

This is how you can set up sentry for user feedback, performance monitoring & error tracking

### TODO:

1. Create a sentry project and paste it's unique initialization command into the terminal to set it up
   (included is a simple feedback button component in the components folder to serve as a start for the implementation of sentry. Once you install sentry, Uncomment its code & the error messages in it will disappear)

# IMPORTANT TO NOTE:

1. The app will not run without a clerk publishable key, so don't panic. Just add it and rerun the file.

### WHEN DEPLOYING

1. When you are building the apk and sending it to eas, it's important to first of all run this command to send all of your .env variables to eas:
   [eas env:create --name YOUR_ENV_VARIABLE_NAME --value your_actual_key_here --environment (production / preview)]
2. Then check that the keys have been sent there by running this command:
   eas env:list
3. Deploy your backend to eas hosting using this command: [npx expo export --platform web
   eas deploy] & copy the url given. Set the EXPO_PUBLIC_API_URL variable in your .env file and make sure you edit the api routes usage in your stores to properly access both the local & web versions of the route. Then send it to eas using step 1 & 2. (if you run into JIMP issues, try removing any links to .ico files from app.json as well as deleting any actual .ico files from the assets.)
4. Make sure that your sentry app slug and organization slug match the ones on your sentry dashboard
5. Then run this this command to run the eas build: [eas build -p android --profile preview]
