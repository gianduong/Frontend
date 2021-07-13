<template>
  <div class="navbar">
    <div class="navbar-container">
      <!-- nav logo -->
      <div class="navbar-logo">
        <a href="#" class="menu-logo">
          <div class="home-logo"></div>
        </a>
        <div class="logo">
          <a href="#">
            <img
              src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <!-- end nav logo -->
      <!-- nav list -->
      <div class="nav-list-container">
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-dasboard"></div>
                </div>
                <span>Tổng quan</span></a
              >
            </template>
            <span>Tổng quan</span>
          </v-tooltip>
        </div>

        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-cash"></div>
                </div>
                <span>Tiền mặt</span></a
              >
            </template>
            <span>Tiền mặt</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-bank"></div>
                </div>
                <span>Tiền gửi</span></a
              >
            </template>
            <span>Tiền gửi</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-pu"></div>
                </div>
                <span>Mua hàng</span></a
              >
            </template>
            <span>Mua hàng</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-sale"></div>
                </div>
                <span>Bán hàng</span></a
              >
            </template>
            <span>Bán hàng</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-invoice"></div>
                </div>
                <span>Quản lý hóa đơn</span></a
              >
            </template>
            <span>Quản lý hóa đơn</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-stock"></div>
                </div>
                <span>Kho</span></a
              >
            </template>
            <span>Kho</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-tools"></div>
                </div>
                <span>Công cụ dụng cụ</span></a
              >
            </template>
            <span>Công cụ dụng cụ</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-assets"></div>
                </div>
                <span>Tài sản cố định</span></a
              >
            </template>
            <span>Tài sản cố định</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-tax"></div>
                </div>
                <span>Thuế</span></a
              >
            </template>
            <span>Thuế</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-price"></div>
                </div>
                <span>Giá thành</span></a
              >
            </template>
            <span>Giá thành</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-general"></div>
                </div>
                <span>Tổng hợp</span></a
              >
            </template>
            <span>Tổng hợp</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-budget"></div>
                </div>
                <span>Ngân sách</span></a
              >
            </template>
            <span>Ngân sách</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-report"></div>
                </div>
                <span>Báo cáo</span></a
              >
            </template>
            <span>Báo cáo</span>
          </v-tooltip>
        </div>
        <div class="nav-item">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a href="#" class="nav-item-link" v-bind="attrs" v-on="on"
                ><div class="nav-logo-container">
                  <div class="nav-logo logo-finance"></div>
                </div>
                <span>Phân tích tài chính</span></a
              >
            </template>
            <span>Phân tích tài chính</span>
          </v-tooltip>
        </div>
      </div>
      <!-- end nav list -->
    </div>
  </div>
</template>

<script>
// import ada from "../../assets/img"
export default {};
</script>

<style lang="scss" scoped>
/** định nghĩa một số phương thức cơ bản */
@mixin WidthHeight($w, $h) {
  width: $w;
  height: $h;
}
@mixin Display {
  display: flex;
  align-items: center;
}

/**----------------------------------- */

.navbar-logo {
  @include Display;
  justify-content: center;
  height: 48px;
}
.logo {
  @include WidthHeight(96px, 32px);
  img {
    @include WidthHeight(100%, 100%);
  }
  .menu-logo {
    @include WidthHeight(24px, 24px);
    margin-right: 10px;
  }
}
.nav-list-container {
  padding-top: 14px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}
.nav-item {
  height: 42px;
  @include Display;
}
.nav-item-link {
  @include WidthHeight(100%, 42px);
  @include Display;
  text-decoration: none;
  color: #fff;
  padding: 0 14px;
  &:hover {
    background: #616164;
  }
}
/* nav logo */
.nav-logo-container {
  width: 24px;
  background-size: contain;
  margin-right: 8px;
}
::-webkit-scrollbar {
  width: 6px;
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #d4d7dc;
}
::-webkit-scrollbar-thumb:hover {
  background: #616164;
}
/* logo */
.home-logo {
  @include WidthHeight(24px, 24px);
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -424px -86px;
  margin-right: 10px;
}
.nav-logo {
  @include WidthHeight(24px, 24px);
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
}
.logo-dasboard {
  background-position: -30px -1628px;
}
.logo-cash {
  background-position: -73px -1628px;
}
.logo-bank {
  background-position: -117px -1628px;
}
.logo-pu {
  background-position: -161px -1628px;
}
.logo-sale {
  background-position: -204px -1628px;
}
.logo-invoice {
  background-position: -249px -1628px;
}
.logo-stock {
  background-position: -291px -1628px;
}
.logo-tools {
  background-position: -336px -1628px;
}
.logo-assets {
  background-position: -378px -1630px;
}
.logo-tax {
  background-position: -423px -1630px;
}
.logo-price {
  background-position: -467px -1628px;
}
.logo-general {
  background-position: -510px -1628px;
}
.logo-budget {
  background-position: -378px -1659px;
}
.logo-report {
  background-position: -547px -1628px;
}
.logo-finance {
  background-position: -204px -1664px;
}
</style>
