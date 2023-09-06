<script setup>
import { reactive, ref } from 'vue'
// Data
const gridSize = reactive({
  SizeX: '',
  SizeY: ''
})
const squares = ref([])
// Methods
const initializeSquares = () => {
  squares.value = Array.from({ length: gridSize.SizeY }, () => Array(gridSize.SizeX).fill(true))
}

const removeSquare = (row, col) => {
  squares.value[row - 1][col - 1] = false
  if (squares.value.every(row => row.every(value => value === false))) clearForm()
}

const clearForm = () => {
  gridSize.SizeY = ''
  gridSize.SizeX = ''
  squares.value = []
}
</script>

<template>
  <div class="game-params_wrapper radius-12">
    <div class="d-flex justify-center">
      <div class="width-500 text-center transition">
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
    </div>
    <div v-if="squares?.length" class="square-grid transition">
      <div v-for="(row, rowIndex) in gridSize.SizeY" :key="row" class="grid-row_wrapper">
        <div v-for="(col, colIndex) in gridSize.SizeX" :key="col" @click="removeSquare(row, col)">
          <div v-if="squares[rowIndex][colIndex]" class="square"></div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-end mt-5">
      <v-btn @click="clearForm" variant="outlined" color="deep-purple mr-3" class="btn-custom">Clear</v-btn>
      <v-btn @click="initializeSquares" color="deep-purple" class="btn-custom">Create</v-btn>
    </div>
  </div>
</template>