<template>
  <div>
    <h1>Im a Page 5</h1>
    <p>form</p>
    <form v-on:submid="submid">
      <!-- first name -->
      <div>
        <lebel for="first_Name">first Name : </lebel>
        <input
          type="text"
          name="first_Name"
          v-model.trim="applicant.first_Name"
        />
        <!-- ใส่ modifyer ที่ชื่อ trim ให้กับ v-model เพื่อกันผู้ใช้ใส่ space bar เข้ามา มันจะไม่เอามาด้วย -->
      </div>

      <!-- last name -->
      <div>
        <lebel for="last_Name">lastt Name : </lebel>
        <input
          type="text"
          name="last_Name"
          v-model.lazy="applicant.last_Name"
        />
        <!-- การใส่ lazy ใ้ห้กับ v-model เพื่อ เวลาที่พิมพ์ มันจะไม่ขึ้นทันที นอกจากคลิกออกจากช่องกรอก มันถึงจะส่งค่า -->
      </div>
      <!-- Age -->
      <div>
        <lebel for="age">Age : </lebel>
        <input type="number" name="age" v-model.number="applicant.age" />
        <!-- การใส่ v-model.number เพื่อ แปลงตัว v-model ให้เป็น int ก่อนส่งค่า -->
      </div>
      <!-- Sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="sex">FeMale</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <!-- courses-->
      <div>
        <select name="courses" v-model="applicant.courses">
          <option value="react">React</option>
          <option value="javaScript">Java Script</option>
          <option value="vue">Vue</option>
        </select>
      </div>

      <button type="button" @click="clear">Clear</button>
      <button type="submid" @click="submid">Submit</button>
      <div style="margin-top: 10px; color: red">
        #Spy {{ JSON.stringify(applicant) }}
      </div>
    </form>
    <Todo />
  </div>
</template>

<script>
// import TodoPage from '@/components/layout/Todo.vue'
import Todo from "@/components/layout/Todo.vue";

export default {
  name: "PageNum5",
  components: { Todo },
  data() {
    return {
      applicant: {
        first_Name: "",
        last_Name: "",
        age: 0,
        sex: "male",
        courses: "react",
      },
    };
  },
  methods: {
    submid(event) {
      //! ใส่ event.preventDefault(); กับ submid(event) เพื่อไม่ให้ reset url or ต่างๆ
      event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_Name: "",
        last_Name: "",
        sex: "male",
        age: 0,
        courses: "react",
      };
    },
  },
};
</script>

<style></style>
