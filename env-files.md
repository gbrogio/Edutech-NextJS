# CREATE
  * Create a file called .env.local, as this file will be excluded by git in the commits. Visit .gitignore;
  * Create the environment variables in UPPERCASE and underscores like: \
  `EXAMPLE_VARIABLE`

by default create the file with these variables and values:
```
COURSES_API_URL=https://alura.com.br/api/cursos
HOST_PROTOCOL_H=http://
HOST_DOMAIN=localhost
HOST_PORT=3000
HOST_API_URL=$HOST_PROTOCOL_H$HOST_DOMAIN:$HOST_PORT/api/courses
```
