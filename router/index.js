let Vue = require('vue');
let VueRouter = require('vue-router');

Vue.use(VueRouter);
let CONFIG = {
  mode: 'history', // TODO: merge with mode when mobile is added
};

let first = true;
let ready;
let deferred = new Promise(resolve => {
  ready = resolve;
});
let initial;

module.exports = {
  create(config) {
    let router = new VueRouter(Object.assign({}, CONFIG, config));
    router.beforeEach((to, from, next) => {
      if (first) {
        first = false;
        initial = Object.assign({}, to);
        next(false);
      } else {
        next();
      }
    });
    (async () => {
      await deferred;
      router.replace(initial);
    })();
    Object.assign(module.exports, router);
    Object.setPrototypeOf(module.exports, Object.getPrototypeOf(router));
    return module.exports;
  },

  register(routes) {
    module.exports.addRoutes(routes);
    ready();
  },

  initial(path) {
    initial = { path };
  },
};
