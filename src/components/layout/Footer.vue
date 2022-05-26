<template>
  <div id="footer" class="footer">
      <!-- ส่งค่า props ออกไปให่ตัวอื่น -->
      <span :style="{color}">{{title}}</span>
      
  </div>
</template>

<script>
export default {
    name:"FooterPage",
    // กำหนด props เพื่อส่งออกไปเพื่อรับค่า
    props:[
        "title",
        "color"
    ],
    mounted() {
        setInterval(()=>{
            this.$emit("onClock",Date())
        },100)
    },
}
</script>

<style scoped>
.footer{
    margin-top:20px;
    border: 1px solid red;
    padding-top:5px;
}
</style>