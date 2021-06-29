<template>
<!-- eslint-disable max-len -->
<div class="row container-xl">
    <div class="col-4">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{rewiewee1.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{rewiewee1.title}}</h6>
            <hr>
            <p class="card-text">{{rewiewee1.reviewMsg}}</p>
            <hr>
            <div class="rating">
             <span><fa icon="star"/> </span>
              <span ><fa icon="star"/></span>
              <span><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
            </div>
             <p class="review-date text-right position-absolute bottom-0 end-0">{{rewiewee1.date}}</p>
        </div>
      </div>
    </div>
        <div class="col-4">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
                <h5 class="card-title">{{rewiewee1.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{rewiewee1.title}}</h6>
            <hr>
            <p class="card-text">{{rewiewee1.reviewMsg}}</p>
            <hr>
            <div class="rating">
             <span><fa icon="star"/> </span>
              <span ><fa icon="star"/></span>
              <span><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
            </div>
            <p class="review-date  position-absolute bottom-0 end-0">{{rewiewee1.date}}</p>
        </div>
      </div>
    </div>
        <div class="col-4">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{rewiewee1.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{rewiewee1.title}}</h6>
            <hr>
            <p class="card-text">{{rewiewee1.reviewMsg}}</p>
            <hr>
            <div class="rating">
             <span><fa icon="star"/> </span>
              <span ><fa icon="star"/></span>
              <span><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
            </div>
            <p class="review-date text-right position-absolute bottom-0 end-0">{{rewiewee1.date}}</p>
        </div>
      </div>
    </div>
</div>
<div class="row container-xl collapse show" id="collapse-row-3" v-show="collapse">
         <div class="col-4">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{rewiewee1.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{rewiewee1.title}}</h6>
            <hr>
            <p class="card-text">{{rewiewee1.reviewMsg}}</p>
            <hr>
            <div class="rating">
             <span><fa icon="star"/> </span>
              <span ><fa icon="star"/></span>
              <span><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
            </div>
            <p class="review-date position-absolute bottom-0 end-0">{{rewiewee1.date}}</p>
        </div>
      </div>
    </div>
         <div class="col-4">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{rewiewee1.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{rewiewee1.title}}</h6>
            <hr>
            <p class="card-text">{{rewiewee1.reviewMsg}}</p>
            <hr>
            <div class="rating">
             <span><fa icon="star"/> </span>
              <span ><fa icon="star"/></span>
              <span><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
            </div>
            <p class="review-date position-absolute bottom-0 end-0">{{rewiewee1.date}}</p>
        </div>
      </div>
    </div>
         <div class="col-4">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{rewiewee1.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{rewiewee1.title}}</h6>
            <hr>
            <p class="card-text">{{rewiewee1.reviewMsg}}</p>
            <hr>
            <div class="rating">
             <span><fa icon="star"/> </span>
              <span ><fa icon="star"/></span>
              <span><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
              <span ><fa icon="star"/></span>
            </div>
            <p class="review-date text-right position-absolute bottom-0 end-0">{{rewiewee1.date}}</p>
        </div>
      </div>
    </div>
</div>
     <div class="row justify-content-center">
              <a
                class="btn btn-primary text-center"
                @click="collapse = !collapse"
                href="#collapse-row-3"
                role="button"
                aria-expanded="false"
                aria-controls="collapse-row-3"
                >view more</a
              >
            </div>
</template>
<script>
export default {
  data() {
    return {
      rewiewee1: {
        name: 'Mercy Wamanga',
        title: 'Awesome Place!!!!!',
        reviewMsg: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        date: '19-May-2020',
      },
      collapse: false,
    };
  },

};
</script>
<style scoped>
.row{
  width: 900px;
   /* margin-top: 100px; */
}
.review-date{
    text-align: right;
    font-size: 12px;
    margin-right:5%;
}
.btn {
  width: 157px;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  background-color: #068d68;
  border: #068d68;
}

.btn:hover{
  background-color: #068d68;
}
.col-4{
  background-origin: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:25px;
}
.rating {
    display: flex;
    max-width: 40%;
    flex-direction: row-reverse;
    justify-content: right;
    margin-right:40%;
    font-size: 12px;
}
/* div{
  border:1px solid green;
} */

span{
  color:green;
}
</style>
