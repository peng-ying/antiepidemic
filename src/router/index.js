import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Total from '../pages/totality'
import Increase from '../pages/increase'
import CureAndDeath from '../pages/cureAndDeath'
import Comprehensive from '../pages/comprehensive'
import Peak from '../pages/peak'
import Serious from '../pages/seriousAnalyze'
import Resumption from '../pages/resumption'
import Public from '../pages/publicAnalyze'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/total',
      name: 'total',
      component: Total
    },
    {
      path: '/increase',
      name: 'increase',
      component: Increase
    },
    {
      path: '/cureAndDeath',
      name: 'cureAndDeath',
      component: CureAndDeath
    },
    {
      path: '/comprehensive',
      name: 'comprehensive',
      component: Comprehensive
    },
    {
      path: '/peak',
      name: 'peak',
      component: Peak
    },
    {
      path: '/serious',
      name: 'serious',
      component: Serious
    },
    {
      path: '/resumption',
      name: 'resumption',
      component: Resumption
    },
    {
      path: '/public',
      name: 'public',
      component: Public
    }
  ]
})
