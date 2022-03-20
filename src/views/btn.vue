<template>
  <button :class="btnColor">
    <slot></slot>
    <img v-if="cartIcon">
  </button>
</template>

<script>
export default {
  props: ['btnColor', 'cartIcon'],

}
</script>

<style>

</style>