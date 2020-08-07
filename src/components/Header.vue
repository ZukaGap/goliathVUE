<template>
  <div class="header">
    <form class="search">
      <button class="search__BTN">
        <SearchSVG />
      </button>
      <input type="text" class="search__Text" placeholder="Search Music &amp; Add" />
    </form>
    <form class="login">
      <input class="login__BTN" type="button" value="Login" />
      <div class="dropdown">
        <button class="login__BTN-more">
          <DotsVSVG />
        </button>
        <div class="dropdown__content">
          <input class="Sign_Up-BTN" type="button" value="Sign Up" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SearchSVG from "./svgs/SearchSVG.vue";
import DotsVSVG from "./svgs/dotsVSVG.vue";

export default {
  name: "Header",
  components: {
    SearchSVG,
    DotsVSVG,
  },
};
</script>

<style lang="scss" scoped>
$focuscolor: #660d7a;
$textcolor: #eeeeee;
$boxshadow: -5px 0px 4px rgba(102, 13, 122, 0.5),
  5px 0px 4px rgba(102, 13, 122, 0.5), 0px -5px 4px rgba(102, 13, 122, 0.25),
  0px 5px 4px rgba(102, 13, 122, 0.25);

.search {
  margin: 0 0 0 90px;
  padding: 0 10px;
  width: 700px;
  height: 55px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  &__BTN {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &__Text {
    height: 40px;
    width: 100%;
    border-radius: 0 10px 10px 0;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0 15px;
    color: $textcolor;
    font-size: 20px;
  }

  &__Text::placeholder {
    opacity: 1;
    color: $textcolor;
  }

  &:focus-within {
    background-color: $focuscolor;
    border-radius: 10px;
    box-shadow: $boxshadow;
  }
}

.login {
  margin: 0 80px 0 0;
  height: 35px;
  display: flex;
  &__BTN {
    font-size: 18px;
    font-weight: 900;
    color: $textcolor;
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0;
    padding: 5px;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      background-color: $focuscolor;
      box-shadow: $boxshadow;
    }

    &-more {
      margin: 0 5px;
      padding: 5px;
    }
  }
}

.dropdown {
  position: relative;
  display: inline-block;

  &__content {
    display: none;
    position: absolute;
    background-color: transparent;
    z-index: 1;
  }

  &:hover &__content {
    display: block;
  }
}

.Sign_Up-BTN {
  font-size: 18px;
  font-weight: 900;
  padding: 5px;
  height: 35px;
  color: $textcolor;
  background-color: transparent;
  border: 2px solid $focuscolor;
  border-radius: 6px;
  &:hover {
    background-color: $focuscolor;
    box-shadow: $boxshadow;
    cursor: pointer;
    outline: none;
  }
}
</style>
