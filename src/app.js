import {
  bus
} from '@/event-bus.js';

import Vue from 'vue';
import mapboxgl from 'mapbox-gl';
import LayerControl from './components/LayerControl';
import Hazards from './components/Hazards';
import ResultsLayers from './components/ResultsLayers';
import exposureLayers from './components/exposureLayers';

export default {
  name: 'app',
  data: function() {
    return {
      map: null,
      drawer: null,
      layers: [],
      headers: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: '1/10 year return period', value: 'rp10'},
        { text: '1/100 year return period', value: 'rp100'},
        { text: '1/500 year return period', value: 'rp500'},
        { text: 'Annual Expected Data', value: 'AED'},
      ],
      items: []
    };
  },
  mounted() {
    this.map = this.$refs.map.map;

    var popup = new mapboxgl.Popup({})
    var content = document.getElementById('popupinfo')
    popup.setDOMContent(content)

    bus.$on('select-layers', (layers) => {
      Vue.set(this, 'layers', layers);
    });
    bus.$on('add-layer', (layer) => {
      this.layers.push(layer);
    });
    this.map.on('error', event => console.log(event))

    // Error, because not all tiles exist in the layers.
    this.map.on('load', (event) => {

      this.map.on('mousemove', (e) => {
          this.$refs.map.map.getCanvas().style.cursor = '';
          var features_list = this.map.queryRenderedFeatures(e.point);
          if (typeof features_list[0] !== 'undefined') {
            this.$refs.map.map.getCanvas().style.cursor = 'pointer';
          }
        })

      bus.$emit('map-loaded', this.$refs.map.map)

      this.map.addControl(new mapboxgl.NavigationControl());

      // create popup with table with information
      this.map.on('click', (e) => {
        var features = this.map.queryRenderedFeatures(e.point);
        console.log(features)
        if (features[0].layer['id'] !== "combined-exposure"){
        popup.remove()

                this.items = [
          {
            value: false,
            name: features[0].layer['id'],
            'rp10': features[0].properties['10'],
            'rp100': features[0].properties['100'],
            'rp500': features[0].properties['500'],
            'AED': features[0].properties['AED']
          }
        ]
        this.headers[0].text = features[0].properties['ADM1_NAME'] + ', ' + features[0].properties['ADM2_NAME']
        popup.setLngLat(e.lngLat)
          .addTo(this.map);
        }
      });
    });

  },
  watch: {
  },
  methods: {},
  components: {
    'layer-control': LayerControl,
    'v-hazards': Hazards,
    'v-exposure-layers': exposureLayers,
    'v-results-layers': ResultsLayers

  },
};
