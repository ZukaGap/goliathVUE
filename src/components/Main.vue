<template>
  <div class="maincontent">
    <MainItem
      name="Men I Trust Lauren"
      number="1"
      img="https://i.ytimg.com/vi/ugRc5jx80yg/hqdefault.jpg"
      time="3:42"
      donwload="http://we.ge/mus.mp3"
      active="true"
    />
    <MainItem
      name="Men I Trust Lauren"
      number="2"
      img="https://i.ytimg.com/vi/ugRc5jx80yg/hqdefault.jpg"
      time="4:11"
      donwload="http://we.ge/mus.mp3"
    />
  </div>
</template>

<script>
import MainItem from "./MainItem.vue";
export default {
  components: {
    MainItem,
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
