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
    deferredMountedTo() {},
    toggleLayers() {
      if (_.isNil(this.map)) {
        return;
      }
      // Function to toggle the visibility of the layers.

      var visibility = {
        true: 'visible',
        false: 'none'

      }

      _.each(
        this.exposureLayer.layers,
        (layer) => {
          // by default disable
          this.map.setLayoutProperty(layer.id, "visibility", visibility.false)

          // return if we're not active not
          if (!this.exposureLayer.active) {
            // we're done
            return;
          }

          // if we made it this far we're visible
          this.map.setLayoutProperty(layer.id, "visibility", visibility.true)

        }
      )

      _.each(
        this.hazardLayer.layers,
        (layer) => {
          // By default disable
          this.map.setLayoutProperty(layer.id, "visibility", visibility.false)

          // return if we're not active not
          if (!this.hazardLayer.active) {
            // we're done
            return;
          }

          if (!this.selectHazards) {
            return;
          }

          // if we have a return period and it's different from the current return period, we're disabled
          if (_.has(layer, 'properties.return-period') && layer.properties['return-period'] !== this.returnPeriod) {
            return;
          }
          // if we have a hazard and it's differnt from the current hazard, we're disabled
          if (_.has(layer, 'properties.hazard') && layer.properties.hazard !== this.selectHazards.text) {
            return;
          }

          // if we made it this far we're visible
          this.map.setLayoutProperty(layer.id, "visibility", visibility.true)
        }
      )

      _.each(
        this.resultsLayer.layers,
        (layer) => {
          // by default disable
          this.map.setLayoutProperty(layer.id, "visibility", visibility.false)

          // return if we're not active not
          if (!this.resultsLayer.active) {
            // we're done
            return;
          }

          if (!this.selectResults) {
            return;
          }

          if (!this.selectHazards) {
            return;
          }


          // if we have a hazard and it's differnt from the current hazard, we're disabled
          if (_.has(layer, 'properties.hazard') && layer.properties.hazard !== this.selectHazards.text) {
            return;
          }
          // if we have a result and it's different from the current return result, we're disabled
          if (_.has(layer, 'properties.result') && layer.properties['result'] !== this.selectResults.text) {
            return;
          }

          // if we made it this far we're visible
          this.map.setLayoutProperty(layer.id, "visibility", visibility.true)
        }
      )
    }
  },
  computed: {
    hazardLayer() {
      return _.first(
        _.filter(this.layers, layer => layer.content === 'Hazards')
      );
    },
    exposureLayer() {
      return _.first(
        _.filter(this.layers, layer => layer.content === 'Exposure')
      );
    },
    resultsLayer() {
      return _.first(
        _.filter(this.layers, layer => layer.content === 'Results')
      );
    },
    hazardLayerItems() {
      let labels = _.map(
        this.hazardLayer.layers,
        layer => {
          let result = {
            text: layer.properties.hazard
          }
          return result;
        }
      )
      let uniqueLabels = _.uniqBy(labels, 'text');
      return uniqueLabels;
    },
    resultsLayerItems() {
      let labels = _.map(
        this.resultsLayer.layers,
        layer => {
          let result = {
            text: layer.properties.result
          }
          return result;
        }
      )
      let uniqueLabels = _.uniqBy(labels, 'text');
      return uniqueLabels;
    }
  }
};
