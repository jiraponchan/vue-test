<template>
  <div>
    <h1>Event and Method</h1>
    <button v-on:click="clickMe">Click Me</button>

    <input v-model="messages" type="text" placeholder="Enter Alert Message" />
    <span>{{ messages }}</span>
    <button @click="clickMe2(this.messages)">Click Me2</button>
   
    <button @click="clickMe3">Click Me3</button>

    <h3>{{getTimestame()}}</h3>

    
  </div>
</template>

<script>
export default {
  name: "PageNum2",
  data() {
    return {
      messages: "",
    };
  },
  mounted() {
      //! เป็นตัวกำหนดค่าทุกครั้งที่เริ่มหน้านี้ 
    this.initail()
  },
  methods: {
    clickMe() {
      alert("hola");
    },
    clickMe2(mes) {
        // ! เรียกใช้ตัวแปลที่อยู่ใน script ต้องใช้ this.
      alert(mes);
    },
    clickMe3(){
        alert(this.messages);
    },
    getTimestame(){
        return Date()
    },
    initail(){
        console.log('This Innitailsation')
    }
  },
};
</script>

<style></style>
