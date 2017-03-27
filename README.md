#Introduction

This a experiment project. I want to separate the server and client to build a simple server.

in ideal state, I want to publish a backend.js for server and a frontend.js for client . when run the server.js

it will start node server and all the backend services. and the frontend.js handle the client things.th render page ,and communicate 

to server.


### pre work
```
sudo npm install -g supervisor
npm install -g node-inspector
npm install -g webpack

npm install
```

### start dev environment for debug
- open terminal run
```
NODE_ENV=dev npm run build-server
```
- open  another terminal 
```
NODE_ENV=dev supervisor  -i client. ./build/backend.js
```

Then you can auto reload the server  and the auto reflesh the client

> means when you change a server file ,the node server will restart.
> when you change some front end code ,the browser will auto refresh .所改即所见

And if you want to debug the server ,just run 
```
node-debug ./build/backend.js
```
***But now the port will unavailable,it said EADDRINUSE. ***
***Maybe the HMR and the node-debug using the same port ,it can not run in same time ***
***I will try later , or who has the idea?***

For a tempory solution ,you can run 
```
npm start

node-debug ./build/backend.js
```
just debug the node-server without HRM the front end code.

### start production 
Just run 
``` npm start ```
then open chrome at [http://localhost:3000](link).


### next work
- solve the context path in webpack config file , using related path load static resource
- move the node-module inside the build folder as the unique publish folder.
- consider using gulp for pipe works instead npm scripts.



### References
[Backend Apps with webpack(Part 1)](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)