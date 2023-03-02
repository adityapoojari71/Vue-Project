<template>
    <div>
      <nav>
        <ul>
          <li v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
            <a @click.prevent="changePage(page)" href="#">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      perPage: {
        type: Number,
        default: 10,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      totalPages() {
        return Math.ceil(this.items.length / this.perPage);
      },
      displayedItems() {
        console.log(this.items)
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        console.log(start + '' + end)
        return this.items.slice(start, end);
      },
      pages() {
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
        return pages;
      },
    },
    methods: {
      changePage(page) {
        this.$emit('page-changed', page);
      },
    },
  };
  </script>
  