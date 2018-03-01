import {
  bus
} from '@/event-bus.js';

import Vue from 'vue';
import mapboxgl from 'mapbox-gl';
import LayerControl from './components/LayerControl';
import Hazards from './components/Hazards';
import ExposureLayers from './components/ExposureLayers';

export default {
  name: 'app',
  data: function() {
    return {
      map: null,
      drawer: null,
      layers: [],
    };
  },
  mounted() {
    this.map = this.$refs.map.map;

    var popup = new mapboxgl.Popup({})
    bus.$on('select-layers', (layers) => {
      Vue.set(this, 'layers', layers);
    });
    bus.$on('add-layer', (layer) => {
      this.layers.push(layer);
    });
    this.map.on('error', event => console.log(event))

    // Error, because not all tiles exist in the layers.
    this.map.on('load', (event) => {
      bus.$emit('map-loaded', this.$refs.map.map)

      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.on('click', (e) => {
        popup.remove()
        var features = this.map.queryRenderedFeatures(e.point);
        popup.setLngLat(e.lngLat)
          .setHTML(JSON.stringify(features[0].properties))
          .addTo(this.map);
      });
    });

  },
  watch: {
  },
  methods: {},
  components: {
    'layer-control': LayerControl,
    'v-hazards': Hazards,
    'v-exposure-layers': ExposureLayers
  },
};
