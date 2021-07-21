<template>
  <div class="arrow-navigation">
    <div class="forward-back-navigation">
      <span class="nav-button" @click="prevPage" v-if="pageNumber !== 1">
        <fa icon="angle-left" />
      </span>
      <span class="nav-button" @click="nextPage" v-if="!isLastPage">
        <fa icon="angle-right" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrowNavigation',
  props: {
    pageNumber: {
      type: Number,
      required: true,
      validator: (value) => Number.isInteger(value),
    },
    isLastPage: {
      type: Boolean,
      required: true,
      validator: (value) => typeof value === 'boolean',
    },
  },
  methods: {
    nextPage() {
      const page = this.pageNumber + 1;
      this.$emit('newPage', page);
    },
    prevPage() {
      const page = this.pageNumber - 1;
      this.$emit('newPage', page);
    },
  },
};
</script>

<style scoped>
.arrow-navigation{
  height: 35px;
}
.forward-back-navigation{
  width:80px;
  display:flex;
  justify-content: space-between;
}
.nav-button{
  width:32px;
  height: 35px;
  font-size: 20px;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mono-dark-green);
}
.nav-button:hover{
  cursor:pointer;
}
.active{
  background-color: var(--mono-dark-green);
}
.disabled{
  background-color: rgba(200,200,200,0.7);
}
</style>
