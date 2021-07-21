<template>
  <div class="side-navigation ">
    <div class="white-container ">
      <div class="company-details">
        <div class="company-logo">
          <fa icon="mug-hot" />
        </div>
        <div class="company-name">
          Clarke Farm
        </div>
      </div>
      <div class="navigation-container">
        <router-link :to="{ name: 'Dashboard' }" class="navigation-item">
          <span class="item-icon" id="home-icon">
            <fa icon="home" />
          </span>
          <span class="navigation-title">
            Home
          </span>
        </router-link>
        <router-link :to="{ name: 'AdminBooking' }" class="navigation-item">
          <span class="item-icon" id="booking-icon">
            <fa icon="bell" />
          </span>
          <span class="navigation-title">
            Booking
          </span>
        </router-link>
        <router-link :to="{ name: 'CoffeeOrders' }" class="navigation-item">
          <span class="item-icon" id="orders-icon">
            <fa icon="cart-arrow-down" />
          </span>
          <span class="navigation-title">
            Orders
          </span>
        </router-link>
        <router-link :to="{ name: 'Reviews' }" class="navigation-item">
          <span class="item-icon" id="reviews-icon">
            <fa icon="comments" />
          </span>
          <span class="navigation-title">
            User reviews
          </span>
        </router-link>
        <router-link :to="{ name: 'Settings' }" class="navigation-item">
          <span class="item-icon" id="settings-icon">
            <fa icon="cogs" />
          </span>
          <span class="navigation-title">
            Settings
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
};
</script>

<style scoped>
.side-navigation{
  max-width:230px;
  min-width: 230px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.white-container{
  background-color: white;
  min-width: 90%;
  min-height: 98%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}
.company-details{
  margin-top:10px;
}
.company-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}
.company-name{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
.navigation-container{
  min-height:60vh;
  margin-top:10%;
}
.navigation-item{
  width:85%;
  height: 38px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.item-icon{
  min-height: 100%;
  margin-left: 15px;
  margin-right: 12px;
  display: flex;
  align-items: center;
}
#home-icon{
  color:#2BAEAA;
}
#booking-icon{
  color:#04548C;
}
#reviews-icon{
  color:#FCA705;
}
#orders-icon{
  color: #068d68;
}
#settings-icon{
  color:#FC646C;
}
.navigation-title{
  color: var(--blue-ink);
  /* font-weight: bold; */
  font-size: 14px;
  min-height: 100%;
  display: flex;
  align-items: center;
}
.router-link-active{
  border:none;
  background-color: var(--dark-green);
  border-radius: 5px;
}
.router-link-active > #home-icon{
  color:white;
}
.router-link-active > #booking-icon{
  color:white;
}
.router-link-active > #reviews-icon{
  color:white;
}
.router-link-active > #orders-icon{
  color:white;
}
.router-link-active > #settings-icon{
  color:white;
}
.router-link-active > .navigation-title{
  color:white;
}
</style>
