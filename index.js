const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.get("/",(req,res)=>{
    res.status(200).json({message: "Success, you are here!"})
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});