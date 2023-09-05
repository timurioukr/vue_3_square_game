<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 ">
        <div class="col-sm-10 col-sm-offset-1  text-center">
          <div>
            <h1 class="text-center">404</h1>
          </div>

          <div class="contant_box_404">
            <h3 class="h2">
              Look like you're lost
            </h3>

            <p>The page you are looking for not avaible!</p>
            <v-btn class="mt-5" variant="outlined" @click="$router.push('/')">
              Go to Home
            </v-btn>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>