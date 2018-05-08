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
      this.map = map

      var layers = [
        {
          id: "combined-exposure",
          properties: {
            name: 'Combined exposure'
          },
          layout: {
            'visibility': 'none'
          },
          type: 'circle',
          source: {
            type: 'vector',
            url: 'mapbox://joaolima.cg24n2xe'
          },
          'source-layer': 'Combined_Exposure-3noze9',
          'paint': {}
        }
      ]

      var exposureDataset = {
        active: false,
        content: 'Exposure',
        icon: 'home',
        id: 'results',
        name: 'Combined exposure',
        layers: layers
      }

      _.each(layers, (layer) => {
        this.map.addLayer(layer);
      })

      bus.$emit('add-layer', exposureDataset);


    }
  }

}
