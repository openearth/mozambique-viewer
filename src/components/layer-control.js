import _ from 'lodash';

export default {
  name: 'layer-control',
  props: {
    layers: {
      type: Array,
      required: true
    },
    map: {
      type: Object
    }
  },
  data() {
    return {
      returnPeriod: null,
      selectResults: null,
      selectHazards: null

    };
  },
  mounted() {},
  watch: {
    // Watch "layers". This is a switch, which can toggle a layer on or off
    // When toggled, this watcher will activate the toggleLayers function.
    layers: {
      handler: function(layers) {
        this.toggleLayers();
      },
      deep: true
    },
    returnPeriod: {
      handler: function(returnPeriod) {
        this.toggleLayers();
      },
      deep: true
    },
    selectResults: {
      handler: function(selectResults) {
        console.log(selectResults)
        this.selectResults = selectResults
        this.toggleLayers();
      },
      deep: true
    },
    selectHazards: {
      handler: function(selectHazards) {
        this.selectHazards = selectHazards
        console.log(selectHazards)
        this.toggleLayers();
      },
      deep: true
    }
  },
  methods: {
    toggleLayers() {
      if (_.isNil(this.map)) {
        return;
      }
      // Function to toggle the visibility of the layers.
      var vis = ['none', 'visible']
      var types = ['Hazards', 'Results', 'Exposure']
      console.log('selectHazards', this.selectHazards,
        'selectResults', this.selectResults,
        'returnPeriod', this.returnPeriod)
      _.each(this.layers, (layer) => {
        // if (layer.type === 'group') {
        //   _.each(layer.data, (sublayer) => {
        //     if (layer.active & this.returnPeriod === sublayer.returnPeriod) {
        //       this.map.setLayoutProperty(sublayer.id, "visibility", vis[1]);
        //     }
        //     else {
        //       this.map.setLayoutProperty(sublayer.id, "visibility", vis[0]);
        //     }
        //   })
        // }
        _.each(layer.json_layers, (sublayer) => {
          _.each(sublayer.data, (maplayer) => {
            console.log(layer.id, layer.active, this.returnPeriod, maplayer.returnPeriod,
              this.selectResults,sublayer.name, maplayer.hazard, this.selectHazards)
            if (layer.active &&
              (this.returnPeriod === maplayer.returnPeriod ||
                (this.selectResults === sublayer.name &&
                  maplayer.hazard === this.selectHazards))) {
              this.map.setLayoutProperty(maplayer.id, "visibility", vis[1]);
            } else {
              this.map.setLayoutProperty(maplayer.id, "visibility", vis[0]);
            }
          })
        })

      });
    }
  }
};
