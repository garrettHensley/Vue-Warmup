var app = new Vue({
  el: "#app",
  data: {
    product: {
      name: "Socks",
      description: "Warm fuzzy socks",
      image: "./assets/vmSocks-green.jpeg",
      inventory: 100,
      link: "http://google.com",
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
        },
        {
          variantId: 2235,
          variantColor: "blue",
        },
      ],
    },
  },
})
