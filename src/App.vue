<template>
  <div id="App">
    <Nav />
    <Header />
    <Main />
    <Player />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Player from "./components/Player.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Nav,
    Header,
    Player,
    Main,
  },
};
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #eeeeee;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  outline: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #393e46;
  margin: 0;
  padding: 0;
}

.header {
  width: calc(100% - 400px);
  height: 100px;
  background-color: transparent;
  float: right;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav {
  width: 400px;
  height: 100vh;
  border: none;
  border-right: 2px solid #eeeeee;
  background-color: transparent;
  float: left;
  position: relative;
  box-sizing: border-box;
  outline: none;
}
</style>
