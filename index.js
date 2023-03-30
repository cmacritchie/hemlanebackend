const express = require('express')
const taskRouter = require('./src/routers/taskRouter')
const migration = require('./src/migration/taskMigration')
require('./src/db/mongodb')

//uncomment this for initial migration
migration()


const app = express()
const port = 5000

app.use(express.json())
app.use(taskRouter)

app.listen(port, () => {
    console.log("running on port, ", port)
})