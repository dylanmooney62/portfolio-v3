module.exports = {
  purge: [],
  theme: {
    extend: {
      maxWidth: {
        "2/3": "66%",
      },
      minHeight: {
        "950": "950px",
      },
      colors: {
        "saffron-orange": "#ff8a00",
        "flame-red": "#FF0610",
        "tufts-blue": "#009AED",
        "sky-blue": "#00CCEB",
      },
      height: {
        "screen-90": "90vh",
      },
      inset: {
        "1/2": "50%",
      },
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
