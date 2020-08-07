<template>
  <div class="maincontent">
    <MainItem
      v-for="(todo, index) in todos"
      :key="index"
      :name="todo.name"
      :number="todo.number"
      :img="todo.img"
      :time="todo.time"
      :donwload="todo.donwload"
    />
  </div>
</template>

<script>
import MainItem from "./MainItem.vue";
export default {
  name: "Main",
  components: {
    MainItem,
  },
  data() {
    return {
      todos: [
        {
          name: "Men I Trust Lauren",
          number: 1,
          img: "https://i.ytimg.com/vi/ugRc5jx80yg/hqdefault.jpg",
          time: "3:42",
          donwload: "http://we.ge/mus.mp3",
        },
        {
          name: "Men I Trust Lauren",
          number: 2,
          img: "https://i.ytimg.com/vi/ugRc5jx80yg/hqdefault.jpg",
          time: "4:11",
          donwload: "http://we.ge/mus.mp3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.maincontent {
  width: calc(100% - 400px);
  height: 750px;
  background-color: transparent;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
