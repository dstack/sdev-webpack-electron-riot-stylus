console.log('hello world');

require('./styl/main.styl');

require('./tags/test.tag');

riot.mount('*');

new Notification('Basic Notification', {body: 'Short Notification body here'});
