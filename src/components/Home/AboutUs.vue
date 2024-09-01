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
          <h2 class="subtitle is-4">Crafted With Love<br />For Your Space</h2>
          <p>
            Welcome to our boutique, where every piece of furniture is a labor
            of love, meticulously crafted to bring personality and warmth to
            your home. We believe in the beauty of simplicity and the power of
            unique design to transform a space. Our collections are carefully
            curated, blending timeless aesthetics with modern functionality.
            <br /><br />
            At our boutique, we embrace the spirit of independence, focusing on
            quality over quantity, and always staying true to our passion for
            creating beautiful, sustainable furniture that tells a story.
            Discover the perfect piece that resonates with your style and
            values.
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
          <h2 class="subtitle is-4">Small Batch,<br />Big Impact</h2>
          <p>
            We believe in making a big impact with a small footprint. Our
            furniture is produced in limited quantities, ensuring that each
            piece is special and responsibly made. We partner with local
            artisans who share our commitment to quality craftsmanship and
            sustainable practices.
            <br /><br />
            Whether you’re looking for a statement piece or something subtle,
            our boutique offers a range of designs that celebrate individuality
            and thoughtful design. Join us in creating spaces that are as unique
            as you are.
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
