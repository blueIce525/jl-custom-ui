// import Demo from './demo';
// import VenusTextLink from './text-link';

const modules = require.context('../lib', true, /\.\/.+\/index\.js$/);
const modulesPathList = modules.keys();
const components = modulesPathList.map(fileName => modules(fileName).default || modules(fileName));
// const components = {
//   Demo,
//   VenusTextLink,
// };

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components,
};

export default API;
