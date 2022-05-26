<template >
  <div>
    <HeaderPage />
  </div>

  <router-view  />
  <!-- title ถูก props มาจาก footer  -->
  <!-- แล้วหรับค่า ของ props นั้นๆ แล้วส่งกลับไป {{ ค่า }} -->
  <FooterPage
    @onClock="onClock"
    title="copy right 2080 by J-Chan"
    color="gray"
  />
  <div>{{ time }}</div>
</template>
<script>
import HeaderPage from "@/components/layout/Header.vue";
import FooterPage from "@/components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      time: "",
    };
  },
  methods: {
    onClock(value) {
      this.time = value;
    },
  },
};
</script>
<style scoped></style>
