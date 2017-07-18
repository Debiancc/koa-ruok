# koa-ruok
[![NPM](https://nodei.co/npm/koa-ruok.png?stars&downloads)](https://nodei.co/npm/koa-ruok/)

[![i am ok](http://upload.ikanchai.com/2015/0502/1430536638903.gif)]

## Usage
  ```javascript
     Koa.use(ruok());
  ```

  ```javascript
     Koa.use(ruok('/areyouok?'));
  ```

  ```javascript
     Koa.use(ruok('/areyouok?', () => {
        return Promise.resolve({
          message: 'I am really ok.'
        });
     } ));
  ```

## License

[MIT](https://mths.be/mit) license.
