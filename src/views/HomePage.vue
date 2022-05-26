<template>
  <div class="home">
    <h1
      class="Home bg-sky-700 w-60 h-60 mt-4 flex justify-center text-teal-400 items-center"
    >
      Im Home page
    </h1>
    <p>Tailwind</p>
    <div class="min-h-screan flex items-center bg-slate-400 text-slate-700">
      <div class="flex-1 max-w-4xl mx-auto p-10 text-slate-700">
        <ul class="grid grid-cols-3 grid-rows-3 gap-6 text-slate-700">
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
          <li class="bg-sky-400 shadow-xl rounded-xl">
            <div class="h-24">
              <div class="bg-slate-200 m-3 rounded-md">Hi~~~</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <h1>รับค่า สร้าง grid</h1>
    <div class=" bg-teal-500 ">
    <div><h1>Hii</h1></div>
    </div>
    <div class="min-h-screan flex items-center bg-slate-400">
      <div class="flex-1 max-w-4xl mx-auto p-10 bg-sky-300">
        <ul class="grid grid-cols-3 grid-rows-2 gap-6 text-slate-700">
          <li
            class="bg-sky-400 shadow-xl rounded-xl"
            v-for="(item, index) in carType"
            :key="index.id"
          >
            <div class="h-24" >
              <div class="bg-slate-200 m-2 rounded-md">{{ item.name }}</div>
              <div class="bg-slate-200 m-2 rounded-md">{{ item.year }}</div>
              <div class="bg-slate-200 m-2 rounded-md">{{ item.color }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      carType: [
        {
          name: "Honda",
          year: "1986",
          color: "Red",
          id: 1,
        },
        {
          name: "Yamaha",
          year: "1996",
          color: "White",
          id: 2,
        },
        {
          name: "Scoopy",
          year: "2018",
          color: "Green",
          id: 3,
        },
        {
          name: "Benz",
          year: "1997",
          color: "Blue",
          id: 4,
        },
        {
          name: "Honda",
          year: "1986",
          color: "Red",
          id:5,
        },
        {
          name: "Marzda",
          year: "1897",
          color: "Blue",
          id:6,
        },
        {
          name: "BMW",
          year: "1986",
          color: "Red",
          id:7,
        },
        {
          name:'Jirapon',
          year: '1996',
          color:'Pink'
        }
      ],
    };
  },
};
</script>
