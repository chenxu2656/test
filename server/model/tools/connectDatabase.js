const mongoose = require('mongoose')
mongoose.connect('mongodb://root:1234@124.222.84.233:27017/')
    .then(()=>{
        console.log('database connect successfully');
    })
    .catch((err)=>{
        console.log(err);
    })