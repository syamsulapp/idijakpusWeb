<template>
  <div>
    <div v-html="detailContent.article_body"></div>
  </div>
</template>

<script>
export default {
  props: ["rtl", "styleType", "detailContent"],
};
</script>
