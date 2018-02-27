import {
  bus
} from '@/event-bus.js';


export default {
  name: 'v-coastal-flood',
  data() {
    return {
      map: null,
    };
  },
  mounted() {  },
  methods: {
    deferredMountedTo(map) {
      this.map = map
      var layer_json = {
        id: 'CF-layer',
        name: 'Coastal Flood',
        icon: 'home',
        active: 'true',
        visibility: 'true',
        type: 'raster',
        source: {
          type: 'raster',
          url: 'mapbox://camvdvries.4m8jkd4w',
        },
        minzoom: 0,
        maxzoom: 22
      }
      this.map.addLayer(layer_json);
      bus.$emit('add-layer', layer_json);

    }
  }

}
