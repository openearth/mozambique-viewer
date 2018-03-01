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
        this.selectResults = selectResults
        this.toggleLayers();
      },
      deep: true
    },
    selectHazards: {
      handler: function(selectHazards) {
        this.selectHazards = selectHazards
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

      _.each(this.layers, (layer) => {
        _.each(layer.json_layers, (sublayer) => {
          _.each(sublayer.data, (maplayer) => {
            if (layer.active &&
              (this.returnPeriod === maplayer.returnPeriod ||
                (this.selectResults === sublayer.name &&
                  maplayer.hazard === this.selectHazards) ||
                layer.content === "Exposure")) {
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
