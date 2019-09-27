const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = '8080'

app.use(cors());

app.get('/words', function(req, res, next) {
  axios.get('http://app.linkedin-reach.io/words')
    .then((response)=> {
      const data = response.data; 

      res.json(data);
    })
    .catch((err) => {
      next(err);
    })
})

app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
