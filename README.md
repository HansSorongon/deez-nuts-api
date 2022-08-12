# Deez Nuts API
A deez nuts jokes API built with node.js and express!

## Routes

<strong>Base URL</strong>
```https://deez-nuts-api.herokuapp.com/``` <br/>

GET [```/random_one```](https://deez-nuts-api.herokuapp.com/random_one) <br />
Returns a random deez nuts joke.

GET [```/random_ten```](https://deez-nuts-api.herokuapp.com/random_one) <br />
Returns ten random indexed deez nuts jokes.

#### Example with NodeJS
```js
const axios = require('axios')

const res = axios.get("https://deez-nuts-api.herokuapp.com/random_one").then((res) => {
    console.log(res.data)
})
```
#### Returns
```json
{
  "Question": "Have you heard of E10 the space ship?'"
  "Answer": "Eatin deez nuts!"
}
```
