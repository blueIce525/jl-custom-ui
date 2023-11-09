import VenusDemo from './main.vue';

VenusDemo.install = function (Vue) {
  Vue.component(VenusDemo.name, VenusDemo);
};

export default VenusDemo;
