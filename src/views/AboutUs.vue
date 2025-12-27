<template>
  <span class="about">
    <h2>About RouteScout</h2>
    <h3>RouteScout</h3>
    <p>RouteScout is a web application that helps users discover interesting places along a planned route. Users can input a starting point and a destination, and the app displays a dynamic map with the route and various points of interest (POIs) such as museums, cafes, flea markets, landmarks, and more. Users can filter the types of places they want to see, save favorites, and view detailed information about each location.</p>
    <p>RouteScout lets users keep their saved points of interest visible while navigating, unlike standard map apps where custom markers disappear once navigation starts. This makes it easy to plan and explore stops along the route, offering a more personalized and flexible roadtrip experience.</p>
    <p>We’re working constantly on adding more places and categories of places.</p>

    <h3>Our mission</h3>
    <p>We believe road trips and everyday journeys should be more than just getting from A to B. RouteScout was built to make exploring along the way easy and fun. </p>

    <h3>Account</h3>
    <p>To use features like saving and custom maps, you need an account.</p>
    <p>Your data is private and only visible to you. We don’t share your saved routes with others.</p>

    <h3>Privacy & Security</h3>
    <p>At RouteScout, your privacy comes first. All your saved routes and favorite places are stored securely and are only visible to you. We never sell or share your data with third parties, and we use encryption to protect your information at every step. You stay in control of what you save and how you use it.</p>

    <h3>Contact us</h3>
    <p>If you have any question don’t hesitate to contact us. </p>

    <a href="mailto:angelica.nylander@hotmail.com" class="contact-button">Contact us here<span class="material-symbols-outlined">arrow_forward</span></a>
  </span>
</template>

<style scoped lang="scss">
.about {
  background-color: $color-primary-light;
  padding: 20px 50px;

  @media (min-width: 768px) {
    padding: 20px 30px;
  }

  @media (min-width: 1024px) {
    padding: 20px 50px;
  }
}

h2 {
  font-family: $font-family-top;
  font-size: $font-size-lg;
  font-weight: $font-weight-regular;
  text-align: center;

  @media (min-width: 768px) {
    font-size: $font-size-xl;
  }
}

h3 {
  font-family: $font-family-top;
  font-size: $font-size-sm;
  font-weight: $font-weight-regular;
  margin-bottom: 0;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: $font-size-md;
  }
}

p {
  font-family:$font-family-base;
  font-size: $font-size-sm;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: $font-size-md;
  }
}

.contact-button {
  display: inline-flex;          
  align-items: center;
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: bold;
  background-color: $color-primary-light;
  color: $color-text-dark;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;    
  
  @media (min-width: 768px) {
    font-size: $font-size-md;
  }
}

.material-symbols-outlined {
  padding-left: 10px;
}

</style>