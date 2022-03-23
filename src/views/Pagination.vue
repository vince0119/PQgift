<template>
<h1></h1>
  <!-- <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li :class="{'disabled': n == this.pageOfItems}" v-for="(n, idx) in totalPage" :key="idx" class="page-item" >
        <a @click="changePage(n)" class="page-link" href="#">{{ n }}</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav> -->
</template>

<script>
export default {
  data() {},
  props: {
    totalPage: {
      type: Number,
    },
    pageOfItems: {
      type: Number,
    },
  },
  methods: {
    changePage(n) {
      this.$emit("update-page", n);
    },
  },
};
</script>
