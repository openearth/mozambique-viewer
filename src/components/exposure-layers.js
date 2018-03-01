import {
  bus
} from '@/event-bus.js';


export default {
  name: 'v-exposure-layers',
  data() {
    return {
      map: null,
    };
  },
  mounted() {},
  methods: {
    deferredMountedTo(map) {
      var result_layer = {
        active: false,
        content: 'Results',
        icon: 'home',
        id: 'results',
        json_layers: []
      }

      var conventional_usd_layers = {
        name: 'Conventional USD',
        data: [{
          hazard: 'Coastal Flood',
          id: "CF-conventional-usd",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.4ph2ua2g'
          },
          'source-layer': 'CF_conventional_usd-a3oswd',
          'paint': {
            'fill-color': 'hsla(312, 49%, 39%, 0.4)'
          }
        }]
      }

      var unconventional_usd_layers = {
        name: 'Unconventional USD',
        data: [{
          hazard: 'Coastal Flood',
          id: "CF-unconventional-usd",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.drs7l8os'
          },
          'source-layer': 'CF_unconventional_usd-bv0i45',
          'paint': {
            'fill-color': 'hsla(312, 49%, 39%, 0.4)'
          }
        }]
      }

      var unconventional_count_layers = {
        name: 'Unconventional Count',
        data: [{
          hazard: 'Coastal Flood',
          id: "CF-unconventional-count",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.3sywikko'
          },
          'source-layer': 'CF_unconventional_count30-dwzjx9',
          'paint': {
            'fill-color': 'hsla(312, 49%, 39%, 0.4)'
          }
        }]
      }

      var conventional_count_layers = {
        name: 'Conventional count',
        data: [{
          hazard: 'Coastal Flood',
          id: "CF-conventional-count",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.15kwtp2e'
          },
          'source-layer': 'CF_conventional_count30-887azr',
          'paint': {
            'fill-color': 'hsla(312, 49%, 39%, 0.4)'
          }
        }]
      }

      var pupils_layers = {
        name: 'Pupils',
        data: [{
          hazard: 'Coastal Flood',
          id: "CF-pupils",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.36ig2zci'
          },
          'source-layer': 'CF_pupils-4q3ft2',
          'paint': {
            'fill-color': 'hsla(312, 49%, 39%, 0.4)'
          }
        }]
      }

      this.map = map
      var all_layers = [conventional_usd_layers,
        unconventional_usd_layers,
        conventional_count_layers,
        unconventional_count_layers,
        pupils_layers]

      _.each(all_layers, (menu_layer) => {
        result_layer.json_layers.push(menu_layer)
        this.map.addLayer(menu_layer.data[0]);
      })

      bus.$emit('add-layer', result_layer);


    }
  }

}
