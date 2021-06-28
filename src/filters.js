import Vue from "vue";

Vue.filter('upper' , (v) => {
    return v.toUpperCase();
})

Vue.filter('revers' , (v) => {
    return v.split('').reverse().join('');
})

Vue.filter('mini' , (value,max) => {
    return value.substring(0 , max);
})