<template>
  <div id="visit-registration-form">
    <div class="description">
      <p class="section-title">Register</p>
      <p class="sub-text">
        For corporate and tourist packages, register using this form. For training
        programs, find out more <a href="/training-programs">here</a>.
      </p>
    </div>
    <div class="registration-container">
      <div id="registration-image">
        <img src="@/assets/images/forestwalk.jpg" alt="welcome" aria-hidden="true">
      </div>
      <div id="form-container">
        <p id="description">
          We promise to contact you within 24 hours.
        </p>
        <form action="">
          <div class="input-container">
            <input type="text" name="name" placeholder="Name">
          </div>
          <div class="input-container">
            <input type="email" placeholder="Email Address" name="email">
          </div>
          <div class="input-container">
            <input type="text" placeholder="Telephone" name="telephone">
          </div>
          <div class="input-container">
            <div id="checkin-container">
              <div id="checkin">
                <input type="text" name="checkin" placeholder="Check-in"
                onfocus='(this.type="date")'>
              </div>
              <div id="checkout">
                <input type="text" name="checkout" placeholder="Check-out"
                onfocus='(this.type="date")'>
              </div>
            </div>
          </div>
          <div class="input-container">
            <input type="text" name="guestNumber" placeholder="Number of travelers">
          </div>
          <div class="input-container">
            <fieldset name="topics">
              <legend>Select accomodation type</legend>
              <div class="checkbox-list">
                <div class="checkbox-pair">
                  <span>
                    <input type="radio" name="accomodation" value="none" checked> None
                  </span>
                  <span>
                    <input type="radio" name="accomodation" value="tent"> Camp Tent
                  </span>
                </div>
                <div class="checkbox-pair">
                  <span>
                    <input type="radio" name="accomodation" value="cottage"> Cottage
                  </span>
                  <span>
                    <input type="radio" name="accomodation" value="container"> Cliff House
                  </span>
                </div>
                <div class="checkbox-pair">
                  <span>
                    <input type="radio" name="accomodation" value="hilltop"> Hilltop House
                  </span>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="input-container">
            <textarea placeholder="Questions or special requests" name="requests"></textarea>
          </div>
          <div class="submit-container">
            <button class="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingForm',
};
</script>

<style scoped>
#visit-registration-form{
  position:relative;
  margin-top:120px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:990px){
  .sub-text{
    width:100%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
    padding-left: 10px;
  }
}

.registration-container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(200, 200, 200);
}
@media (max-width: 960px) {
  .registration-container {
    width: 95%;
    margin-left:auto;
    margin-right: auto;
  }
}
#registration-image {
  width: 40%;
}
@media screen and (max-width:700px){
  #registration-image{
    display:none;
  }
}
#registration-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#form-container {
  width: 60%;
  padding-top: 20px;
}
@media screen and (max-width:700px){
  #form-container{
    min-width:80%;
    margin-left: auto;
    margin-right: auto;
  }
}
#description{
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.input-container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

@media screen and (max-width:700px){
  .input-container{
    width:100%;
  }
}
#checkin-container{
  display:flex;
  justify-content: space-between;
}
#checkin{
  width:45%;
}
#checkout{
  width:45%;
}

input[type="text"],
input[type="date"],
input[type="email"] {
  width: 100%;
  font-size: 16px;
  height: 35px;
  border: none;
  padding-left: 20px;
  background-color: rgba(100, 100, 100, 0.2);
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="date"] {
  background-color: rgb(254, 254, 254);
  z-index: 1;
  box-shadow: 4px 4px 5px rgb(80, 80, 80);
  outline: 0.5px solid rgb(35, 199, 188);
}
input[type="checkbox"] {
  margin-right: 5px;
}

textarea {
  width: 100%;
  font-size: 15px;
  /* border: none; */
  height: 200px;
  padding-left: 10px;
  /* background-color: rgb(245, 245, 245); */
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
fieldset {
  border: none;
}
legend{
  font-size:16px;
  margin-bottom: 15px;
}
.checkbox-list{
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.checkbox-pair span{
  display:block;
  margin-bottom: 15px;
}
.submit-container {
  margin-top: 25px;
  margin-bottom:50px;
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
