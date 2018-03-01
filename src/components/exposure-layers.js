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
        content: 'Exposure',
        icon: 'home',
        id: 'results',
        name: 'Combined exposure',
        json_layers: []
      }

      var exposure_layer = {
        name: 'Combined exposure',
        textcolor: "rgba(199, 23, 220, 1)",
        data: [{
          id: "combined-exposure",
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
        }]
      }
      this.map = map


      result_layer.json_layers.push(exposure_layer)
      this.map.addLayer(exposure_layer.data[0]);

      bus.$emit('add-layer', result_layer);


    }
  }

}
