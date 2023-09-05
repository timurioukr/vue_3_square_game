<script setup>
import { reactive, ref, computed } from 'vue'
// Data
const gridSize = reactive({
  SizeX: '',
  SizeY: ''
})
</script>

<template>
  <div class="width-500 text-center">
    <h1>GAME</h1>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field v-model.number="gridSize.SizeX" label="Size X" placeholder="Enter size X" type="number"
          solo></v-text-field>
        <v-text-field v-model.number="gridSize.SizeY" label="Size Y" placeholder="Enter size Y" type="number"
          solo></v-text-field>
      </v-col>
    </v-row>
  </div>

  <div class="square-grid">
    <div v-for="row in gridSize.SizeY" :key="row" class="grid-row">
      <div v-for="col in gridSize.SizeX" :key="col" class="square"></div>
    </div>
  </div>
</template>

<style>
.square-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #333;
  padding: 10px;
}

.grid-row {
  display: flex;
  gap: 2px;
}

.square {
  width: 36px;
  height: 36px;
  background-color: white;
}

.square:hover {
  background: blue;
  box-shadow: 0px 0px 82px 0px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 0px 82px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 0px 82px 0px rgba(255, 255, 255, 0.75);
}
</style>