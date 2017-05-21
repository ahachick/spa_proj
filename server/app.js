const path = require('path');
const Koa = require('koa');
const staticServer = require('koa-static');
const app = new Koa();

app.use(staticServer(path.join(__dirname, '../web')));

app.listen(3000);;
