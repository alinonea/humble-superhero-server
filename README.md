# Humble Superhero Project

This repository should serve as the server assignment for the Humble Superhero Project Challenge.

### How to run

- First, we got to make sure that we are in the project's folder and we have all needed dependencies in place by running:
```bash
npm install
```

- When the dependency installation is done, we could already start the server by running one of the next commands (the "development watch mode" would be the preferred one):
```bash
# development
$ npm run start

# development watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Then the server should be already running on ```http://localhost:3000```. Port 3000 is the default one, you could easily change this by setting a ```PORT```environment variable.

:warning: ***Please be cautious with changing the port number, frontend app is relying on the 3000 port in order use the API calls***

**Now you are ready to use the API! Enjoy!!!**

### Run tests

The tests could be run using the command:
```bash
$ npm run test
```

At the moment, both endpoints are tested out. If any new ones are added, please make sure that they are tested, before pushing them into the master branch.

### API docs

#### Entities
**Superhero**
- *name*: string
- *superpower*: string
- *humility_score*: number(could be float), ***between 1 and 10***

#### Payloads
field **\*** - means that the field is mandatory

##### ResponseError:
  - *message **\****: string
  - *error*: string
  - *statusCode*: number

##### ResponseGetListOfHeroes:
  - *name **\****: string
  - *superpower **\**** string
  - *humility_score **\****: number(could be float)

##### RequestAddSuperhero:
- *name  **\****: string
- *superpower  **\****: string
- *humility_score  **\****: number(could be float), ***between 1 and 10***

#### Endpoints

##### GET  /superheroes
- get the superheroes list sorted by humility score
**Request body:** empty
**Response body:** ***ResponseError*** / ***ResponseGetListOfHeroes***
**Respose statuses:** ***200*** / ***500***


##### POST /superheroes
- insert a superhero in the list
**Request body:** ***RequestAddSuperhero***
**Response body:** empty
**Respose statuses:** ***201*** / ***500*** / ***400***

---
**Collaborate with a teammate**

I'd like to collaborate with a teammate on improving this challenge by creating an environment where the contestants could deploy their solutions.

The setup of deployment should be simple enough so even the junior ones could do it.

This would bring some "real life" challenges in the game,  while helping out the people who are reviewing the challenges by adding some checks on some of the challenge requirements (automate as much as possible), so the reviewers could focus more on the soft skills and on contestant's eagerness to learn and self-improve.

---

#### If I had more time

There are couple of things that I would like to improve:

- Having a real project data source (like a database), so we would persist the data.

- Improving the frontend (UI wise).

- Adding some more functionalities, like deletion, updating, and having something that would make sense as a product feature: having a feedback system where users could give a feedback on a superhero, and the humility score will then be recalculated each time based on the average feedback gave by the users. This would require an authentication/authorization feature as well, so we make sure that users could not make any abuse and give multiple feedbacks on the same superhero.