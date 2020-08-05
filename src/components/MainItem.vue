<template>
  <div class="active">
    <!-- <div class={props.active ? "item active" : "item"}> -->
    <div class="item__left">
      <button>
        <HeartLogo />
      </button>
      <!-- <img class="item__IMG" src="{props.img}" /> -->
      <!-- <span>{props.number}</span>
      <span>{props.name}</span> -->
    </div>
    <div class="item__right">
      <!-- <span>{props.time}</span> -->
      <div class="dropdown">
        <button class="dropdown__more">
          <DotsLogo />
        </button>
        <div class="dropdown__content">
          <a
            class="donwloadBTN"
            type="button"
            href="./dots.svg"
            download="musicname.mp3"
          >
            Donwload
          </a>
          <input class="reportBTN" type="button" value="Report" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotsLogo from "../../public/dots_h.svg";
import HeartLogo from "../../public/heart.svg";
export default {
  name: "active",
  components: {
    DotsLogo,
    HeartLogo,
  },
};
</script>

<style lang="scss" scoped>
$focuscolor: #660d7a;
$textcolor: #eeeeee;
$boxshadow: -5px 0px 4px rgba(102, 13, 122, 0.5),
  5px 0px 4px rgba(102, 13, 122, 0.5), 0px -5px 4px rgba(102, 13, 122, 0.25),
  0px 5px 4px rgba(102, 13, 122, 0.25);

.item {
  height: 55px;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  float: left;
  margin: 10px auto;
  border-radius: 6px;
  background-color: transparent;
  border: 2px solid $focuscolor;
  cursor: pointer;

  &__IMG {
    width: 35px;
    height: 40px;
    border-radius: 4px;
    margin: 0 20px;
  }

  & span {
    font-size: 18px;
    color: $textcolor;
    margin: 0 10px;
    font-size: 18px;
    font-weight: 600;
  }

  &__left {
    margin: 0 0 0 20px;
    display: flex;
    align-items: center;
  }

  &__left:first-child button:hover svg {
    fill: $textcolor;
    cursor: pointer;
  }

  &__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 30px;

    & span {
      margin: 0 20px;
    }
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

.dropdown {
  position: relative;
  display: inline-block;

  &__content {
    display: none;
    position: absolute;
    border-radius: 6px;
    background-color: $focuscolor;
    z-index: 1;

    & .donwloadBTN,
    & .reportBTN {
      padding: 5px;
      font-weight: 600;
      text-decoration: none;
    }
  }

  &:hover &__content {
    display: block;
  }
}
</style>
