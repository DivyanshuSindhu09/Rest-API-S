import express from "express";

const app = express();
// routes
app.get('/', (req, res, next) => {
    res.json({message : "Rest API'S"})
})

export default app;
