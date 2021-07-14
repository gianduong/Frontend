<template>
  <div class="modal-container">
    <!-- Dialog error -->
    <!--  -->
    <v-dialog v-model="dialogNotifyError" width="444px">
      <DialogNotify
        @closeDialog="handleCloseErrorDialog"
        type="notify-error"
        :notifyMessage="notifyMessage"
      />
    </v-dialog>
    <!--  -->
    <!-- End of dialog error -->
    <!-- Dialog danger -->
    <!--  -->
    <v-dialog v-model="dialogNotifyDanger" width="444px">
      <DialogNotify
        @closeDialog="handleCloseDangerDialog"
        type="notify-danger"
        :notifyMessage="notifyMessage"
      />
    </v-dialog>
    <!--  -->
    <!-- End of dialog danger -->
    <!-- Dialog danger -->
    <!--  -->
    <v-dialog :persistent="true" v-model="dialogNotifyConfirm" width="444px">
      <DialogNotify
        @closeDialog="handleCloseConfirmDialog"
        type="notify-note"
        :notifyMessage="notifyMessage"
        @closeAllDialog="handleCloseAllDialog"
        @onAddOrUpdate="handleAddOrUpdate"
      />
    </v-dialog>
    <!--  -->
    <!-- End of dialog danger -->
    <div class="modal-header-container">
      <div class="modal-header">
        <h3 class="modal-title">Thêm mới cửa hàng</h3>
      </div>
      <div class="modal-close">
        <v-tooltip bottom style="z-index: 100000">
          <template v-slot:activator="{ on, attrs }">
            <div
              class="modal-icon close-icon"
              @click="onClose"
              v-bind="attrs"
              v-on="on"
            ></div>
          </template>
          <span>Thoát</span>
        </v-tooltip>
      </div>
    </div>
    <!--  -->
    <!-- end modal header -->
    <!-- modal content -->
    <!--  -->
    <div class="modal-content-wrapper">
      <div class="model-content-top">
        <div class="content-base content-ma">
          <div class="grow-2">Mã cửa hàng</div>
          <InputField
            tabindex="1"
            class="grow-8"
            v-model="employee.employeeCode"
            :errorNotify="errorNotifyCode"
            ref="toFocus"
          />
        </div>
        <div class="content-base content-ma">
          <div class="grow-2">Tên cửa hàng</div>
          <InputField
            tabindex="2"
            class="grow-8"
            v-model="employee.employeeCode"
            :errorNotify="errorNotifyCode"
          />
        </div>
        <div class="content-base content-ma" style="height: 50px">
          <div class="grow-2">Địa chỉ</div>
          <InputField
            tabindex="3"
            class="grow-6"
            v-model="employee.employeeCode"
            :errorNotify="errorNotifyCode"
          />
        </div>
      </div>
      <div class="model-content-bottom content-base">
        <div class="content-bottom-left grow-5">
          <div class="content-base grow-5">
            <div class="grow-2">Số điện thoại</div>
            <InputField
              class="grow-2"
              v-model="employee.employeeCode"
              :errorNotify="errorNotifyCode"
            />
          </div>
          <div class="content-base grow-5">
            <div class="grow-2">Quốc gia</div>
            <v-autocomplete
              solo
              v-model="employee.deparmentId"
              :items="listDepartment"
              item-text="deparmentName"
              item-value="deparmentId"
              no-data-text="Không có dữ liệu"
              :error="errorNotifyDepartment.status"
              :error-messages="errorNotifyDepartment.errorMessage"
            ></v-autocomplete>
          </div>
          <div class="content-base grow-5">
            <div class="grow-2">Tỉnh/Thành phố</div>
            <v-autocomplete
              solo
              v-model="employee.deparmentId"
              :items="listDepartment"
              item-text="deparmentName"
              item-value="deparmentId"
              no-data-text="Không có dữ liệu"
              :error="errorNotifyDepartment.status"
              :error-messages="errorNotifyDepartment.errorMessage"
            ></v-autocomplete>
          </div>
          <div class="content-base grow-5">
            <div class="grow-2">Phường/Xã</div>
            <v-autocomplete
              solo
              v-model="employee.deparmentId"
              :items="listDepartment"
              item-text="deparmentName"
              item-value="deparmentId"
              no-data-text="Không có dữ liệu"
              :error="errorNotifyDepartment.status"
              :error-messages="errorNotifyDepartment.errorMessage"
            ></v-autocomplete>
          </div>
        </div>
        <div class="content-bottom-right grow-5">
          <div class="content-base grow-5">
            <div class="grow-2">Mã số thuế</div>
            <InputField
              class="grow-2"
              v-model="employee.employeeCode"
              :errorNotify="errorNotifyCode"
            />
          </div>
          <div class="content-base grow-5">
            <div class="grow-2">Quận/Huyện</div>
            <v-autocomplete
              solo
              v-model="employee.deparmentId"
              :items="listDepartment"
              item-text="deparmentName"
              item-value="deparmentId"
              no-data-text="Không có dữ liệu"
              :error="errorNotifyDepartment.status"
              :error-messages="errorNotifyDepartment.errorMessage"
            ></v-autocomplete>
          </div>
          <div class="grow-5" style="height: 36px"></div>
          <div class="content-base grow-5">
            <div class="grow-2">Đường phố</div>
            <InputField
              class="grow-2"
              v-model="employee.employeeCode"
              :errorNotify="errorNotifyCode"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- end modal content -->
    <!-- modal footer -->
    <!--  -->
    <div class="modal-footer-container">
      <div class="modal-footer">
        <div class="btn-cancel" @click="$emit('handleCloseDialog')">
          <Button :content="'Hủy'" :btnWhite="true" />
        </div>
        <div class="btn-group">
          <div class="par-12" @click="handleAddOrUpdate">
            <Button :content="'Cất'" :btnWhite="true" />
          </div>
          <div @click="handleSaveAndAdd">
            <Button :content="'Cất và Thêm'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//#region Import dữ liệu
