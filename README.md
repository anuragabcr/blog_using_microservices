# Blog using microservices
### The project is Developed using React.js, Express, and Node.JS
Frontend is a simple web page consisting of making a Post and we can comment on any post.
I have used multiple microservices for each action for the front-end event. Like when we create a post it will be handled by one express server or when we make a comment on a post it will be governed by another express server using the microservices approach.
So that even if any one of the microservices or server goes down application will still keep on working and only that particular service will be affected. The rest of the application will work fine without any issues.

## To run the Application
### npm install
on each subfolder that contains package.json
### npm start
Start each microservice simultaneously
