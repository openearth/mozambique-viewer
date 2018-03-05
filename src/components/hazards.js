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
        icon: 'priority_high',
        active: false,
        content: "Hazards",
        json_layers: [],
        range_CF: '0 700',
        css_CF: "background: linear-gradient(to right, \
          rgba(247,251,255,40), \
          rgba(104,160,213,117), \
          rgba(60,148,201,166), \
          rgba(49,118,163,202), \
          rgba(25,86,138,223), \
          rgba(9,57,129,255))",
        range_EQ: '0 600',
        css_EQ: "background: linear-gradient(to right, #f9faa1, #f6f592, #f2ea69,\
            #f6d746, #fac42a, #fcb014, #fb9d07, #f58c08, #f47918, #ed6925, #e45a31,\
            #d94d3d, #cc4248, #bf3952, #b0315b, #a02a63, #902568, #801f6c, #71196e,\
            #61136e, #510e6c, #400a67, #2f0a5b, #1e0c45, #10092d, #050417, #000004)",
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
      var EQ_layers = {
        name: 'EarthQuake',
        data: [{
          id: 'EQ-layer-952',
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 952,
          source: {
            type: 'raster',
            url: 'mapbox://joaolima.7enpsj6a',
            tileSize: 256
          }
        }, {
          id: 'EQ-layer-3935',
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 3935,
          source: {
            type: 'raster',
            url: 'mapbox://joaolima.awl4l0w6',
            tileSize: 256
          }
        }, {
          id: 'EQ-layer-8647',
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 8647,
          source: {
            type: 'raster',
            url: 'mapbox://joaolima.br98oxaa',
            tileSize: 256
          }
        }]
      }
      hazard_layer.json_layers.push(CF_layers)
      hazard_layer.json_layers.push(EQ_layers)

      _.each(CF_layers.data, (CF_layer) => {
        map.addLayer(CF_layer);
      })

      _.each(EQ_layers.data, (EQ_layer) => {
        map.addLayer(EQ_layer);
      })
      console.log('hazard_layer', hazard_layer)
      bus.$emit('add-layer', hazard_layer);
    }
  }

}
