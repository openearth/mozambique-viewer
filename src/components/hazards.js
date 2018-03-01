import {
  bus
} from '@/event-bus.js';


export default {
  name: 'v-hazards',
  data() {
    return {
      map: null,
    };
  },
  mounted() {},
  methods: {
    deferredMountedTo(map) {

      var hazard_layer = {
        name: 'Hazards',
        id: 'hazards',
        icon: 'home',
        active: false,
        content: "Hazards",
        json_layers: [],
        range: '0 700',
        "css": "background: linear-gradient(to right, \
          rgba(247,251,255,40), \
          rgba(104,160,213,117), \
          rgba(60,148,201,166), \
          rgba(49,118,163,202), \
          rgba(25,86,138,223), \
          rgba(9,57,129,255))"
      }

      var CF_layers = {
        name: 'Coastal Flood',
        data: [{
          id: 'CF-layer-25',
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 25,
          source: {
            type: 'raster',
            url: 'mapbox://joaolima.588zuz9x',
            tileSize: 256
          }
        }, {
          id: 'CF-layer-100',
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 100,
          source: {
            type: 'raster',
            url: 'mapbox://joaolima.awl4l0w6',
            tileSize: 256
          }
        }, {
          id: 'CF-layer-500',
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 500,
          source: {
            type: 'raster',
            url: 'mapbox://joaolima.84gdnnj5',
            tileSize: 256
          }
        }]
      }
      hazard_layer.json_layers.push(CF_layers)
      _.each(CF_layers.data, (CF_layer) => {
        console.log('CF_layer', CF_layer)
        map.addLayer(CF_layer);
      })
      console.log('hazard_layer', hazard_layer)
      bus.$emit('add-layer', hazard_layer);
    }
  }

}
