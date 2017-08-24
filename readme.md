
Add a front end dependency (the name dockerizing-web comes from docker-compose.yml):
````bash
$ docker exec dockerizing-web yarn add glamor
```


Run front end tests (you need -it because `test` is interactive):
````bash
$ docker exec -it dockerizing-web yarn test
```