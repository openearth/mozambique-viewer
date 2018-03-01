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
        textcolor: "rgba(199, 23, 220, 1)",
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
            'fill-color': 'rgba(199, 23, 220, 0.26)',
            'fill-outline-color': "rgba(199, 23, 220, 1)"
          }
        }]
      }

      var unconventional_usd_layers = {
        name: 'Unconventional USD',
        textcolor: 'rgba(0, 64, 231, 1)',
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
            'fill-color': 'rgba(0, 64, 231, 0.26)',
            'fill-outline-color': 'rgba(0, 64, 231, 1)'

          }
        }]
      }

      var unconventional_count_layers = {
        name: 'Unconventional Count',
        textcolor: 'rgba(52, 220, 58, 1)',
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
            'fill-color': 'rgba(52, 220, 58, 0.26)',
            'fill-outline-color': 'rgba(52, 220, 58, 1)'
          }
        }]
      }

      var conventional_count_layers = {
        name: 'Conventional count',
        textcolor: 'rgba(242, 220, 19, 1)',
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
            'fill-color': 'rgba(242, 220, 19, 0.26)',
            'fill-outline-color': 'rgba(242, 220, 19, 1)'
          }
        }]
      }

      var pupils_layers = {
        name: 'Pupils',
        textcolor: 'rgba(250, 24, 21, 1)',
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
            'fill-color': 'rgba(250, 24, 21, 0.26)',
            'fill-outline-color': 'rgba(250, 24, 21, 1)'
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
