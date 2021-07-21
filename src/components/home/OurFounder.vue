<template>
  <!-- eslint-disable max-len -->
  <div class="our-founder">
    <div class="our-founder-heading">
      <p class="section-title">Our Founder</p>
    </div>
    <div class="container-founder-description">
      <div class="container-left">
        <figure>
            <div class="founder-video img-fluid">
              <iframe class="embed-responsive-item img-fluid"
              src="https://www.youtube.com/embed/NC3kg2Q3fqo" allowfullscreen></iframe>
            </div>
          <figcaption>
            <em class>Dr. Ian Clarke's profile</em>
          </figcaption>
        </figure>
      </div>
      <div class="container-right">
        <p class="sub-text">
          Dr. Ian Clarke came to Uganda 33 years ago
          with his wife Robbie and their three children, Sean, Michael and Lauren.
        </p>
        <p class="sub-text">
          Since then he has been on a journey of investing in people and communities
          in Uganda, first in Luweero shortly after the civil war (1982 – 1986) where
          he founded a church hospital, Kiwoko Hospital, which still stands to this day
          providing community and curative services at very low cost. It has one of the best
          neonatal intensive care units in Uganda.
        </p>
        <p class="sub-text">
          Later Ian and Robbie moved to Kampala where he set up International Hospital
          and International Medical Centres. Subsequently he founded Clarke International
          University, while his son Sean founded Clarke Junior School. These projects were
          for development in the health and education sector. More recently he invested in
          agriculture in Clarke Farm. The agricultural sector in Uganda supports 80% of the
          population, so if one can bring improvements in this sector it has a significant effect
          on household incomes of a large segment of the population.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurFounder',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.our-founder {
  width: 100%;
  position: relative;
}
@media screen and (max-width:700px){
  .our-founder{
    padding-left: 20px;
  }
}
.our-founder-heading p{
  text-align: center;
}
.container-founder-description{
  margin-top:40px;
}
.container-left{
  width:95%;
}
@media screen and (min-width:700px){
  .container-founder-description{
    display: flex;
    width:85%;
    margin-left: auto;
    margin-right: auto;
  }
  .container-left{
    width:40%;
  }
  .container-right{
    width:60%;
    padding-left: 20px;
  }
}
@media screen and (min-width:1024px){
  .container-founder-description{
    width:70%;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  font-family: Playfair;
  margin-top: 0;
  padding: 0;
}

.sub-text{
  line-height: 1.6;
}
iframe{
 height:380px;
 width:100%;
}
figcaption{
  margin-top: 20px;
  text-align: center;
}
</style>
