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
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Safer schools viewer</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <div id="map">
      <v-mapbox
      access-token="pk.eyJ1IjoiY2FtdmR2cmllcyIsImEiOiJjajA4NXdpNmswMDB2MzNzMjk4dGM2cnhzIn0.lIwd8N7wf0hx7mq-kjTcbQ"
      map-style="mapbox://styles/mapbox/satellite-streets-v10" :center="[34.85752836605343, -19.830506337137294]" :zoom="10" :pitch="60" :bearing="-132"
        :min-zoom="5" id="map" ref="map">
        <v-results-layers></v-results-layers>
        <v-exposure-layers></v-exposure-layers>
        <v-hazards></v-hazards>


      </v-mapbox>

    </div>
    <div id="popupinfo">
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.data }}</td>
        </template>
      </v-data-table>
    </div>

  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2017</span>
  </v-footer>
</v-app>
</template>

<script src="./app.js"></script>

<style >
@import 'mapbox-gl/dist/mapbox-gl.css';
@import 'material-design-icons/iconfont/material-icons.css';
@import "vue-material-design-icons/styles.css"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* text-align: center; */
}

#map {
  height: 100vh;
  width: 100vw;
}

/* .hidden {
  display: none;
} */

</style>
