const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddleware')
// const fileUpload = require('express-fileupload')

const app = express();

// Connect Database
connectDB();

//file uploads
// app.use(fileUpload({useTempFiles: true, createParentPath: true}))

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ limit: '10mb', extended: false }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// routes
const users = require('./routes/userRoutes');
const messages = require('./routes/messageRoutes');
const conversations = require('./routes/conversationRoutes');
const posts = require("./routes/postRoutes")
const projects = require("./routes/projectRoutes")
const issues = require("./routes/issueRoutes")
const surveys = require('./routes/surveyRoutes');
const comments = require("./routes/commentRoutes")
const attachments = require("./routes/attachmentRoutes")
const notifications = require("./routes/notificationRoutes")
const announcements = require("./routes/announcementRoutes")

// use Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/issues', issues);
app.use('/api/comments', comments);
app.use('/api/projects', projects);
app.use('/api/messages', messages);
app.use('/api/surveys', surveys);
app.use('/api/conversations', conversations);
app.use('/api/attachments', attachments);
app.use('/api/notifications', notifications);
app.use('/api/announcements', announcements);

app.use(errorHandler)

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})