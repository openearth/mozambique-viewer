import {
  bus
} from '@/event-bus.js';

import Vue from 'vue';
import mapboxgl from 'mapbox-gl';
import LayerControl from './components/LayerControl';
import CoastalFlood from './components/CoastalFlood';

export default {
  name: 'app',
  data: function() {
    return {
      map: null,
      drawer: null,
      layers: []
    };
  },
  mounted() {

    this.map = this.$refs.map.map;
    this.map.on('load', (event) => {
      bus.$emit('map-loaded', this.map)
      console.log('check', bus)
      this.map.addControl(new mapboxgl.NavigationControl());
    });
  },
  methods: {},
  components: {
    'layer-control': LayerControl,
    'v-coastal-flood': CoastalFlood
  },
};
