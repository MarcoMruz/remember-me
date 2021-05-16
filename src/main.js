import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('TheHeader', TheHeader);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
