<template>
  <div class="modal-overlay">
    <div class="content">
      <div class="content-header">
        <span class="slot">
          Only registered <slot></slot> can review.
        </span>
        <span class="close-btn">
          <a @click.prevent="closeModal">&times;</a>
        </span>
      </div>
      <form @submit.prevent="submitReview">
        <div class="input-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            v-model="name"
          />
        </div>
        <div class="input-container">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            v-model="email"

          />
        </div>
        <div class="input-container">
          <textarea
            rows="8"
            placeholder="Write review"
            name="review"
            v-model="review"
            maxlength="400"
            @input="checkInputLength"
          ></textarea>
           <span class="text-limits">{{ textlimit }} / 400</span>
        </div>
        <div class="submit-container">
          <button class="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewModal',
  data() {
    return {
      textlimit: 0,
      name: '',
      email: '',
      review: '',
    };
  },
  methods: {
    checkInputLength(event) {
      this.textlimit = event.target.value.length;
    },
    closeModal() {
      this.$emit('close-modal');
    },
    createReviewObject() {
      return {
        name: this.name,
        email: this.email,
        review: this.review,
        createdAt: new Date(),
      };
    },
    submitReview() {
      const review = this.createReviewObject();
      this.$emit('user-review', review);
    },
  },
};
</script>

<style scoped>
.modal-overlay{
  background-color: rgba(0, 0, 0, 0.4);
  width:100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content{
  width:50%;
  background-color: rgb(250, 250, 250);
}
@media screen and (max-width: 480px){
  .content{
    width: 90%;
  }
}
@media screen and (min-width: 1280px) {
  .content {
    width: 40%;
  }
}
.content-header{
  background-color: #ececec;
  height:50px;
  display: flex;
  align-items: center;
  position: relative;
}
.slot {
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  width:70%;
  margin-left: auto;
  margin-right: auto;
}
.close-btn{
  display: inline-block;
  font-size: 25px;
  position: absolute;
  right: 15px;
}
.close-btn:hover{
  cursor: pointer;
  color:red;
}
.text-limits{
  font-size: 13px;
  font-weight: bold;
  color: #a9a9a9;
  display: block;
}
.input-container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

@media screen and (max-width: 500px) {
  .input-container {
    width: 100%;
  }
}
input[type="text"],
input[type="email"] {
  width: 100%;
  font-size: 16px;
  height: 35px;
  border: none;
  padding-left: 20px;
  background-color: rgba(100, 100, 100, 0.2);
}

input[type="text"]:focus,
input[type="email"]:focus {
  background-color: rgb(254, 254, 254);
  z-index: 1;
  box-shadow: 4px 4px 5px rgb(80, 80, 80);
  outline: 0.5px solid rgb(35, 199, 188);
}
textarea {
  width: 100%;
  font-size: 15px;
  padding-left: 10px;
}
textarea:focus {
  background-color: rgb(254, 254, 254);
  z-index: 1;
  box-shadow: 4px 4px 5px rgb(80, 80, 80);
  outline: 0.5px solid rgb(35, 199, 188);
}

@media (max-width: 600px) {
  textarea {
    height: 130px;
  }
}
.submit-container {
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
}

.submit {
  height: 35px;
  width: 70%;
  font-size: 18px;
  color: white;
  border: none;
  background-color: var(--dark-green);
}
.submit:hover {
  transform: scale(0.95);
  box-shadow: 2px 2px 4px rgb(100, 100, 100);
}
</style>
