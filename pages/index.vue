<template>
  <div>
    <digitalAgency />
  </div>
</template>

<script>
import digitalAgency from "../pages/home";

export default {
  name: "idi_jakarta_pusat",
  layout: "Preview",
  components: {
    digitalAgency,
  },
  head() {
    return {
      titleTemplate: "%s - Preview",
    };
  },
  mounted() {
    if (document.querySelectorAll("body").length > 1) {
      document.body.remove();
    }

    document.body.classList.add("index-main");
  },
};
</script>
