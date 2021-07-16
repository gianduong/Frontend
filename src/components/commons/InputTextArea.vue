<template>
  <div class="field-text-container">
    <label> {{ label }}<span v-if="required" class="required"> *</span></label>
    <div
      @mouseover="handleValidate"
      @mouseleave="handleLeave"
      class="text-field"
      :class="[searchField ? 'search-field' : '']"
    >
      <textarea
        :placeholder="placeholder"
        :value="value ? value : textValue"
        @input="getValue"
        :class="[
          required && errorNotify.status ? 'errortext' : '',
          type == 'date' && value ? 'active' : null,
        ]"
        rows="4"
        cols="50"
      >
      </textarea>
      <div v-if="searchField" class="search-icon"></div>
      <div v-if="required && errorNotify.status" class="validateMessage">
        <p>{{ errorNotify.errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "placeholder",
    "searchField",
    "label",
    "type",
    "value",
    "required",
    "errorNotify",
  ],
  data() {
    return {
      textValue: "",
      validate: false,
      errorMessage: "",
      showMessage: false,
    };
  },

  methods: {
    /**
     * Truyền dữ liệu nhận được ra ngoài dialog
     * CreatedBy: NGDuong(16/07/2021)
     */
    getValue(e) {
      this.$emit("input", e.target.value);
    },

    /**
     * Hiển thị thông báo lỗi
     * CreatedBy: NGDuong(16/07/2021)
     */
    handleValidate() {
      if (this.required && this.validate) {
        this.showMessage = true;
      }
    },

    /**
     * đóng hiển thị thông báo lỗi
     * CreatedBy: NGDuong(16/07/2021)
     */
    handleLeave() {
      if (this.required && this.validate) {
        this.showMessage = false;
      }
    },
    /**
     * focus vào 1 element
     * CreatedBy: NGDuong(16/07/2021)
     */
    handleFocus() {
      this.$refs.autoFocus.focus();
    },
  },
};
</script>

<style scoped>
.field-text-container {
  height: 100%;
}

.text-field {
  position: relative;
  height: 100%;
  
}
.text-field textarea {
  padding: 6px 11px;
  border-radius: 2px;
  border: 1px solid #babec5;
  outline: none;
  width: 100%;
  height: 100%;
  /* max-height: 32px; */
}
.text-field textarea:focus {
  border-color: #2ca01c;
}
::placeholder {
  font-style: italic;
}

.validateMessage {
  position: absolute;
  background: #443e3e;
  left: 50%;
  top: 50%;
  width: 150px;
  color: #fff;
  transform: translateX(-50%);
  user-select: none;
  padding: 3px 3px;
  display: none;
}
.validateMessage p {
  font-size: 12px;
  margin-bottom: 0;
}
.text-field:hover .validateMessage {
  display: block;
}
.required {
  color: red;
}
.errortext {
  border-color: red !important;
}
textarea {
  padding-right: 5px;
  font-style: italic;
  text-transform: uppercase;
  color: #000;
  resize:vertical;
}

</style>
