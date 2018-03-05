import {
  bus
} from '@/event-bus.js';


export default {
  name: 'v-results-layers',
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
        icon: 'view_list',
        id: 'results-id',
        json_layers: []
      }

      var conventional_usd_layers = {
        name: 'Conventional USD',
        textcolor: "rgba(199, 23, 220, 1)",
        data: [{
          hazard: 'Coastal Flood [cm water depth]',
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
        },
        {
          hazard: 'EarthQuake [gal]',
          id: "EQ-conventional-usd",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.7zimfshz'
          },
          'source-layer': 'EQ_conventional_usd-0w18ma',
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
          hazard: 'Coastal Flood [cm water depth]',
          id: "CF-unconventional-usd",
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
            'fill-color': 'rgba(0, 64, 231, 0.26)',
            'fill-outline-color': 'rgba(0, 64, 231, 1)'

          }
        },
        {
          hazard: 'EarthQuake [gal]',
          id: "EQ-unconventional-usd",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.5bsudt95'
          },
          'source-layer': 'EQ_unconventional_usd-6b4jai',
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
          hazard: 'Coastal Flood [cm water depth]',
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
        },
        {
          hazard: 'EarthQuake [gal]',
          id: "EQ-unconventional-count",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.0rn8aiji'
          },
          'source-layer': 'EQ_unconventional_count-axxh45',
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
          hazard: 'Coastal Flood [cm water depth]',
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
        },
        {
          hazard: 'EarthQuake [gal]',
          id: "EQ-conventional-count",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.45biq1lh'
          },
          'source-layer': 'EQ_conventional_count-dvud0r',
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
          hazard: 'EarthQuake [gal]',
          id: "EQ-pupils",
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.5ku77z5c'
          },
          'source-layer': 'EQ_pupils-9ftcxb',
          'paint': {
            'fill-color': 'rgba(250, 24, 21, 0.26)',
            'fill-outline-color': 'rgba(250, 24, 21, 1)'
          }
        },
        {
          hazard: 'Coastal Flood [cm water depth]',
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
        _.each(menu_layer.data, (sublayer) => {
          this.map.addLayer(sublayer);
        })
      })

      bus.$emit('add-layer', result_layer);


    }
  }

}
