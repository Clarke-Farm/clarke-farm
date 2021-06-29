<template>
  <div class="row">
      <!-- side navigation -->
  <SideNav @mouseover="togglesidebar"
      @mouseout="togglesidebar" id="sidebar"/>
    <div class="col-md-9 right-container">
      <!-- top nav bar -->
      <div class="topnav fixed">
        <fa icon="user-cog" class="icon" />
        <router-link to="/admin"><a class="icon signout"><fa icon="sign-out-alt"  />
        </a></router-link>
      </div>
      <div>
        <SubNav/>
      </div>
    <Content id="maincontent"/>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/dashboard/SideNavigation.vue';
import SubNav from '@/components/dashboard/settings/SettingsContent.vue';
import Content from '@/components/dashboard/settings/SettingsTableTraining.vue';

export default {
  name: 'TrainingProgram',
  data() {
    return {
    };
  },

  components: {
    SideNav,
    SubNav,
    Content,
  },
};
</script>

<style scoped>
.content{
  margin-top: 50px;
  transform: translate(2%,0);
  transition:transform 1s linear;
}
.right-container{
  margin-left: 100px;
  margin-top: 20px;
}
.icon{
  float: right;
  font-size: 20px;
  color: #068d68;
}
.signout{
  margin-right:20px;
}

</style>
