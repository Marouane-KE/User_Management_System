const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('Public'))
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRouter = require('./routes/userRouter')
app.use('/',userRouter)









app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
