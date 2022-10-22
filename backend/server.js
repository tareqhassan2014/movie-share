const app = require('./app');

// uncaught error handler
process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception...');
    console.log(err.name, err.message);
    console.log(err.stack);
    console.log('Closing server...');
    console.log('Server closed...');
    process.exit(1);
});

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION 💥', err.mane, err.message);
    server.close(() => {
        process.exit(1);
    });
});
