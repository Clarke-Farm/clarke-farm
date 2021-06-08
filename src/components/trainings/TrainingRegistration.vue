<template>
  <div id="training-registration-form">
    <div class="description">
      <p class="section-title">Register</p>
      <div class="linedesign"></div>
    </div>
    <div class="registration-container">
      <div id="registration-image">
        <img src="@/assets/images/registration.jpg" alt="welcome" aria-hidden="true">
      </div>
      <div id="form-container">
        <p id="description">Register with us</p>
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
            <input type="text" name="guestNumber" placeholder="Group size">
          </div>
          <div class="input-container">
            <input type="text" name="date" placeholder="Visitation date"
            onfocus='(this.type="date")'>
          </div>
          <div class="input-container">
            <fieldset name="topics">
              <legend>Select topics of interest</legend>
              <div class="checkbox-list">
                <div class="checkbox-pair">
                  <span>
                    <input type="checkbox" name="topics" value="coffee"> Coffee
                  </span>
                  <span>
                    <input type="checkbox" name="topics" value="matooke"> Matooke
                  </span>
                </div>
                <div class="checkbox-pair">
                  <span>
                    <input type="checkbox" name="topics" value="chicken"> Chicken
                  </span>
                  <span>
                    <input type="checkbox" name="topics" value="others"> Others
                  </span>
                </div>
                <div class="checkbox-pair">
                  <span>
                    <input type="checkbox" name="topics" value="irish"> Irish
                  </span>
                </div>
                <div class="checkbox-pair">
                  <span>
                    <input type="checkbox" name="topics" value="maize"> Maize
                  </span>
                </div>
              </div>
            </fieldset>
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
  name: 'TrainingRegistration',
};
</script>

<style scoped>
#training-registration-form{
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
.description p{
  margin-top:15px;
}
.linedesign {
  width: 30%;
  height: 25px;
  position:absolute;
  top:0;
  right: 0;
  background-color: #068d68;
}
@media screen and (max-width:700px){
  .linedesign{
    width:25%;
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
  border: none;
  height: 200px;
  padding-left: 10px;
  background-color: rgb(245, 245, 245);
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
