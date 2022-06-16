# node-mongo-twig
This project is a template that is easy and available to use a node.js applicatiing using mongo database and twig templating engine all in one place.
## Info
You can run the application by setting up docker containers running the **docker-compose.yaml** file with:
```sh
docker-compose up --build
```
You can check the following urls to test:
| Link | Action |
| ---- | ------ |
|[http://localhost:30030/users/create](http://localhost:30030/users/create)|Create new user        |
|[http://localhost:30030/users/signin](http://localhost:30030/users/signin)|Sign in as        |
|[http://localhost:30030/users/](http://localhost:30030/users/)|Get all user        |
|[http://localhost:30030/users/:_id](http://localhost:30030/users/:_id)|Get user by id        |
|[http://localhost:30030/users/create](http://localhost:30030/users/delete/:id)|Delete user        |
