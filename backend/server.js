const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.route.js");
const userRoutes = require("./routes/user.route.js");
const { connectToMongoDb } = require("./db/connectMongo.js");
const { app, server } = require('./socket/socket.js')

dotenv.config()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
    connectToMongoDb();
    console.log(`server running at port ${port}`);
});