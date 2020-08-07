<template>
  <div class="nav">
    <button class="nav-BTN active">Explore</button>
    <button class="nav-BTN">Favourite</button>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style lang="scss" scoped>
$focuscolor: #660d7a;
$textcolor: #eeeeee;
$boxshadow: -5px 0px 4px rgba(102, 13, 122, 0.5),
  5px 0px 4px rgba(102, 13, 122, 0.5), 0px -5px 4px rgba(102, 13, 122, 0.25),
  0px 5px 4px rgba(102, 13, 122, 0.25);

.nav {
  display: flex;
  flex-direction: column;

  &-BTN {
    margin: 20px 0 0 60px;
    width: 300px;
    height: 50px;
    font-weight: 600;
    margin: 10px auto;
    padding: 0;
    border: 2px solid $focuscolor;
    border-radius: 10px;
    background-color: transparent;
    font-size: 18px;
    color: $textcolor;

    &:first-child {
      margin: 100px auto 10px;
    }

    &:hover {
      background-color: $focuscolor;
      box-shadow: $boxshadow;
    }

    &.active {
      background-color: $focuscolor;
      box-shadow: $boxshadow;
    }
  }
}
</style>
