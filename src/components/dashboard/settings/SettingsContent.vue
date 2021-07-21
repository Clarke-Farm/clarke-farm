<template>
<!-- eslint-disable max-len -->
    <div class="main-container mt-0">
<div class="bg-white mt-3 py-3">
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 py-2">
                             <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Settings</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
       <div class="tab-menu  mt-5 nav-justified">
       <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button" role="tab" aria-controls="home" aria-selected="true">Activities</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="accommodation-tab" data-bs-toggle="tab" data-bs-target="#accommodation" type="button" role="tab" aria-controls="profile" aria-selected="false">Accommodation</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="food-tab" data-bs-toggle="tab" data-bs-target="#food" type="button" role="tab" aria-controls="contact" aria-selected="false">Food</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="training-tab" data-bs-toggle="tab" data-bs-target="#training" type="button" role="tab" aria-controls="contact" aria-selected="false">Training Programs</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="activity" role="tabpanel" aria-labelledby="activity-tab">
    <ActivitiesTbl/>
  </div>
  <div class="tab-pane fade" id="accommodation" role="tabpanel" aria-labelledby="accommodation-tab">
    <AccommadtionTbl/>
  </div>
  <div class="tab-pane fade" id="food" role="tabpanel" aria-labelledby="food-tab">
    <FoodTbl/>
  </div>
   <div class="tab-pane fade" id="training" role="tabpanel" aria-labelledby="training-tab">
    <TrainingTbl/>
  </div>
</div>
     </div>
    </div>
</template>
<script>
import ActivitiesTbl from '@/components/dashboard/settings/SettingsTableActivities.vue';
import AccommadtionTbl from '@/components/dashboard/settings/SettingsTableAccommodation.vue';
import FoodTbl from '@/components/dashboard/settings/SettingsTableFood.vue';
import TrainingTbl from '@/components/dashboard/settings/SettingsTableTraining.vue';

export default {
  components: {
    ActivitiesTbl,
    AccommadtionTbl,
    FoodTbl,
    TrainingTbl,
  },

};
</script>
<style scoped>

.nav-tabs .nav-item .nav-link {
  background-color: #fff;
   color: #068D68;
}

.nav-tabs .nav-item .nav-link.active {
  color: #6c757d;
  /* background-color:  #068d68; */
  border-bottom: 3px solid  #068D68;

}
a{
    text-decoration: none;
    color: #068d68;
}
#breadcrumb-1{
  margin-top:5%;
}

.main-container{
  width:79%;
}

</style>
