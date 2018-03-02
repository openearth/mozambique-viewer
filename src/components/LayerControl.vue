<template>
<div class="layer-control">
  <v-list-tile>
    <v-list-tile-title>
      Return period
    </v-list-tile-title>
    <v-list-tile-action>
      <v-radio-group v-model="returnPeriod" v-if="selectHazards=='Coastal Flood'">
        <v-layout>
          <v-radio v-for="n in [25, 100, 500]" :key="n" :label="` ${n}`" :value="n"></v-radio>
        </v-layout>
      </v-radio-group>
      <v-radio-group v-model="returnPeriod" v-if="selectHazards=='EarthQuake'">
        <v-layout>
          <v-radio v-for="n in [952, 3935, 8647]" :key="n" :label="` ${n}`" :value="n"></v-radio>
        </v-layout>
      </v-radio-group>
    </v-list-tile-action>
  </v-list-tile>

    <v-list dense pt-0 v-for="layer in layers" :key="layer.id" v-if="layer.content=='Exposure'">
      School Exposure
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-switch v-model="layer.active"></v-switch>
        </v-list-tile-action>
        <v-list-tile-title>{{layer.name}}</v-list-tile-title>
        <v-list-tile-action>
          <v-icon>{{layer.icon}}</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

  <v-list dense pt-0 v-for="layer in layers" :key="layer.id" v-if="layer.content=='Hazards'">
    Hazards
    <v-divider></v-divider>
    <v-list-tile>
      <v-list-tile-action>
        <v-switch v-model="layer.active"></v-switch>
      </v-list-tile-action>
      <v-list-tile-title>
        <select
          v-model="selectHazards"
          label="Select"
          item-text="name"
          item-value="name"
          light single-line auto>Select
          <option
            v-for="json_layer in layer.json_layers"
            :key="json_layer.id"
            :value="json_layer.name">
          {{ json_layer.name }}
        </option>
      </select>
    </v-list-tile-title>
      <v-list-tile-action>
        <v-icon>{{layer.icon}}</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <div class="bar-wrapper" v-if="selectHazards=='Coastal Flood'">
      <div :style="layer.css_CF" class='bar' v-if="layer.css_CF"></div>
      <div class='bartext'>{{layer.range_CF}} <span class='barspan'> </span> </div>
    </div>
    <div class="bar-wrapper" v-if="selectHazards=='EarthQuake'">
      <div :style="layer.css_EQ" class='bar' v-if="layer.css_EQ"></div>
      <div class='bartext'>{{layer.range_EQ}} <span class='barspan'> </span> </div>
    </div>
  </v-list>

  <v-list dense pt-0 v-for="layer in layers" :key="layer.id" v-if="layer.content=='Results'">
    Results
    <v-divider></v-divider>
    <v-list-tile>
      <v-list-tile-action>
        <v-switch v-model="layer.active"></v-switch>
      </v-list-tile-action>
      <v-list-tile-title>
        <select
          v-model="selectResults"
          label="Select"
          item-text="name"
          item-value="name"
          light single-line auto>Select
          <option
            v-for="json_layer in layer.json_layers"
            :key="json_layer.id"
            :value="json_layer.name">
          {{ json_layer.name }}
        </option>
      </select>
    </v-list-tile-title>
      <v-list-tile-action>
        <v-icon>{{layer.icon}}</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <div class="bar-wrapper">
      <div :style="layer.css" class='bar' v-if="layer.css"></div>
      <div class='bartext'>{{layer.range}} <span class='barspan'> </span> </div>
      <div class='information' v-html="layer.info">{{layer.info}} </div>
    </div>
  </v-list>
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
</style>
