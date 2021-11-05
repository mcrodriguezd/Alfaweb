<!--cargas-->
<template>
  <div class="text-center">
   
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="purple"
        dark
      >
        <v-card-text>
          {{mensaje}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
props: {
    mensaje: String,
    dialog: Boolean
}
}
</script>

<style>

</style>