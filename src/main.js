import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import 'normalize.css/normalize.css';
import '@/style/gobel.scss';
import SvgIcon from './components/SvgIcon/index.vue'
import {
  Select,
  Option,
  Button,
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  Input,
  FormItem,
  OptionGroup,
  Divider,
  Loading,
  Image
} from 'element-ui';

Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(OptionGroup);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.component('svg-icon', SvgIcon);
Vue.config.productionTip = false;
// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/svg', true, /.svg$/);
requireAll(req);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
