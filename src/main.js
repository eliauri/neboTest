import { createApp } from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';
import './registerServiceWorker';

const app = createApp(App);

app.use(YmapPlugin, {
  apiKey: 'fbe76a2c-7b5c-43ac-88bf-5bb2041b0fe8', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
});
app.mount('#app');
