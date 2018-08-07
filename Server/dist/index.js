'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3001;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));

app.get('/test', function (req, res) {
    console.log('/test');
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('listening on port: ', port);
});
//# sourceMappingURL=index.js.map