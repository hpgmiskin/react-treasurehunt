# React Treasurehunt

React Treasurehunt is a basic react application for use within a treasure hunt where a user is required to follow clues to locate treasure at a specific location. Upon locating the treasure the use is then able to upload an image of the treasure to prove they have completed the hunt.

## Installation

Before working on the repository all the package dependencies need to be installed using npm. If you do not have node and npm installed then please see [Download Node](https://nodejs.org/en/download/).

```
npm install
```

## Development

To run a development server use the following command. This will open [localhost:8080](http://localhost:8080/) on your computer, start the web server and also start a webpack server.

```
npm run dev
```

## Building Source

To build the source code use the following command. If this fails use `mkdir dist` to create a folder for the distribution code to be placed into.

```
npm run build
```

## Deploying Application

To deploy the application on heroku then use the following commands. For help with deploying to heroku please refer to [Deploying with Git](https://devcenter.heroku.com/articles/git)

```
mkdir dist
npm run build
cd dist
git init
git add --all
git commit -m "Inital deploy"
heroku git:remote [HEROKU_APP_NAME] 
git push origin heroku
```

## Credits

This repository is based heavily on [simple-webpack-react-starter](https://github.com/cgreening/simple-webpack-react-starter.git) by Chris Greening so thanks to his contribution.