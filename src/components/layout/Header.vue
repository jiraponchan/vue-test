<template>
  <div id="header" class=" flex items-center justify-center flex-wrap bg-zinc-300 p-5 shadow-xl">
    <ul class=" flex">
      <li class="mr-4 text-orange-400 py-3 "><router-link to="/">Home</router-link></li>
      <li class="mr-4 text-orange-400 py-3 "><router-link to="/Page1">หน้าที่ 1</router-link></li>
      <li class="mr-4 text-orange-400 py-3 "><router-link to="/Page2">หน้าที่ 2</router-link></li>
      <li class="mr-4 text-orange-400 py-3 "><router-link to="/Page3">หน้าที่ 3</router-link></li>
      <li class="mr-4 text-orange-400 py-3 "><router-link to="/Page4">หน้าที่ 4</router-link></li>
      <li class="mr-4 text-orange-400 py-3 "><router-link to="/Page5">หน้าที่ 5</router-link></li>
    </ul>
  </div>
 
  
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

