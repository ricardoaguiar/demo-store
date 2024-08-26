<template>
  <section class="about-us">
    <div class="about-us-row">
      <!-- Title section -->
      <h1 class="title is-3">About Us</h1>

      <!-- First row: Image on the left, text on the right with slight overlap -->
      <div class="about-us-content">
        <div class="image-container">
          <img
            src="@/assets/img/new.jpg"
            alt="home-img"
            title="home-img"
            class="about-us-img"
            loading="lazy"
          />
        </div>
        <div class="about-us-text">
          <h2 class="subtitle is-4">New minimalist<br />–components</h2>
          <p>
            Gravity will force your feet to the ground. Don’t be afraid, your
            mind will find your freedom. You won’t miss a sunrise. You’ll rise
            with the sun. <br />You’ll never run away from the storm. You will
            flow with the wind. <br />Don’t hesitate to pause. Follow the flow
            of the moment. And then, take the first step towards the new you.
          </p>
        </div>
      </div>

      <!-- Second row: Image on the right, text on the left with slight overlap -->
      <div class="about-us-content row-reverse">
        <div class="image-container">
          <img
            src="@/assets/img/33.jpg"
            alt="home-img-2"
            title="home-img-2"
            class="about-us-img"
            loading="lazy"
          />
        </div>
        <div class="about-us-text">
          <h2 class="subtitle is-4">Save Space<br />more freedom</h2>
          <p>
            Gravity will force your feet to the ground. Don’t be afraid, your
            mind will find your freedom. You won’t miss a sunrise. You’ll rise
            with the sun. You’ll never run away from the storm. You will flow
            with the wind. Don’t hesitate to pause. Follow the flow of the
            moment. And then, take the first step towards the new you.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 2rem;

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .about-us-row {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .about-us-content {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .row-reverse {
    flex-direction: row-reverse;
  }

  .image-container {
    width: 50%;
    position: relative;
  }

  .about-us-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .about-us-text {
    width: 55%; /* Occupies 55% of the row */
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: -5%; /* Overlaps the image by 5% */
    z-index: 1;
  }

  .row-reverse .about-us-text {
    margin-left: 0;
    margin-right: -5%; /* Overlaps the image by 5% when reversed */
  }

  p {
    margin-top: 1rem;
    line-height: 1.6;
  }

  /* Increase font size for larger viewports */
  @media screen and (min-width: 1440px) {
    .about-us-text h2 {
      font-size: 2rem; /* Adjust font size for larger screens */
    }

    .about-us-text p {
      font-size: 1.25rem; /* Adjust paragraph font size for larger screens */
    }
  }

  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    .about-us-content {
      flex-direction: column;
    }

    .row-reverse {
      flex-direction: column;

      .about-us-text {
        margin-left: 0;
        margin-right: 0;
      }
    }

    .image-container,
    .about-us-text {
      width: 100%;
      margin: 0; /* Remove negative margins on mobile */
    }

    .about-us-text {
      padding: 1rem;
      box-shadow: none;
      background-color: transparent;
    }
  }
}
</style>
