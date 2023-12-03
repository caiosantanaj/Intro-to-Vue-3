app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },

  template:
    /*html*/
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>`,

  computed: {
    test() {
      console.log(this.details);
    },
  },
});
