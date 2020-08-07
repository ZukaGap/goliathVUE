<template>
  <div class="player">
    <div class="player-controls">
      <button>
        <LeftPSVG />
      </button>
      <button>
        <PlaySVG />
      </button>
      <button>
        <RightPSVG />
      </button>
      <button>
        <VolumeSVG />
      </button>
      <div class="player-controls-RepeatRandom">
        <button>
          <RepeatSVG />
        </button>
        <button>
          <ShufleSVG />
        </button>
      </div>
    </div>
    <img src="{IMG}" alt="music img" class="player__IMG" />
    <p class="player__musicName">Men I Trust Lauren</p>
    <div class="time">
      <span id="current-time">2:11</span>
      <div class="orange-bar">
        <div class="orange-juice"></div>
      </div>
      <span id="full-time">3:10</span>
    </div>
  </div>
</template>

<script>
import LeftPSVG from "./svgs/leftPSVG.vue";
import RightPSVG from "./svgs/rightPSVG.vue";
import PlaySVG from "./svgs/playSVG.vue";
import VolumeSVG from "./svgs/volumeSVG.vue";
import RepeatSVG from "./svgs/repeatSVG.vue";
import ShufleSVG from "./svgs/randomSVG.vue";
export default {
  name: "Player",
  components: {
    LeftPSVG,
    RightPSVG,
    PlaySVG,
    VolumeSVG,
    RepeatSVG,
    ShufleSVG,
  },
};
</script>

<style lang="scss" scoped>
$focuscolor: #660d7a;
$textcolor: #eeeeee;
$boxshadow: -5px 0px 4px rgba(102, 13, 122, 0.5),
  5px 0px 4px rgba(102, 13, 122, 0.5), 0px -5px 4px rgba(102, 13, 122, 0.25),
  0px 5px 4px rgba(102, 13, 122, 0.25);

.player {
  width: 100%;
  height: 100px;
  background-color: #222831;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  bottom: 0;

  &-controls {
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    & button {
      border: transparent;
      background-color: transparent;
      outline: none;

      &:hover svg path {
        fill: $focuscolor;
      }
    }

    &-RepeatRandom {
      display: flex;
      flex-direction: column;

      & button {
        margin: 10px 0;
      }
    }
  }

  &__IMG {
    width: 60px;
    height: 70px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
  }

  &__musicName {
    font-size: 20px;
    width: auto;
    height: 30px;
    max-width: 250px;
    text-align: center;
    overflow: hidden;
    overflow-y: hidden;
  }

  & .time {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    & #current-time,
    & #full-time {
      font-size: 18px;
    }

    & .orange {
      &-bar {
        height: 10px;
        width: 700px;
        border: transparent;
        border-radius: 10px;
        height: 10px;
        background-color: $textcolor;
        margin: 0 30px;
      }
      &-juice {
        height: 10px;
        width: 550px;
        border: transparent;
        border-radius: 10px;
        background-color: $focuscolor;
      }
    }
  }
}
</style>
