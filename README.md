# ReactJS-Study
Studying ReactJS

## Setup

```
PS C:\Users\media\Documents\GitHub\ReactJS-Study> npm install -g create-react-app
C:\Users\media\AppData\Roaming\npm\create-react-app -> C:\Users\media\AppData\Roaming\npm\node_modules\create-react-app\index.js
+ create-react-app@2.1.8
added 63 packages from 20 contributors in 3.062s
PS C:\Users\media\Documents\GitHub\ReactJS-Study> create-react-app movie_app

Creating a new React app in C:\Users\media\Documents\GitHub\ReactJS-Study\movie_app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.13.0
[1/4] Resolving packages...
warning react-scripts > fsevents@1.2.4: Way too old
[2/4] Fetching packages...
info fsevents@1.2.7: The platform "win32" is incompatible with this module.
info "fsevents@1.2.7" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.15.2", while you're on "1.13.0".
info To upgrade, run the following command:
$ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
success Saved 5 new dependencies.
info Direct dependencies
├─ react-dom@16.8.6
├─ react-scripts@2.1.8
└─ react@16.8.6
info All dependencies
├─ fork-ts-checker-webpack-plugin@1.0.0-alpha.6
├─ react-dev-utils@8.0.0
├─ react-dom@16.8.6
├─ react-scripts@2.1.8
└─ react@16.8.6
Done in 44.94s.

Success! Created movie_app at C:\Users\media\Documents\GitHub\ReactJS-Study\movie_app
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd movie_app
  yarn start

Happy hacking!
PS C:\Users\media\Documents\GitHub\ReactJS-Study>
```

## Deploy

```
PS C:\Users\media\Documents\GitHub\ReactJS-Study\movie_app> yarn build
yarn run v1.13.0
$ react-scripts build
Creating an optimized production build...
Compiled with warnings.

./src/App.js
  Line 2:  'logo' is defined but never used  no-unused-vars

./src/Movie.js
  Line 65:   'MoviePoster' is defined but never used                                                                    no-unused-vars
  Line 73:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  40.78 KB  build\static\js\2.df80c6b0.chunk.js
  1.28 KB   build\static\js\main.287b367a.chunk.js
  819 B     build\static\css\main.c94e2b97.chunk.css
  764 B     build\static\js\runtime~main.c5541365.js

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  https://bit.ly/CRA-deploy

Done in 13.16s.
```