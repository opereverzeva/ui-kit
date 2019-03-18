import Vue from 'vue'
import Overview from '../vue-components/UiKitOverview'

const app = new Vue({
    el: '#app',
    render: h => h(Overview)
})