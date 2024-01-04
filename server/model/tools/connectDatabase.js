const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chenxu2656:GaSaQ0JpdwuYXaE7@cluster0.d8a2gjk.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('database connect successfully');
    })
    .catch((err)=>{
        console.log(err);
    })