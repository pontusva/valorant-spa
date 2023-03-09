import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AgentView from './views/AgentView.vue'
import MapsView from './views/MapsView.vue'
import RanksView from './views/RanksView.vue'
import GrafittiView from './views/GrafittiView.vue'
import TitlesView from './views/TitlesView.vue'
import WeaponsView from './views/WeaponsView.vue'
import GearView from './views/GearView.vue'
import DetailsView from './views/agentsView/DetailsView.vue'
import MapsViewDetails from './components/Map/MapsViewDetails.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: AgentView,
      path: '/agents/'
    },
    {
      component: MapsView,
      path: '/maps/'
    },
    {
      component: RanksView,
      path: '/ranks/'
    },
    {
      component: GrafittiView,
      path: '/grafitti/'
    },
    {
      component: TitlesView,
      path: '/titles/'
    },
    {
      component: WeaponsView,
      path: '/weapons/'
    },
    {
      component: GearView,
      path: '/gear/'
    },
    {
      component: DetailsView,
      path: '/:uuid?/'
    },
    {
      component: MapsViewDetails,
      path: '/map/:mapName/:mapuuid/'
    }
  ]
})
