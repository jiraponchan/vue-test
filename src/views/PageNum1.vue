<template>
  <div class="Page1 flex flex-wrap items-center justify-center">
    <div class=" block m-5">
    <h1 class=" text-3xl text-white">Im Page 1</h1>
    <div class=" bg-rose-700 text-cyan-300 flex justify-center" >
      <h1 class="m-3">{{ count1 }}</h1>
      <button @click="onClickAdd1" class="m-3 border-2 px-3">Add</button>
      <button @click="onClickSub1" class="m-3 border-2 px-3">Sub</button>
    </div>

    <p class=" text-xl text-white">*</p>
    <div class=" bg-rose-700 text-cyan-300 flex justify-center">
      <h1 class="m-3">{{ count2 }}</h1>
      <button @click="onClickAdd2" class="m-3 border-2 px-3">Add</button>
      <button @click="onClickSub2" class="m-3 border-2 px-3">Sub</button>
    </div>
    <h1>Result = {{sum}}</h1>
    <button @click="onClickMultiply">Multiply</button>
    <button @click="onClickReset">Reset</button>

    <p> เรียกใช้ใน click++/click-- โดยตรง @click</p>
    <h3>{{click}}</h3>
    <button @click=click++>Click to Add +1</button>
    <button @click="click--">Click to Add -1</button>

    <div>
      <h1>สูตรคณิต</h1>
      <p>Number 1 = {{areaformula[0].k}}</p>
      <p>Number 2 = {{areaformula[0].y}}</p>
      <p>ใส่พื้นที่ 1 = <input type="text" placeholder="Enter number" v-model="areaformula[0].k"></p>
      <p>ใส่พื้นที่ 2 = <input type="text" placeholder="Enter number" v-model="areaformula[0].y"></p>
      <button @click="sumArea">Submid</button>
      <h2>ผลลัพธ์ = {{sumaraer}}</h2>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNum1",
  data() {
    return {
      count1: 0,
      count2: 0,
      num: 0,
      sum:'',
      click:0,
      sumaraer:0,
      areaformula:[
        {
          k:'',
          y:''
        }
      ]

    };
  },
  methods: {
    onClickSub1(){
        this.count1 = this.count1 - 1;
    },
    onClickSub2(){
        this.count2 = this.count2 - 1;
    },


    onClickAdd1() {
      this.count1 = this.count1 + 1;
    },
    onClickAdd2() {
      this.count2 = this.count2 + 1;
    },
    onClickMultiply(){
        this.sum = this.count1*this.count2
    },
    onClickReset(){
        this.count1 = 0
        this.count2 = 0
        this.sum = 0
    },
    sumArea(){
      this.sumaraer = this.areaformula[0].k*this.areaformula[0].y
    }
  },
};
</script>


