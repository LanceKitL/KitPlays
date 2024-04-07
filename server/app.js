const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors'); // Import cors module

const app = express();

// Use cors middleware
app.use(cors());

// Define your proxy route
app.use('/api', createProxyMiddleware({
    target: 'https://www.mmobomb.com',
    changeOrigin: true,
}));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
