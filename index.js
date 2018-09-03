const defaultRes = { status : 'up' };

const handleResponse = (p, context) => {
  return Promise.resolve()
                .then(() => {
                  return typeof p === 'function' && p(context);
                })
                .then(r => {
                  context.body = r || defaultRes;
                })
                .catch(err => {
                  console.error(new Error(err));
                  context.body = defaultRes;
                });
};

/**
 *
 * @param path {String}
 * @param res {*}
 * @returns {Function}
 */
module.exports = function (path = '/ruok', res = defaultRes) {
  return function (context, next) {
    return path === context.path ? handleResponse(res, context) : next();
  };
};
