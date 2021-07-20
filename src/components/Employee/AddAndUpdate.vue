<template>
  <div class="modal-container">
    <!-- thông báo -->
    <!-- thông báo thêm -->
    <v-dialog :persistent="true" v-model="dialogNotifyConfirm" width="444px">
      <DialogNotify
        @closeDialog="handleCloseConfirmDialog"
        type="notify-note"
        :notifyMessage="notifyMessage"
        @closeAllDialog="handleCloseAllDialog"
        @onAddOrUpdate="handleAddOrUpdate"
      />
    </v-dialog>
    <!-- Cảnh báo nhập sai -->
    <v-dialog v-model="dialogNotifyError" width="444px">
      <DialogNotify
        @closeDialog="handleCloseErrorDialog"
        type="notify-error"
        :notifyMessage="notifyMessage"
      />
    </v-dialog>
    <!-- cảnh báo xóa hoặc không lưu -->
    <v-dialog v-model="dialogNotifyDanger" width="444px">
      <DialogNotify
        @closeDialog="handleCloseDangerDialog"
        type="notify-danger"
        :notifyMessage="notifyMessage"
      />
    </v-dialog>

    <!-- bảng thêm mới, cập nhật nhân viên -->
    <div class="main-container">
      <!-- thoát -->
      <div class="container-title">
        <h1>Thông tin nhân viên</h1>
        <div class="checkbox">
          <CheckboxField
            :content="'Là khách hàng'"
            style="margin-right: 20px"
          />
          <CheckboxField :content="'Là nhà cung cấp'" />
        </div>
        <div class="modal-close">
          <v-tooltip bottom style="z-index: 100000">
            <template v-slot:activator="{ on, attrs }">
              <div class="modal-icon help-icon" v-bind="attrs" v-on="on"></div>
            </template>
            <span>Hỏi đáp</span>
          </v-tooltip>
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
      <!-- nhân viên -->
      <div class="container-attribute">
        <div class="attribute-top">
          <div class="att-left">
            <div class="left-1">
              <div class="attr-ma">
                <div class="resize resize-left">
                  <InputField
                    :label="'Mã'"
                    :required="true"
                    v-model="employee.employeeCode"
                    :errorNotify="errorNotifyCode"
                    ref="toFocus"
                  />
                </div>
              </div>
              <div class="attr-ten" style="width: 262px">
                <div class="resize resize-right">
                  <InputField
                    :label="'Tên'"
                    :required="true"
                    v-model="employee.fullName"
                    :errorNotify="errorNotifyFullName"
                  />
                </div>
              </div>
            </div>
            <div class="left-2">
              <div class="resize resize-left">
                <label>Đơn vị</label>
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
            <div class="left-3">
              <div class="resize resize-left">
                <InputField
                  :label="'Chức danh'"
                  v-model="employee.positionName"
                />
              </div>
            </div>
          </div>
          <div class="att-right">
            <div class="right-1">
              <div class="attr-dob">
                <div class="resize">
                  <InputField
                    :label="'Ngày sinh'"
                    type="date"
                    v-model="employee.dateOfBirth"
                  />
                </div>
              </div>
              <div class="attr-gender">
                <div class="resize">
                  <v-radio-group v-model="employee.gender">
                    <label class="gender-label">Giới tính</label>
                    <div class="radio-container">
                      <v-radio
                        :label="'Nam'"
                        :value="1"
                        color="#2ca01c"
                      ></v-radio>
                      <v-radio
                        :label="'Nữ'"
                        :value="0"
                        color="#2ca01c"
                      ></v-radio>
                      <v-radio
                        :label="'Khác'"
                        :value="2"
                        color="#2ca01c"
                      ></v-radio>
                    </div>
                  </v-radio-group>
                </div>
              </div>
            </div>
            <div class="right-2">
              <div class="attr-CMT">
                <div class="resize">
                  <InputField
                    :label="'Số CMND'"
                    v-model="employee.identityNumber"
                  />
                </div>
              </div>
              <div class="attr-cap">
                <div class="resize">
                  <InputField
                    :label="'Ngày cấp'"
                    type="date"
                    v-model="employee.identityDate"
                  />
                </div>
              </div>
            </div>
            <div class="right-3">
              <div class="resize">
                <InputField
                  :label="'Nơi cấp'"
                  style="margin-right: -5px"
                  v-model="employee.identityPlace"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="attribute-bottom">
          <div class="bottom-1">
            <div class="resize">
              <InputField
                style="margin-right: -20px;"
                :label="'Địa chỉ'"
                v-model="employee.address"
              />
            </div>
          </div>
          <div class="bottom-2">
            <div class="bottom-phone">
              <div class="resize" style="height:33px">
                <InputField
                  style="margin-top:-30px"
                  :label="'ĐT di động'"
                  v-model="employee.phoneNumber"
                />
              </div>
            </div>
            <div class="attr-homePhone">
              <div class="resize">
                <InputField
                  :label="'ĐT cố định'"
                  v-model="employee.landlinePhone"
                />
              </div>
            </div>
            <div class="attr-email">
              <div class="resize">
                <InputField :label="'Email'" v-model="employee.email" />
              </div>
            </div>
          </div>
          <div class="bottom-3">
            <div class="attr-account">
              <div class="resize">
                <InputField
                  :label="'Tài khoản ngân hàng'"
                  v-model="employee.bankAccount"
                />
              </div>
            </div>
            <div class="attr-bank">
              <div class="resize">
                <InputField
                  :label="'Tên ngân hàng'"
                  v-model="employee.bankName"
                />
              </div>
            </div>
            <div class="attr-location">
              <div class="resize">
                <InputField
                  :label="'Chi nhánh'"
                  v-model="employee.bankBranch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- button -->
      <div class="container-bottom">
        <div class="btn-close" >
          <div class="resize" @click="$emit('handleCloseDialog')">
            <Button :content="'Hủy'" :btnWhite="true" tabindex="0" />
          </div>
        </div>
        <div class="btn-save" >
          <div class="btn-cat">
            <div class="resize" @click="handleAddOrUpdate">
              <Button :content="'Cất'" :btnWhite="true" tabindex="0" />
            </div>
          </div>
          <div class="btn-saveAndAdd">
            <div class="resize" @click="handleSaveAndAdd">
              <Button :content="'Cất và Thêm'" tabindex="0"/>
            </div>
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
     * Cập nhật khi ấn enter ở button
     * CreatedBy: NGDuong (20/07/2021)
     */
    enter(value){
      if(value === "Hủy"){

      }else if(value === "Cất"){
        this.handleAddOrUpdate();
      }
      else if(value === "Cất và Thêm"){
        this.handleSaveAndAdd();
      }
      else {

      }
    },
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
     * Get dữ liệu đã chọn từ auto complete
     * CreatedBy: NGDuong (15/07/2021)
     */
    getDepartmentId(data) {
      this.employee.deparmentId = data;
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
        // đóng dialog nếu không có lỗi
        if (!this.dialogNotifyDanger) {
          this.$emit("handleCloseDialog"); // Ẩn dialog là resetdialog
        }
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
        // this.dialogNotifyError = true;
        isValid = false;
      }

      if (this.employee.fullName.length == 0) {
        this.notifyMessage = "Tên không được để trống";
        this.errorNotifyFullName.status = true;
        this.errorNotifyFullName.errorMessage = "Tên không được để trống";
        // this.dialogNotifyError = true; // hiển thị dialog báo lỗi
        isValid = false;
      }
      if (this.employee.employeeCode.length == 0) {
        this.notifyMessage = "Mã nhân viên không được để trống";
        this.errorNotifyCode.status = true;
        this.errorNotifyCode.errorMessage = "Mã không được để trống";
        // this.dialogNotifyError = true; // hiển thị dialog báo lỗi
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
        this.$emit("handleReload"); // load lại dữ liệu
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
        // kiểm tra xem có thay đổi dữ liệu không, nếu có thì đưa ra cảnh báo, nếu không thì thôi :v
        if (!this.handleCompareObject(newOb, this.employee)) {
          this.dialogNotifyConfirm = true;
        } else this.$emit("handleCloseDialog");
      } else this.dialogNotifyConfirm = true;
    },

    /**
     * Kiểm tra xem có sự thay đổi dữ liệu hay không
     * @param="object1" : object cần so sánh
     * @param="object2" : object cần so sách
     * CreatedBy : NGDuong(14/07/2021)
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

    //#region Các hàm gọi API

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
      } catch (error) {}
    },
    //#endregion
  },
  //#endregion
};
</script>

<style lang="scss" scoped>
$color-white: #fff;
$color-title: #111;

@mixin flex {
  display: flex;
  align-items: center;
}

@mixin widthHeight($w, $h) {
  width: $w;
  height: $h;
}

.modal-container {
  position: relative;
  background: #fff;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);

  .main-container {
    display: flex;
    flex-direction: column;
    @include widthHeight(100%, 100%);

    .container-title {
      @include widthHeight(100%, 10%);
      @include flex;
      h1 {
        margin-left: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
      .checkbox {
        margin: 0 15px 0 15px;
        @include flex;
        min-width: 63%;
      }
      .modal-close {
        padding-left: 12px;
        @include flex;

        .modal-icon {
          @include widthHeight(24px, 24px);
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
      }
    }
    .container-attribute {
      @include widthHeight(100%, 75%);
      display: flex;
      flex-direction: column;

      .attribute-top {
        @include flex;
        @include widthHeight(100%, 50%);

        .att-left {
          display: flex;
          flex-direction: column;
          @include widthHeight(50%, 100%);

          .left-1 {
            @include widthHeight(100%, 33.33%);
            @include flex;
            .attr-ma {
              @include widthHeight(40%, 100%);
            }
            .attr-ten {
              @include widthHeight(60%, 100%);
            }
          }
          .left-2 {
            @include widthHeight(100%, 33.33%);
          }
          .left-3 {
            @include widthHeight(100%, 33.33%);
          }
        }
        .att-right {
          display: flex;
          flex-direction: column;
          @include widthHeight(50%, 100%);

          .right-1 {
            @include flex;
            @include widthHeight(100%, 33.33%);
  
            .attr-dob {
              @include widthHeight(40%, 100%);
            }
            .attr-gender {
              @include widthHeight(60%, 100%);
              margin-top: 20px;
            }
          }
          .right-2 {
            @include flex;
            @include widthHeight(100%, 33.33%);

            .attr-CMT {
              @include widthHeight(55%, 100%);
            }
            .attr-cap {
              @include widthHeight(40%, 100%);
            }
          }
          .right-3 {
            @include widthHeight(100%, 33.33%);
          }
        }
      }
      .attribute-bottom {
        display: flex;
        flex-direction: column;
        @include widthHeight(90%, 50%);
        .bottom-1 {
          @include widthHeight(112%, 33.33%);
          min-width: 80%;
          margin-left: 25px;
        }
        .bottom-2 {
          @include widthHeight(100%, 33.33%);
          @include flex;
          margin-left: 25px;
          .attr-phone {
            @include widthHeight(25%, 100%);
          }
          .attr-homePhone {
            @include widthHeight(25%, 100%);
          }
          .attr-email {
            @include widthHeight(25%, 100%);
          }
        }
        .bottom-3 {
          @include widthHeight(100%, 33.33%);
          @include flex;
          margin-left: 25px;
          .attr-account {
            @include widthHeight(25%, 100%);
          }
          .attr-bank {
            @include widthHeight(25%, 100%);
          }
          .attr-location {
            @include widthHeight(25%, 100%);
          }
        }
      }
    }
    .container-bottom {
      @include widthHeight(100%, 15%);
      display: flex;
      justify-content: space-between;

      .btn-close{
        @include widthHeight(10%, 100%);
        margin-left: 25px;
        margin-top: 10px;
      }

      .btn-save{
        @include widthHeight(25%, 100%);
        @include flex;
        margin-left: 25px;
        margin-top: 10px;
        .btn-cat{
          @include widthHeight(30%, 100%);
        }

        .btn-saveAndAdd{
          @include widthHeight(70%, 100%);
        }
      }
    }
  }
}

.resize {
  @include widthHeight(90%, 45%);
  margin: 10px 0 0 5px;
}

.resize-left {
  margin-left: 30px;
}

.resize-right {
  margin: 10px 20px 0 20px;
}

// ---------radio----------
.radio-container {
  @include flex;
  justify-content: center;
}

.gender-label {
  margin-bottom: 8px;
}
</style>
