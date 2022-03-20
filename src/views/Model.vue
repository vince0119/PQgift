<template>
  <div>
    <transition name="fade">
      <div class="modal" v-show="showModal">
        <h3>Details</h3>
        <slot></slot>
        <btn btnColor="btn btn-small btn-danger" @click="closeModal()">
          Close
        </btn>
      </div>
    </transition>
    <transition name="fade">
      <maskBg v-show="showModal" @click="closeModal()"/>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>