<template>
  <div>
      <h1>Im a Page 4</h1>
      <br>
      <p>การใช้ v-bind</p>
      <p>ใส่ลิ้งค์โดยตรงไม่ได้ ต้องใช้เป็นตัวแปล</p>
      <img v-bind:src="scrPic" style=" width:250px; height:150px; "><br>
      <img v-bind:src="scrPic2" :width="widthPic"><br>
      <a v-bind:href="imgUrl" target="_blank">a tag</a><br>
      <a :href="song" target="_blank">song</a>
      <div :class="Red_class">กูสีแดงว๊อยยยย Bind Class แหละ</div>
      <div :class="[Red_class,impotan]">กูสีแดงว๊อยยยย Bind Class 2 ตัวด้วย array แหละ</div>
      <div :style="isActive ? styleObj : '' ">bind obj style</div>
      <button @click="isActive = !isActive">toggle Active</button>

  </div>
</template>

<script>
export default {
name:'PageNum4',
data() {
    return {
        imgUrl:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        scrPic:'https://images.unsplash.com/photo-1597198399495-ff26429c4ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        scrPic2:'https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        song:'https://www.youtube.com/watch?v=cbuZfY2S2UQ&ab_channel=yanu_'
        ,widthPic:250,
        Red_class:'div_red',
        impotan:'impotan',
        isActive:false,
        styleObj:{
            backgroundColor:'yellow',
            color:'green'
        }
    }
},
}
</script>

<style>
.div_red{
    background-color: red;
    color:white;
}
.impotan{
    font-size: 20px;
}
</style>