import Button from "../commons/Button.vue";
import InputField from "../commons/InputField.vue";
import CheckboxField from "../commons/CheckboxField.vue";
import DefaultEmployee from "../constant/DefaultEmployee";
import DialogNotify from "../commons/DialogNotify.vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
//#endregion

export default {
  //#region Props
  props: [
    "dialogAddOrUpdate",
    "listDepartment",
    "employeeDetail",
    "modeUpdate",
  ],
  //#endregion

  //#region Component
  components: {
    Button,
    InputField,
    CheckboxField,
    DialogNotify,
  },
  //#endregion

  //#region Created
  created() {
    if (this.employeeDetail) {
      this.employee = { ...this.employeeDetail };
      this.compareObject = this.employeeDetail;
      // format giá trị ngày tháng
      this.employee.dateOfBirth = this.formatDateEmployee(
        this.employee.dateOfBirth
      );
      this.employee.identityDate = this.formatDateEmployee(
        this.employee.identityDate
      );
      setTimeout(() => {
        this.$refs.toFocus.handleFocus();
      }, 200);
    } else {
      this.getNewEmployeeCode();
      setTimeout(() => {
        this.$refs.toFocus.handleFocus();
      }, 200);
    }
  },
  //#endregion

  //#region Data
  data() {
    return {
      // Nhân viên và các trường của nhân viên
      employee: {
        employeeId: "",
        employeeCode: "",
        fullName: "",
        deparmentId: "",
        gender: 1,
        dateOfBirth: null,
        identityNumber: "",
        identityDate: null,
        identityPlace: "",
        positionName: "",
        address: "",
        phoneNumber: "",
        landlinePhone: "",
        email: "",
        bankAccount: "",
        bankName: "",
        bankBranch: "",
      },
      compareObject: null, // object lưu dữ liệu nhân viên để so sánh thay đổi
      notifyMessage: "", // Nội dùng dialog
      dialogNotifyError: false, // hiển thị dialog thông báo lỗi
      dialogNotifyDanger: false, // hiển thị dialog cảnh báo
      dialogNotifyConfirm: false, // hiển thị dialog thông báo
      saveAndAddMode: false, // chế độ cất và thêm
      errorNotifyCode: {
        status: false, // bắt validate Code field
        errorMessage: "",
      },
      errorNotifyFullName: {
        status: false, // bắt validate fullName field
        errorMessage: "",
      },
      errorNotifyDepartment: {
        status: false, // bắt validate đơn vị
        errorMessage: "",
      },
    };
  },
  //#endregion

  //#region Watch
  watch: {
    /**
     * theo dõi đóng mở dialog và thực hiện các tác vụ
     * CreatedBy : NGDuong(14/06/2021)
     */
    dialogAddOrUpdate() {
      // đóng dialog
      // tác vụ : reset dialog, reset các lỗi validate của field, kiểm tra sự thay đổi của field
      if (!this.dialogAddOrUpdate) {
        this.employee = { ...DefaultEmployee }; // reset dialog
        const resetData = {
          status: false,
          errorMessage: "",
        };
        this.errorNotifyCode = { ...resetData }; // reset hiển thị validate Code
        this.errorNotifyFullName = { ...resetData }; // reset hiển thị validate fullName
        this.errorNotifyDepartment = { ...resetData }; // reset hiển thị validate department
        this.saveAndAddMode = false;
        this.$emit("resetEmployeeDetail");
      }
      // Mở dialog
      // tác vụ : lấy mã nhân viên mới
      else {
        if (!this.employeeDetail) {
          this.getNewEmployeeCode(); // lấy mã nhân viên khi dialog được show
        }
        setTimeout(() => {
          this.$refs.toFocus.handleFocus();
        }, 200);
      }
    },

    /**
     * Theo dõi giá trị thông tin nhân viên
     * CreatedBy: NGDuong(14/06/2021)
     */
    employeeDetail() {
      // format giá trị ngày tháng
      if (this.employeeDetail) {
        this.employee = { ...this.employeeDetail };
        this.employee.dateOfBirth = this.formatDateEmployee(
          this.employee.dateOfBirth
        );
        this.employee.identityDate = this.formatDateEmployee(
          this.employee.identityDate
        );
      }
      //
    },

    /**
     * Theo dõi giá trị mã nhân viên thay đổi
     * CreatedBy : NGDuong(14/06/2021)
     */
    "employee.employeeCode"() {
      if (this.employee.employeeCode.length > 0) {
        this.errorNotifyCode.status = false;
      }
    },

    /**
     * Theo dõi giá trị tên nhân viên thay đổi
     * CreatedBy: NGDuong(14/06/2021)
     */
    "employee.fullName"() {
      if (this.employee.fullName.length > 0) {
        this.errorNotifyFullName.status = false;
      }
    },

    /**
     * Theo dõi id phòng ban thay đổi
     * CreatedBy : NGDuong(16/06/2021)
     */
    "employee.deparmentId"() {
      if (this.employee.deparmentId.length > 0) {
        this.errorNotifyDepartment.status = false;
        this.errorNotifyDepartment.errorMessage = "";
      }
    },
  },
  //#endregion

  //#region Methods
  methods: {
    //#region Các hàm xử lý logic

    /**
     * Thay đổi chế độ cất và thêm
     * CreatedBy : NGDuong(12/06/2021)
     *
     */
    handleSaveAndAdd() {
      // kiểm tra validate dữ liệu
      this.saveAndAddMode = true; // bật mode cất và thêm
      if (this.validate()) {
        if (!this.modeUpdate) {
          this.handleAdd();
        } else this.handelUpdate();
      }
    },

    /**
     * đóng dialog cảnh báo
     * CreatedBy : NGDuong(12/6/2021)
     */
    handleCloseDangerDialog() {
      this.dialogNotifyDanger = false;
    },

    /**
     * đóng dialog báo lỗi
     * CreatedBy : NGDuong(12/6/2021)
     */
    handleCloseErrorDialog() {
      this.dialogNotifyError = false;
    },

    /**
     * đóng dialog báo lỗi
     * CreatedBy : NGDuong(12/6/2021)
     */
    handleCloseConfirmDialog() {
      this.dialogNotifyConfirm = false;
    },

    /**
     * đóng tất cả dialog hiện tại
     * CreatedBy: NGDuong(12/6/2021)
     */
    handleCloseAllDialog() {
      this.handleCloseConfirmDialog();
      this.$emit("handleCloseDialog");
    },

    /**
     * thêm hoặc sửa nhân viên
     * CreatedBy : NGDuong(12/06/2021)
     */
    handleAddOrUpdate() {
      // kiểm tra validate dữ liệu
      if (this.validate()) {
        if (!this.modeUpdate) {
          this.handleAdd();
        } else this.handelUpdate();
        this.$emit("handleCloseDialog"); // Ẩn dialog là resetdialog
      }
    },

    /**
     * Kiểm tra dữ liệu
     * CreatedBy : NGDuong(13/06/2021)
     */
    validate() {
      var isValid = true;
      if (this.employee.deparmentId.length == 0) {
        this.notifyMessage = "Đơn vị không được để trống";
        this.errorNotifyDepartment.status = true;
        this.errorNotifyDepartment.errorMessage = "Đơn vị không được để trống";
        this.dialogNotifyError = true;
        isValid = false;
      }

      if (this.employee.fullName.length == 0) {
        this.notifyMessage = "Tên không được để trống";
        this.errorNotifyFullName.status = true;
        this.errorNotifyFullName.errorMessage = "Tên không được để trống";
        this.dialogNotifyError = true; // hiển thị dialog báo lỗi
        isValid = false;
      }
      if (this.employee.employeeCode.length == 0) {
        this.notifyMessage = "Mã nhân viên không được để trống";
        this.errorNotifyCode.status = true;
        this.errorNotifyCode.errorMessage = "Mã không được để trống";
        this.dialogNotifyError = true; // hiển thị dialog báo lỗi
        isValid = false;
      }
      return isValid;
    },

    /**
     * thêm nhân viên
     * CreatedBy : NGDuong(12/06/2021)
     */
    async handleAdd() {
      this.employee.employeeId = uuidv4();
      try {
        await axios({
          method: "post",
          url: "https://localhost:44376/api/v1/Employees",
          data: this.employee,
        });
        this.$emit("onNotify", "Nhân viên đã được thêm thành công");
        if (this.saveAndAddMode) {
          var newCode = await this.getNewEmployeeCode(); // lấy mã nhân viên mới
          this.employee = { ...DefaultEmployee, employeeCode: newCode }; // resetDialog
          // reset data
          const resetData = {
            status: false,
            errorMessage: "",
          };
          this.errorNotifyCode = { ...resetData }; // reset hiển thị validate Code
          this.errorNotifyFullName = { ...resetData }; // reset hiển thị validate fullName
          this.errorNotifyDepartment = { ...resetData }; // reset hiển thị validate department
          this.$emit("resetEmployeeDetail");
        }
        this.$emit("handleReload"); // load laị dữ liệu
      } catch (error) {
        if (error.response.status == "400") {
          if (error.response.data.data.detail.fieldNotValid == "EmployeeCode") {
            this.notifyMessage = error.response.data.userMsg;
            this.dialogNotifyDanger = true; // hiển thị dialog cảnh báo
          }
        }
      }
    },

    /**
     * Cập nhật thông tin nhân viên
     * CreatedBy : NGDuong(12/06/2021)
     */
    async handelUpdate() {
      try {
        await axios({
          method: "put",
          url: `https://localhost:44376/api/v1/Employees/${this.employee.employeeId}`,
          data: this.employee,
        });
        this.$emit("onNotify", "Nhân viên đã được cập nhật");
        if (this.saveAndAddMode) {
          var newCode = await this.getNewEmployeeCode(); // lấy mã nhân viên mới
          this.employee = { ...DefaultEmployee, employeeCode: newCode }; // resetDialog
          // reset data
          const resetData = {
            status: false,
            errorMessage: "",
          };
          this.errorNotifyCode = { ...resetData }; // reset hiển thị validate Code
          this.errorNotifyFullName = { ...resetData }; // reset hiển thị validate fullName
          this.errorNotifyDepartment = { ...resetData }; // reset hiển thị validate department
          this.$emit("resetEmployeeDetail");
        }
        this.$emit("handleReload"); // load laị dữ liệu
      } catch (error) {
        if (error.response.status == "400") {
          if (error.response.data.data.detail.fieldNotValid == "EmployeeCode") {
            this.notifyMessage = error.response.data.userMsg;
            this.dialogNotifyDanger = true; // hiển thị dialog cảnh báo
          }
        }
      }
    },

    /**
     * format lại giá trị ngày tháng để hiển thị
     * @param="date" : giá trị ngày cần format
     * CreatedBy : NGDuong(12/06/2021)
     */
    formatDateEmployee(date) {
      if (date) {
        return this.formatDate(date);
      }
      return null;
    },

    /**
     * chuyển đổi giá trị ngày tháng về yyyy-mm-dd
     * @param="date" : giá trị ngày cần format
     * CreatedBy : NGDuong(12/06/2021)
     */
    formatDate(date) {
      if (date) {
        const newDate = new Date(date);
        let strDay = newDate.getDate();
        let strMonth = newDate.getMonth() + 1;
        let strYear = newDate.getFullYear();
        if (strDay < 10) strDay = `0${strDay}`;
        if (strMonth < 10) strMonth = `0${strMonth}`;
        return `${strYear}-${strMonth}-${strDay}`;
      }
      return null;
    },

    /**
     * bắt sự kiện đóng dialog và thự hiện so sánh dữ liệu để đưa ra thông báo
     * CreatedBy : NGDuong(14/06/2021)
     */
    onClose() {
      if (this.modeUpdate) {
        var newOb = this.employeeDetail;
        newOb.dateOfBirth = this.formatDate(newOb.dateOfBirth);
        newOb.identityDate = this.formatDate(newOb.identityDate);
        if (!this.handleCompareObject(newOb, this.employee)) {
          this.dialogNotifyConfirm = true;
        } else this.$emit("handleCloseDialog");
      } else this.dialogNotifyConfirm = true;
    },

    /**
     * so sánh 2 object
     * @param="object1" : object cần so sánh
     * @param="object2" : object cần so sách
     * CreatedBy : NGDuong(14/06/2021)
     */
    handleCompareObject(object1, object2) {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let key of keys1) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
      return true;
    },
    //#endregion

    //#region Các hàm gọi APIf

    /**
     * Lấy mã nhân viên mới
     * CreatedBy: NGDuong(12/06/2021)
     */
    async getNewEmployeeCode() {
      try {
        this.showLoading = true; // hiện loading
        const data = await axios.get(
          "https://localhost:44376/api/v1/Employees/NewCode"
        );
        this.employee.employeeCode = data.data;
        this.showLoading = false; // ẩn loading
        return data.data;
      } catch (error) {
        console.log(error);
      }
    },
    //#endregion
  },
  //#endregion
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: relative;
  background: #fff;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
}
.modal-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
}
.modal-header {
  padding: 20px 12px 20px 32px;
  display: flex;
  align-items: center;
}
.modal-title {
  font-size: 24px;
  color: #111;
  font-weight: 700;
}
.radio-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-combobox {
  display: flex;
}

