const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})