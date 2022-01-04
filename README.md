# Back-end Challenge 🏅 2021 - Space Flight News
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

</p>

## Description

[Backend Challenge Space Flight News 20210823](https://lab.coodesh.com/luizjesuzp/space-flight-news-20210823)
[Vídeo apresentação](https://www.loom.com/embed/60b23f972a4a4973958ae538765f78d4)

REST API que utiliza os dados do projeto [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation), uma API pública com informações relacionadas a voos espaciais.

O projeto tem como objetivo criar a API permitindo assim a conexão de outras aplicações.

## Technologies used

**Framework:**

- [NestJS](https://nestjs.com/)

**Software quality**
- [Husky](https://github.com/typicode/husky)
- [git-commit-msg-linter](https://github.com/legend80s/commit-msg-linter)
- [lint-staged](https://github.com/okonet/lint-staged)

**Database**
- [Postgres](https://www.postgresql.org/)

**Deploy**
- [Docker](https://www.docker.com/)
## Running the app

```bash
$ docker-compose up

Para criar o banco de dados acesse http://localhost:8080
(as tabelas são criadas automaticamente quando o app for fizer a primeiro primeiro cadastro)
user: pguser
password: pgpassword

create database:
dbName: coodesh-space-flight-news

Para popular o banco de dados com os artigos da api
[Popular banco de dados](http://localhost:3000/api/v1/populate)
Após isso o banco de dados se atualizará todos os dias as 9h da manhã
```

## Test
### [Swagger](http://localhost:3000/api/#/)
```bash

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
