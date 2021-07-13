<template>
  <div class="header-container">
    <!-- header left -->
    <div class="header-left">
      <div class="header-select">
        <div class="header-select-text">
          Công ty tnhh sản xuất-thương mại-dịch vụ qui phúc
        </div>
        <div class="header-logo logo-dropdown logo-dropdown-l"></div>
      </div>
    </div>
    <!-- end header left -->
    <!-- header-right -->
    <div class="header-right">
      
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div class="header-logo logo-bell" v-bind="attrs" v-on="on"></div>
          </template>
          <span>Thông báo</span>
        </v-tooltip>
      <div class="heaser-user">

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div class="avatar-icon" v-bind="attrs" v-on="on">
              <img src="../../assets/img/default-avatar.jpg" alt="avatar" />
            </div>
          </template>
          <span>Ảnh đại diện</span>
        </v-tooltip>
        <span class="name-user" v-tooltip.top-center="msg"
          >Nguyễn Giản Dương</span
        >
        <template>
          <div class="text-center d-flex align-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="header-logo logo-dropdown logo-dropdown-m"
                  dark
                  v-bind="attrs"
                  v-on="on"
                ></div>
              </template>
              <span>Thêm</span>
            </v-tooltip>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
}

.header-select {
  display: flex;
  align-items: center;
}
.header-select-text {
  text-transform: uppercase;
  font-size: 14px;
  color: #111;
  font-family: "notosans-bold";
}

.header-logo {
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
  cursor: pointer;
}
.header-select {
  cursor: pointer;
}
.toogle-logo {
  background-position: -843px -30px;
}
.logo-bell {
  background-position: -787px -30px;
}
.logo-dropdown {
  margin-left: 8px;
}
.logo-dropdown-l {
  background-position: -75px -356px;
  transform: rotate(90deg);
}
/* header right */
.header-right {
  display: flex;
  align-items: center;
}
.header-right .logo-dropdown-m {
  background-position: -1076px -28px;
}
.heaser-user {
  display: flex;
  padding: 0 16px;
  cursor: pointer;
  align-items: center;
}
.name-user {
  color: #111;
  font-weight: 600;
}
.avatar-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e8e8e9;
  overflow: hidden;
  margin: 0 8px;
}
.avatar-icon img {
  width: 100%;
}
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
