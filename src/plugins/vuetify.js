import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#21a46a',
                anchor: '#242631',
            },
            dark: {
                primary: '#0848a8',
                anchor: '#d3d3d3',
            }
        }
    }
});
