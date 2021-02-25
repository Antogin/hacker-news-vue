<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous" @click="previousPage">Previous</a>
    <a class="pagination-next" @click="nextPage">Next page</a>
    <ul class="pagination-list" v-if="pages.length > 0">
      <li v-for="page in pages" :key="page">
        <a
          class="pagination-link"
          :class="page === currentPage ? 'is-current' : null"
          @click="setPage(page)"
          >{{ page + 1 }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { nArray } from "./../utils/array";
export default {
  props: {
    currentPage: Number,
    total: Number,
    callback: Function
  },
  methods: {
    nextPage: function() {
      this.callback(this.currentPage + 1);
    },
    previousPage: function() {
      this.callback(this.currentPage - 1);
    },
    setPage: function(n) {
      this.callback(n);
    }
  },
  data() {
    return {
      fsdsfd: [1, 2, 3]
    };
  },
  computed: {
    pages: function() {
      return this.total ? nArray(this.total) : [];
    }
  }
};
</script>
