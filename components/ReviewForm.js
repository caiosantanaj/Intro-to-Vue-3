app.component("review-form", {
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number='rating'>
      <!-- .number is a cast of the value to number -->
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <div class="input-check-area">
        <label for="isRecomended">Would you recommend this product?</label>
        <input class="input-check-button" type='checkbox' id="isRecomended" v-model="isRecomended">
      </div>

      <input class="button" type="submit" value="Submit">
    </form>  `,

  data() {
    return {
      name: "",
      review: "",
      rating: null,
      isRecomended: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Review is incomplite. Please fill out every field.");
        return;
      }

      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        isRecomended: this.isRecomended,
      };

      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.isRecomended = false;
    },
  },
});
