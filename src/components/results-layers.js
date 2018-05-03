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
      this.map = map
      const layers = [
        {
          properties: {
            hazard: 'Coastal Flood [cm water depth]',
            result: 'Conventional USD'
          },
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
          id: "EQ-conventional-usd",
          properties: {
            hazard: 'EarthQuake [gal]',
            result: 'Conventional USD',
          },
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
        },
        {
          id: "RF-conventional-usd",
          properties: {
            result: 'Conventional USD',
            hazard: 'River Flood [cm water depth]'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.b8gfiiix'
          },
          'source-layer': 'RF_conv_usd-8ia3zu',
          'paint': {
            'fill-color': 'rgba(199, 23, 220, 0.26)',
            'fill-outline-color': "rgba(199, 23, 220, 1)"
          }
        },
        {
          id: "CF-unconventional-usd",
          properties: {
            result: 'Unconventional USD',
            hazard: 'Coastal Flood [cm water depth]'
          },
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
          id: "EQ-unconventional-usd",
          properties: {
            hazard: 'EarthQuake [gal]',
            result: 'Unconventional USD'
          },
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
        },
        {
          id: "RF-unconventional-usd",
          properties: {
            hazard: 'River Flood [cm water depth]',
            result: 'Unconventional USD'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.a8a53my1'
          },
          'source-layer': 'RF_uncon_count-0b8ewj',
          'paint': {
            'fill-color': 'rgba(0, 64, 231, 0.26)',
            'fill-outline-color': 'rgba(0, 64, 231, 1)'
          }
        },
        {
          id: "CF-unconventional-count",
          properties: {
            hazard: 'Coastal Flood [cm water depth]',
            result: 'Unconventional Count'
          },
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
          id: "EQ-unconventional-count",
          properties: {
            hazard: 'EarthQuake [gal]',
            result: 'Unconventional Count'
          },
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
        },
        {
          id: "RF-unconventional-count",
          properties: {
            hazard: 'River Flood [cm water depth]',
            result: 'Unconventional Count'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.a8a53my1'
          },
          'source-layer': 'RF_uncon_count-0b8ewj',
          'paint': {
            'fill-color': 'rgba(52, 220, 58, 0.26)',
            'fill-outline-color': 'rgba(52, 220, 58, 1)'
          }
        },
        {
          id: "CF-conventional-count",
          properties: {
            hazard: 'Coastal Flood [cm water depth]',
            result: 'Conventional count'
          },
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
          id: "EQ-conventional-count",
          properties: {
            hazard: 'EarthQuake [gal]',
            result: 'Conventional count'
          },
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
        },
        {
          id: "RF-conventional-count",
          properties: {
            hazard: 'River Flood [cm water depth]',
            result: 'Conventional count'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.16x683kc'
          },
          'source-layer': 'RF_conv_count-5sthv2',
          'paint': {
            'fill-color': 'rgba(242, 220, 19, 0.26)',
            'fill-outline-color': 'rgba(242, 220, 19, 1)'
          }
        },
        {
          id: "EQ-pupils",
          properties: {
            hazard: 'EarthQuake [gal]',
            result: 'Pupils'
          },
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
          id: "CF-pupils",
          properties: {
            hazard: 'Coastal Flood [cm water depth]',
            result: 'Pupils'
          },
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
        }
      ]

      const resultDataset = {
        active: false,
        content: 'Results',
        icon: 'view_list',
        id: 'results-id',
        layers: layers
      }

      _.each(layers, (layer) => {
        this.map.addLayer(layer);
      })
      bus.$emit('add-layer', resultDataset);


    }
  }

}
