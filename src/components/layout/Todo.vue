<template>
  <div class="min-h-screen flex items-center bg-orange-800">
    <div class=" max-w-screen-xl mx-auto border-2">
      <form class="block  text-center p-4">
        <div class="border-2 text-slate-900 p-8">
          <h1 class="text-7xl">To Do Lists</h1>
          <div class="border-2 p-3 mx-3">
            <label for="" class="px-4 border-2 text-xl text-red-50"
              >วัน เวลา :
            </label>
            <input
              type="date"
              name="date"
              v-model="Todo.date"
              id=""
              class="mx-4 border-2 rounded-lg"
            />
            <input
              type="time"
              name="time"
              v-model="Todo.time" placeholder="99:99"
              id=""
              class="rounded-lg"
            />
          </div>
          <div class="grid text-xl text-red-1">
            <label for="todo" class="">สิงที่ต้องทำ : </label>
            <input type="text" v-model="Todo.todo" class="w-1/5 mx-auto h-14" />
            <label for="note">หมายเหตุ : </label>
            <input type="text" v-model="Todo.note" class="w-1/5 mx-auto h-14" />
            <button
              @click="submid"
              class="text-3xl border-2 rounded-md w-1/4 mx-auto my-5 p-2"
            >
              เพิ่มสิ่งที่ต้องทำ
            </button>
          </div>
          <h1>{{ TodoLists[0].date }}</h1>
          <h1>{{ TodoLists[0].time }}</h1>
          <h1>{{ TodoLists[0].todo }}</h1>
          <h1>{{ TodoLists[0].note }}</h1>
          <br />
          <!-- <h1>{{ Todo.date }}</h1>
          <h1>{{ Todo.time }}</h1>
          <h1>{{ Todo.todo }}</h1>
          <h1>{{ Todo.note }}</h1> -->
        </div>
      </form>
      <div class="flex-1 max-w-4xl p-10 bg-rose-800">
        <ul class="grid grid-cols-3 grid-rows-2 gap-6 text-slate-700">
          <li 
            v-for=" (item, index) in TodoLists"
            :key="index"
            class="bg-slate-800 shadow-2xl rounded-xl"
            
          >
            <div  class="text-center">
              <div class="bg-slate-200 m-2 rounded-md">
                <div>{{ TodoLists[index].time }}</div>
                <div>{{ TodoLists[index].date }}</div>
              </div>

              <div class="bg-slate-200 m-2 rounded-md">
                {{ TodoLists[index].todo }}
              </div>
              <div class="bg-slate-200 m-2 rounded-md">
                {{ TodoLists[index].note }}
              </div>
              <button @click="removeTodo(index)">X</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoPage",
  data() {
    return {
      
      TodoLists: [
        {
          date: "1/2/2539",
        time: "12:23",
        todo: "ทำงาน",
        note: "หาปลา",
        },
        // {
        //   date: "1/2/2539",
        // time: "12:23",
        // todo: "ทำงาน",
        // note: "หาปลา",
        // },
      ],
      Todo: {
        date: "",
        time: "",
        todo: "",
        note: "",
      },
    };
  },
  methods: {
    submid(event) {
      event.preventDefault();
      // this.TodoLists = this.Todo.push()

      this.TodoLists.push(this.Todo);
      this.Todo = {
        date: "",
        time: "",
        todo: "",
        note: "",
      };
    },
    removeTodo(index) {
      this.TodoLists.splice(index, 1);
    },
  },
};
</script>

<style></style>
