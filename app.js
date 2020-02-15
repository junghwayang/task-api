const express = require('express')
const app = express()
require('./src/db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server has started!')
})