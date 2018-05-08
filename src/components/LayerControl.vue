<template>
  <div class="layer-control">
    <v-container fluid >
      <v-layout column wrap >
        <h3>Selections</h3>
        <v-flex mt-3>
          Return period
          <v-radio-group v-model="returnPeriod">
            <v-layout row>
              <v-radio v-for="n in [25, 100, 500]" :key="n" :label="` ${n}`" :value="n"></v-radio>
            </v-layout>
          </v-radio-group>
        </v-flex>
        <v-flex>
          Hazard
          <v-select
            v-model="selectHazards"
            :items="hazardLayerItems"
            label="Select"
            single-line
            bottom
            class="select-items"
            >
          </v-select>
        </v-flex>
        <v-flex>
          Result
          <v-select
            v-model="selectResults"
            :items="resultsLayerItems"
            label="Select"
            single-line
            bottom
            class="select-items"
            >
          </v-select>
        </v-flex>
        <h3>Layers</h3>
        <v-flex v-if="exposureLayer" mt-3>
          School Exposure
          <v-layout row wrap >
            <v-flex xs10>
              <v-switch v-model="exposureLayer.active" :label="exposureLayer.name" hide-details></v-switch>
            </v-flex>
            <v-flex xs2><v-icon>{{exposureLayer.icon}}</v-icon></v-flex>
          </v-layout>
        </v-flex>
        <v-flex v-if="hazardLayer" mt-3>
          Hazards
          <v-layout row wrap >
            <v-flex xs10>

              <v-switch v-model="hazardLayer.active" label="Hazard" hide-details></v-switch>
            </v-flex>
            <v-flex xs2><v-icon>{{hazardLayer.icon}}</v-icon></v-flex>
          </v-layout>

          <v-flex v-if="selectHazards">
            <div class="bar-wrapper" v-if="selectHazards.value === 'Coastal Flood'">
              <div :style="hazardLayer.css_CF" class="bar" v-if="hazardLayer.css_CF"></div>
              <div class="bartext">{{hazardLayer.range_CF}} <span class="barspan"> </span> </div>
            </div>
            <div class="bar-wrapper" v-if="selectHazards.value === 'EarthQuake'">
              <div :style="hazardLayer.css_EQ" class="bar" v-if="hazardLayer.css_EQ"></div>
              <div class="bartext">{{hazardLayer.range_EQ}} <span class="barspan"> </span> </div>
            </div>
            <div class="bar-wrapper" v-if="selectHazards.value === 'River Flood'">
              <div :style="hazardLayer.css_RF" class="bar" v-if="hazardLayer.css_RF"></div>
              <div class="bartext">{{hazardLayer.range_RF}} <span class="barspan"> </span> </div>
            </div>
            <div class="bar-wrapper" v-if="selectHazards.value === 'Cyclone Wind'">
              <div :style="hazardLayer.css_CW" class="bar" v-if="hazardLayer.css_CW"></div>
              <div class="bartext">{{hazardLayer.range_CW}} <span class="barspan"> </span> </div>
            </div>


          </v-flex>
        </v-flex>
        <v-flex v-if="resultsLayer" mt-3>
          Results
          <v-layout row wrap >
            <v-flex xs10>
              <v-switch v-model="resultsLayer.active" label="Results" hide-details></v-switch>
            </v-flex>
            <v-flex xs2><v-icon>{{resultsLayer.icon}}</v-icon></v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="./layer-control.js"></script>

<style>
.bartext {
  text-align: justify;
  width: 100%;
  clear: left;
}

.bar {
  width: 100%;
  height: 10px;
}

.barspan {
  width: 100%;

  display: inline-block;
}

.information {
  /* TODO: remove span trick? */
  margin-top: -1rem;
  text-align: left;
}

.bar-wrapper {
  padding: 0 16px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.legend .list__tile {
  height: 200px;
}

/*  .select-items .input-group__details {
  display: none;
  }
  .select-items.input-group {
  padding-top: 0;
  }
  .select-items .input-group--text-field label {
   top: 0;
  }
  .select-items {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  }
*/
    </style>
