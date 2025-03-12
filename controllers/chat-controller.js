const path = require('path');
const rootDir = require('../utils/pathUtil');

exports.getChat = (req, res, next) => {
    const filePath = path.join(rootDir, 'views', 'chat.html');
    res.sendFile(filePath); // Send the file to the browser
};
