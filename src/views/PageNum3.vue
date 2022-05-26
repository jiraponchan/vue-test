<template>
  <div class="page2">
    <div>
      <h1>Im Page 3</h1>
      <h2>Data</h2>
      <span>{{ count }}</span> <br />
      <button @click="count++">Click +1</button>
      <div>{{ message }}</div>

      <input type="text" placeholder="Enter your text" v-model="text" />
      <h3>{{ text }}</h3>
      <p>v-model จะเอาทุกอย่างที่พิมพ์ใส่ไปในตัวแปล message</p>
      <p>เรียนรู้เรื่อง condition เพิ่มเติม</p>
      <div>{{ isLogged }}</div>
      <button @click="isLogged = true">show someting that hidding</button>
      <button @click="isLogged = false">Hidding</button>

      <h2 v-if="isLogged">Im hidding</h2>
    </div>
    <div></div>
    <div>
      {{ account.userName }}
      {{ account.password }}
    </div>
    <div>
      {{ courses }}
      {{ courses[1] }}
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in courses" :key="index">
          {{ index + 1 }} {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in cars" :key="index">
          ชื่อ รถ :{{ item.nameCar }} <br />
          ปี :{{ item.year }} <br />
          ทรง :{{ item.model }} <br />
        </li>
      </ul>
    </div>
    <dir>
      {{animal}}
    </dir>
  </div>
</template>

<script>



export default {
  name: "PageNum3",
  mounted() {
    this.message = "im from mounted";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      text: "..",
      account: {
        userName: "Jirapon",
        password: "456",
      },
      courses: ["HTML", "CSS", "JavaScript", "REACT", "VUE"],
      cars:[
       {
         nameCar:'Benz',
         year:'1996',
         model:'Spost'
       } ,
       {
         nameCar:'Handa',
         year:'1967',
         model:'Mini'
       }
      ],
  };
  },
  methods: {
  },
};
</script>

<style>
.page2 {
  display: block;
}
</style>
