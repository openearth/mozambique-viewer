import {
  bus
} from '@/event-bus.js';


export default {
  name: 'v-hazards',
  props: ['access-token'],
  data() {
    return {
      map: null,
    };
  },
  mounted() {},
  methods: {
    deferredMountedTo(map) {
      var layers =  [
        {
          id: 'CF-layer-25',
          properties: {
            'return-period': 25,
            hazard: 'Coastal Flood',
            unit: 'cm water depth'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 25,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.588zuz9x/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'CF-layer-100',
          properties: {
            'return-period': 100,
            hazard: 'Coastal Flood',
            unit: 'cm water depth'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 100,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.awl4l0w6/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'CF-layer-500',
          properties: {
            'return-period': 500,
            hazard: 'Coastal Flood',
            unit: 'cm water depth'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 500,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.84gdnnj5/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ]
          }
        },
        {
          id: 'EQ-layer-952',
          properties: {
            hazard: 'EarthQuake',
            'return-period': 25,
            unit: 'gal'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 500,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.7enpsj6a/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'EQ-layer-3935',
          properties: {
            hazard: 'EarthQuake',
            'return-period': 100,
            unit: 'gal'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 100,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.0q07e22l/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        }, {
          id: 'EQ-layer-8647',
          properties: {
            hazard: 'EarthQuake',
            'return-period': 500,
            unit: 'gal'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 25,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.br98oxaa/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'RF-layer-500',
          properties: {
            hazard: 'River Flood',
            'return-period': 500,
            unit: 'cm water depth'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 500,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.chj1ng8v/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'RF-layer-100',
          properties: {
            hazard: 'River Flood',
            'return-period': 100,
            unit: 'cm water depth'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 100,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.c06txkrf/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        }, {
          id: 'RF-layer-25',
          properties: {
            hazard: 'River Flood',
            'return-period': 25,
            unit: 'cm water depth'
          },

          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 25,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.dc2ne2bi/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'CW-layer-500',
          properties: {
            hazard: 'Cyclone Wind',
            'return-period': 500,
            unit: 'm/s'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 500,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.9bn8xy0d/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        }, {
          id: 'CW-layer-100',
          properties: {
            hazard: 'Cyclone Wind',
            'return-period': 100,
            unit: 'm/s'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 100,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.cvx0czbd/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        },
        {
          id: 'CW-layer-25',
          properties: {
            hazard: 'Cyclone Wind',
            'return-period': 25,
            unit: 'm/s'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'raster',
          returnPeriod: 25,
          source: {
            type: 'raster',
            tiles: [
              `https://api.mapbox.com/v4/joaolima.79j4lz37/{z}/{x}/{y}.png?access_token=${this.accessToken}`
            ],
            tileSize: 256
          }
        }
      ]

      _.each(layers, (layer) => {
        map.addLayer(layer);
      })

      var hazardDataset = {
        name: 'Hazards',
        id: 'hazards',
        icon: 'priority_high',
        active: false,
        content: "Hazards",
        layers: layers,
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
        range_RF: '0 1200',
        css_RF: "background: linear-gradient(to right, #ffffd4,#fed98e,#fe9929, #d95f0e, #993404)",
        range_CW: '15 45',
        css_CW: "background: linear-gradient(to right, #fde725,#d7e22a,#b0dd2f, #89d548, #65cb5e, \
          #46c06f, #2eb37c, #21a585, #1f978b, #23898e, #297b8e, #2e6d8e, #355e8d, #3d4e8a, #433d84, \
          #472a7a, #481769, #440154)"

      }

      bus.$emit('add-layer', hazardDataset);
    }
  }

}
