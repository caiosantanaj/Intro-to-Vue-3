app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  template:
    /* html */
    `
  <div  class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{review.name}} gave this {{review.rating}} stars {{displayRecomendedText(review.isRecomended)}}

        <br/>
        
        "{{review.review}}"
      </li>
    </ul>
  </div>
  `,

  methods: {
    displayRecomendedText(shouldDisplay) {
      if (shouldDisplay) {
        return "and recomends this product ✅";
      }
    },
  },
});
