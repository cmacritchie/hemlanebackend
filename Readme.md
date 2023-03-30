## Hemlane backend

This code is meant to accompany the hemlane front end project located here: https://github.com/cmacritchie/hemlanecodechallenge

To get started install the node.js dependencies by running:
`npm install`
ensure you have docker on your computer, otherwise, install mongodb. run the docker-compose file to spin up a mongodb instance:
`docker-compose up`
lastly, start the server:
`npm run dev`

After ensuring the server is running and checking that the database has been connected to, comment out the 
`migration()` function found on line 7 of the index. This code is meant to populate the db with some test data.