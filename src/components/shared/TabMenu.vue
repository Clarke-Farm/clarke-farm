<template>
  <div class="navigation">
    <span
      v-for="(tab,index) in tabsList"
      :key="index"
      :class="['tab', selectedTab==tab?'active':'inactive']"
      @click="onTabSelected">{{ tab }}</span>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  created() {
    this.$emit('selected', this.selectedTab);
  },
  props: {
    tabsList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTab: this.tabsList[0],
    };
  },
  methods: {
    onTabSelected(event) {
      this.selectedTab = event.target.textContent;
      this.$emit('selected', this.selectedTab);
    },
  },
};
</script>

<style scoped>
.navigation{
  margin-left: auto;
  margin-right: auto;
  max-height:30px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding:0;
}
@media screen and (max-width:730px){
  .navigation {
    padding-left: 10px;
    justify-content: start;
  }
  .navigation ::-webkit-scrollbar{
    width:0px;
  }
}
.tab{
  min-width:150px;
  height:30px;
  margin-right: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:white;
}
.tab:hover{
  background-color: var(--dark-green);
}
.active{
  background-color: var(--dark-green);
}
.inactive{
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
