<template>
<v-app id="inspire">
  <v-navigation-drawer fixed app v-model="drawer">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Layers
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <layer-control :layers="layers" :map="map"></layer-control>
    <v-flex>
    </v-flex>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Safer schools viewer</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <div id="map">
      <v-mapbox :access-token="accessToken" map-style="mapbox://styles/mapbox/satellite-streets-v10" :center="[34.85752836605343, -19.830506337137294]" :zoom="10" :pitch="60" :bearing="-132"
        :min-zoom="5" id="map" ref="map">
        <v-results-layers :access-token="accessToken"></v-results-layers>
        <v-exposure-layers :access-token="accessToken"></v-exposure-layers>
        <v-hazards :access-token="accessToken"></v-hazards>
      </v-mapbox>
    </div>
    <div id="popupinfo">
      <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.data }}</td>
        </template>
      </v-data-table>
    </div>

  </v-content>
  <v-footer theme="white" app>
    <span class="indigo--text ml-2">&copy; 2017</span>
    <v-spacer></v-spacer>
    <img class="logos mr-2" src="static/images/consultec.png">
    <img class="logos mr-2" src="static/images/Deltares.png">
    <img class="logos mr-2" src="static/images/GFDRR.png">
    <img class="logos mr-2" src="static/images/WorldBank.png">

  </v-footer>
</v-app>
</template>

<script src="./app.js"></script>

<style >
@import 'mapbox-gl/dist/mapbox-gl.css';
@import 'material-design-icons/iconfont/material-icons.css';
@import "vue-material-design-icons/styles.css" #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* text-align: center; */
}

#map {
  height: 100%;
  width: 100%;
}

.logos {
  max-width: 100%;
  max-height: 100%;
}

/* .hidden {
  display: none;
} */
</style>
