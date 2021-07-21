<template>
  <div class="reviews-container unselectable">
     <template v-if="showModal">
      <ReviewModal @close-modal="closeModal" @user-review="submitReview">
        guests
      </ReviewModal>
    </template>
    <div id="review-details">
      <div id="review-left">
        <p class="section-title">
          Our visitors describe their experiences.
        </p>
        <p id="review-text">
          {{ filterDisplayData[0].review }}
        </p>
        <div id="reviewee-details">
          <span>
            {{ capitalizeEachWord(filterDisplayData[0].name) }}
          </span>
          <span id="reviewee-period">
            {{ capitalizeFirstLetter(filterDisplayData[0].period) }}
          </span>
        </div>
        <div id="cta-container">
          <div class="forward-back-navigation">
            <ArrowNavigation
            @newPage ="setNewPage"
            :pageNumber="page"
            :isLastPage="checkIfLastPage" />
          </div>
          <div class="contact-btn-container">
            <a @click.prevent="showReviewModal">Write Review</a>
          </div>
        </div>
      </div>
      <div id="review-right">
        <div id="img-container">
          <img src="@/assets/images/reviews/coffee_man.png"
            alt="coffee reviews" aria-hidden="true">
        </div>
        <div class="icon-container" id="highlight-1">
          <span class="icon" id="smile-icon">
            <fa icon="smile" />
          </span>
          <span class="icon-text">
            Great Service
          </span>
        </div>
        <div class="icon-container" id="highlight-2">
          <span class="icon" id="heart-icon">
            <fa icon="heart" />
          </span>
          <span class="icon-text">
            Beautiful
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewService from '@/services/review-service';
import ArrowNavigation from '@/components/shared/ArrowNavigation.vue';
import SlideNavigation from '@/mixins/slide-navigation';
import ReviewModal from '@/components/shared/ReviewModal.vue';
import FormatText from '@/mixins/format-text';
import { mapState } from 'vuex';

export default {
  name: 'OurReviews',
  data() {
    return {
      limit: 1,
      page: 1,
      showModal: false,
    };
  },
  components: {
    ArrowNavigation,
    ReviewModal,
  },
  mixins: [SlideNavigation, FormatText],
  methods: {
    setNewPage(page) {
      this.page = page;
    },
    showReviewModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    showWaitingAlert() {
      this.$swal({
        icon: 'info',
        title: 'Checking status',
        text: 'Checking if you stayed with us',
        showConfirmButton: false,
      });
    },
    showReviewAccepted() {
      this.$swal({
        icon: 'success',
        title: 'Review submitted',
        timer: 2000,
        showConfirmButton: false,
      });
    },
    showReviewRejected() {
      this.$swal({
        icon: 'error',
        title: 'Review rejected',
        text: 'Submitted user data does not match any record',
      });
    },
    submitReview(review) {
      this.closeModal();
      this.showWaitingAlert();
      ReviewService.postReview('visitor', review)
        .then((response) => {
          if (response.data.status === 'success') {
            this.$swal.close();
            this.showReviewAccepted();
          }
          if (response.data.status === 'rejected') {
            this.$swal.close();
            this.showReviewRejected();
          }
        });
    },
  },
  computed: {
    ...mapState({
      reviews: (state) => state.reviews.reviews,
    }),
    filterDisplayData() {
      const data = [...this.reviews];
      return this.filter(data);
    },
    checkIfLastPage() {
      const data = [...this.reviews];
      if (this.page * this.limit >= data.length) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.reviews-container{
  position:relative;
}
@media screen and (min-width:700px){
  .reviews-container{
    margin-top:110px;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
}
#review-details{
  display: flex;
  justify-content: space-between;
  width:70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
@media screen and (max-width:1024px){
  #review-details{
    width:85%;
  }
}
@media screen and (max-width:700px){
  #review-details{
    display: block;
    width:95%;
  }
}
#review-left{
  width:55%;
  position:relative;
  height:350px;
  min-height: 100%;
}
#review-right{
  width:42%;
  position:relative;
  height: 350px;
  min-height: 100%;
  background-color:var(--dark-green);
  display:flex;
  justify-content: center;
}
@media screen and (max-width:700px){
  #review-left{
    width:100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:110px;
  }
  #review-right{
    width:100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}
#img-container{
  z-index: 1;
  height:500px;
  min-height:100%;
  width:95%;
  margin-right: auto;
  margin-left: auto;
  position:absolute;
  bottom:0px;
}
@media screen and (max-width:700px){
  #img-container{
    height:400px;
  }
}
img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.icon-container{
  width:180px;
  height:40px;
  display:flex;
  align-items: center;
  background:white;
  position:absolute;
  z-index: 2;
}
.icon{
  min-width:40px;
  min-height: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size:20px;
  margin-left:5px;
}
.icon-text{
  padding-left:5px;
  font-weight: bold;
}
#smile-icon{
  color:#FCA705;
}
#heart-icon{
  color:#FC646C;
}
#highlight-1{
  top:14%;
  left:5%;
}
#highlight-2{
  bottom:14%;
  right:5%;
}
#review-text{
  line-height: 2;
  margin-top:15px;
}
#cta-container{
  position:absolute;
  bottom:0px;
  min-width:98%;
  display:flex;
  justify-content: space-between;
}
#reviewee-details span{
  display: block;
  margin-bottom: 5px;
}
#reviewee-period{
  color: #a9a9a9;
  font-weight: bold;
}

.forward-back-navigation{
  width:80px;
  display:flex;
  justify-content: space-between;
}
.contact-btn-container{
  height:35px;
  width:40%;
  max-width: 160px;
  border-radius: 3px;
  background-color: var(--dark-green);
}
@media screen and (max-width:700px){
  .contact-btn-container{
    width:160px;
  }
}
.contact-btn-container:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  background-color: var(--mono-dark-green);
}
.contact-btn-container a{
  text-decoration: none;
  color:white;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-btn-container a:hover{
  color:white;
}
</style>
