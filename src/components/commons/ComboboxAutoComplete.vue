<template>
  <div class="dropdown autocomplete">
    <div class="dropdown-btn con-input combobox-style">
      <input
        type="text"
        class="input has-icon"
        :value="valueInput"
        @focus="showSuggestion"
        @blur="onBlur"
        @keydown.up.prevent="up"
        @keydown.down.prevent="down"
        @keydown.enter.prevent="enter"
        @input="onInput"
      />
      <div
        class="icon-input icon-dropdown-box"
        @mousedown.prevent="toggleSuggestion"
      >
        <div
          class="icon icon-arrow-dropdown"
          :class="{ rotateicon: statusClick }"
        ></div>
      </div>
    </div>
    <div class="dropdown-content" :class="{ hide: !isShow }">
      <div class="dropdown-item-empty" v-if="suggestionData.length == 0">
        Không có dữ liệu hiển thị
      </div>
      <div
        v-for="(suggestion, index) in suggestionData"
        :key="index"
        class="dropdown-item"
        :class="{ active: current == index }"
        @click.prevent="
          clickSuggestion(suggestion, index), getIndex(), getValue()
        "
      >
        {{ suggestion.deparmentName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Danh sách suggestion của autocomplete.
     */
    suggestions: {
      type: Object,
      required: true,
    },

    /**
     * Giá trị khởi tạo cho input
     */
    value: {
      type: Number/String,
      default: null,
    },
  },
  data: () => ({
    /**
     * Xác định trạng thái popup autocomplete
     */
    isShow: false,

    /**
     * vị trí hiện tại
     */
    current: 0,

    /**
     * Danh sách suggesstion của autocomplete có lọc
     */
    suggestionData: [],

    /**
     * Giá trị của input
     */
    valueInput: "",
    /**
     * bien xoay theo su kien click
     */
    statusClick: false,
  }),
  methods: {
    /**
     * Đảo ngược trạng thái popup
     */
    toggleSuggestion() {
      if (this.isShow) {
        this.isShow = false;
        this.$el.querySelector("input").blur();
      } else {
        this.showSuggestion();
      }
    },
    /**
     * Emit get data
     * CreatedBy: NGDuong (15/07/2021)
     */
    getData(){
      this.$emit("getDepartmentId", this.suggestionData[this.current].deparmentId);
    },
    /**
     * getIndex
     */
    getIndex() {
      console.log("id=" + this.suggestionData[this.current].deparmentId);
    },
    /**
     * get Value
     */
    getValue() {
      console.log("value=" + this.suggestionData[this.current].deparmentName);
    },
    /**
     * Hiển thị popup
     */
    showSuggestion() {
      this.$el.querySelector("input").focus();
      this.isShow = true;
      this.statusClick = true;
    },
    /**
     * Nhấn enter
     */
    enter() {
      this.valueInput = this.suggestionData[this.current].text;
      this.isShow = false;
      this.$el.querySelector("input").blur();
      this.statusClick = false;
    },

    /**
     * Nhấn up
     */
    up() {
      if (this.current > 0) this.current--;
      this.valueInput = this.suggestionData[this.current].text;
    },

    /**
     * Nhấn down
     */
    down() {
      if (this.current < this.suggestions.length - 1) this.current++;
      this.valueInput = this.suggestionData[this.current].text;
    },
    /**
     * Chọn một suggesstion
     */
    clickSuggestion(suggestion, index) {
      this.current = index;
      this.isShow = false;
      this.valueInput = suggestion.text;
      this.statusClick = false;
    },

    /**
     * Blur input
     */
    onBlur() {
      setTimeout(() => {
        this.isShow = false;
        this.statusClick = false;
        this.$emit("blur");
      }, 300);
    },

    /**
     * Nhập vào input
     */
    onInput(e) {
      let val = e.target.value;
      this.valueInput = val;
      this.current = 0;
      if (this.suggestions) {
        this.suggestionData = this.suggestions.filter((s) =>
          s.text.toLowerCase().includes(val.toLowerCase())
        );
        this.isShow = true;
      }
    },
  },

  mounted() {
    this.suggestionData = this.suggestions;
    let index = this.suggestionData.findIndex((s) => s.value == this.value);
    if (index >= 0) {
      this.current = index;
      this.valueInput = this.suggestionData[this.current].text;
    } else {
      this.current = 0;
      this.valueInput = "";
    }
  },
};
</script>
<style lang="scss" scoped>

$navbar-width: 178px;
$navbar-width-toggle: 52px;

$rotate-icon: 180deg;

$header-height: 48px;

$icon-size: 24px;

$color-white: #fff;

// mixins
@mixin flex-row {
  display: flex;
  flex-direction: row;
}

@mixin icon-default {
  background-image: url("../../assets/img/Sprites.64af8f61.svg");
  background-repeat: no-repeat;
  display: inline-block;
}

@mixin icon-bind($position, $size: $icon-size) {
  background-position: $position;
  height: $size;
  width: $size;
}

.flex-row-align-center {
  @include flex-row();
  align-items: center;
}

a {
  text-decoration: none;
}

// Icon
.icon {
  @include icon-default();

  &.icon-arrow-dropdown {
    @include icon-bind(-560px -359px, 16px);
  }
}

// input
.input {
  height: 32px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 12px;
  width: 100%;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    border-color: #2ca01c;
  }

  &:hover:not(:focus) {
    border-color: #888b8f;
  }

  &.has-icon {
    padding-right: 28px;
  }

  &.has-error {
    border-color: #f20 !important;
  }
}

.con-input {
  position: relative;

  .text-error {
    display: none;
  }

  &:hover .text-error {
    white-space: nowrap;
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #38393d;
    color: $color-white;
    padding: 8px;
    z-index: 10;
  }

  .icon-input {
    position: absolute;
    right: 8px;
    top: 8px;
  }
}

.label-input {
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 4px;
  font-weight: bold;
}

// dropdown
.dropdown {
  position: relative;

  .dropdown-content {
    min-width: 100%;
    position: absolute;
    background-color: $color-white;
    border: 1px solid #ccc;
    white-space: nowrap;
    z-index: 20;
    min-width: 100%☺;
    margin-top: 5px;

    &.reserve {
      top: auto;
      bottom: 100%;
    }

    &.hide {
      display: none;
    }

    &.right {
      right: 0;
    }
    .dropdown-item-empty {
      background-color: #f7f7f7;
      color: #575757;
      height: 40px;
      line-height: 40px;
      padding-left: 12px;
      padding-right: 12px;
      text-align: center;
      border: 1px solid rgb(197, 197, 197);
    }

    .dropdown-item {
      height: 32px;
      line-height: 32px;
      padding-left: 12px;
      padding-right: 12px;
      cursor: pointer;

      &:hover:not(.active) {
        background-color: #b9c6ce;
        color: #0c3d06;
      }
    }
  }
}

// autocomplete
.autocomplete {
  .icon-dropdown-box {
    cursor: pointer;
    height: 30px;
    width: 30px;
    top: 1px;
    right: 1px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #e9e9e9;
      border-left: none;
      border-top-right-radius: 4px;
      border-end-end-radius: 4px;
    }
  }

  .active {
    background-color: rgb(51, 100, 65);
    color: $color-white;
  }
}
.rotateicon {
  transform: rotate(180deg);
}
</style>