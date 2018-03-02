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
      headers: [],
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
      bus.$emit('map-loaded', this.$refs.map.map)
      this.map.addControl(new mapboxgl.NavigationControl());

      this.map.on('mousemove', (e) => {
        this.$refs.map.map.getCanvas().style.cursor = '';
        var features_list = this.map.queryRenderedFeatures(e.point);
        if (typeof features_list[0] !== 'undefined') {
          this.$refs.map.map.getCanvas().style.cursor = 'pointer';
        }
      })

      // create popup with table with information
      this.map.on('click', (e) => {
        popup.remove()
        var features = this.map.queryRenderedFeatures(e.point);
        if (features[0].layer['id'] === "combined-exposure") {
          this.items = [{
              value: false,
              name: 'Name',
              data: features[0].properties['Name'],
            },
            {
              value: false,
              name: 'type',
              'data': features[0].properties['Type'],
            },
            {
              value: false,
              name: 'Pupils fin',
              'data': features[0].properties['PUPILS_FIN'],
            },
            {
              value: false,
              name: 'Total ReCost',
              'data': features[0].properties['Tot_ReCost'],
            },
            {
              value: false,
              name: 'UNCON_FINA',
              'data': features[0].properties['UNCON_FINA'],
            }
          ]
          this.headers = [{
              text: features[0].properties['ADM1_NAME'] + ', ' + features[0].properties['ADM2_NAME'],
              align: 'left',
              sortable: false,
              value: 'name'
            },
            {
              text: 'data',
              value: 'data'
            }
          ]
          popup.setLngLat(e.lngLat)
            .addTo(this.map)
        } else if (features[0].layer['id'] !== "combined-exposure") {
          this.items = [{
              value: false,
              name: "Name",
              data: features[0].layer['id']
            },
            {
              value: false,
              name: "Return period: 10 years",
              data: features[0].properties['10']
            },
            {
              value: false,
              name: "Return period: 100 years",
              data: features[0].properties['100']
            }, {
              value: false,
              name: "Return period: 500 years",
              data: features[0].properties['500']
            }, {
              value: false,
              name: "Annual Expected Damage",
              data: features[0].properties['AED']
            },
          ]
          this.headers = [{
              text: features[0].properties['ADM1_NAME'] + ', ' + features[0].properties['ADM2_NAME'],
              align: 'left',
              sortable: false,
              value: 'name'
            },
            {
              text: 'Data',
              value: 'data'
            }
          ]
          popup.setLngLat(e.lngLat)
            .addTo(this.map);
        }
      });
    });

  },
  watch: {},
  methods: {},
  components: {
    'layer-control': LayerControl,
    'v-hazards': Hazards,
    'v-exposure-layers': exposureLayers,
    'v-results-layers': ResultsLayers

  },
};