.modal-close {
  padding: 12px;
  display: flex;
  align-items: center;
}
.combobox-customer,
.combobox-provider {
  padding: 0 19.5px;
}
.modal-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
}
.help-icon {
  background-position: -89px -144px;
  margin-right: 10px;
}
.close-icon {
  background-position: -144px -144px;
}
/* modal content */
.modal-content-wrapper {
  padding: 0 32px 20px 32px;
  width: 100%;
  height: 460px;

  span {
    text-align: center;
  }
}
.modal-content {
  display: flex;
}

.content-base {
  display: flex;
  align-items: stretch;
  margin: 5px 5px 10px 5px;
}

.grow-2 {
  flex-grow: 2;
}

.grow-3 {
  flex-grow: 3;
}

.grow-4 {
  flex-grow: 4;
}

.grow-5 {
  flex-grow: 5;
}

.grow-6 {
  flex-grow: 6;
}

.grow-7 {
  flex-grow: 7;
}

.grow-8 {
  flex-grow: 8;
}

/**---------content top */
.model-content-top {
  width: 100%;
  height: 50%;
}

/**---------content bottom */
.model-content-bottom {
  width: 100%;
  height: 50%;
}
/* input */
.group-input {
  display: flex;
  align-items: center;
}
.input-code,
.input-date-rage {
  width: 40%;
}
.input-name,
.input-editer {
  width: 60%;
}
.pr-6 {
  padding-right: 6px !important;
}
.v-application .pr-6 {
  padding-right: 6px !important;
}
.par-12 {
  padding-right: 12px !important;
}
.p-12 {
  padding-bottom: 12px !important;
}
.pt-24 {
  padding-top: 24px !important;
}
.pb-24 {
  padding-bottom: 24px !important;
}
.modal-content-left {
  padding-right: 26px;
  width: calc(50% + 26px);
}
/* combobox */
.combobox-gender {
  display: flex;
  height: 32px;
  align-items: center;
  padding: 5px 0 6px 10px;
}
.combobox-icon {
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  cursor: pointer;
}
.combobox-icon.active {
  border-color: #2ca01c;
}
.combobox-icon.active::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2ca01c;
}
.comboxbox-item {
  display: flex;
}
.comboxbox-item:first-child {
  margin-right: 20px;
}
.combobox-content {
  margin-left: 10px;
}
.combobox-wrapper label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  padding-left: 10px;
  margin-bottom: 4px;
}
/* modal footer */
.modal-footer-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 77px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  background: #fff;
}
.modal-footer {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #babec5;
}
.btn-group {
  display: flex;
}

.gender-label {
  margin-bottom: 8px;
}
</style>
