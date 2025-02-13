<!-- Component Lập kế hoạch Bước 1 -->
<template>
  <div
    style="
      background-color: #f5f5f5;
      display: flex;
      justify-content: space-between;
    "
  >
    <!-- Popup Tần suất -->
    <!-- <FrequencyPopup isPopupVisible="isPopupVisible" /> -->

    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <div v-else>
      <header-component />
      <div
        style="
          display: flex;
          width: 100%;
          height: 100%;
          background-color: white;
        "
      >
        <left-menu />
        <div style="border-left: 1px solid #e8e8e8; flex: 1">
          <div
            style="
              flex: 1;
              height: 100%;
              margin-left: 8px;
              box-shadow: 0px 0px 12px 0px rgba(0.1, 0, 0, 0.2);
              padding: 0px 12px 12px 12px;
            "
          >
            <div class="title" style="padding-top: 12px">
              <h3 style="text-align: center; font-weight: bold">
                THÊM MỚI KẾ HOẠCH KIỂM SOÁT CHẤT LƯỢNG NHÀ MÁY
              </h3>
            </div>
            <div
              style="
                border: none;
                display: flex;
                justify-content: space-between;
              "
            >
              <step-component
                :step="{
                  count: '1',
                  name: 'THÔNG TIN KẾ HOẠCH',
                  color: ' #60afff',
                  bgdColor: '#FFFFFF',
                }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 4px solid #b5b5c3;
                  width: 32%;
                  border-color: #60afff;
                  color: #60afff;
                "
              />
              <step-component
                :step="{
                  count: '2',
                  name: 'QUY TRÌNH',
                  color: '#b5b5c3',
                  bgdColor: '#FFFFFF',
                }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 4px solid #b5b5c3;
                  width: 32%;
                "
              />
              <step-component
                :step="{
                  count: '3',
                  name: 'CHỌN VÙNG KÝ',
                  color: '#b5b5c3',
                  bgdColor: '#FFFFFF',
                }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 4px solid #b5b5c3;
                  width: 32%;
                "
              />
            </div>
            <div>
              <div style="width: 100%; padding-left: 12px">
                <h4 style="color: #fa896b">NGƯỜI YÊU CẦU</h4>
              </div>
              <div>
                <div style="display: flex; justify-content: space-between">
                  <div style="width: 24%">
                    <DxNumberBox
                      :value="2025"
                      :min="1900"
                      :max="9999"
                      label="Năm kế hoạch"
                      :showSpinButtons="isShownSpinButtons"
                      labelMode="floating"
                      :show-clear-button="isShowClearButton"
                    >
                      <template #content>
                        <div class="number-box-icons">
                          <span @click="increaseValue" class="icon-up">▲</span>
                          <span @click="decreaseValue" class="icon-down"
                            >▼</span
                          >
                        </div>
                      </template>
                      <DxValidator>
                        <DxRequiredRule message="Năm kế hoạch là bắt buộc" />
                        <DxRangeRule
                          :min="1900"
                          :max="9999"
                          type="required"
                          message="Năm kế hoạch phải nằm trong khoảng từ 1900 đến 9999"
                        />
                      </DxValidator>
                    </DxNumberBox>
                  </div>
                  <div style="width: 24%">
                    <DxAutocomplete
                      :value="'2025/40/KH-QLCL-NCPT-VHSX'"
                      label="Mã số"
                      :buttons="customButtons"
                      labelMode="floating"
                      :read-only="isReadOnly"
                    />
                  </div>
                  <div style="width: 24%">
                    <DxAutocomplete
                      :value="'QUẢN TRỊ'"
                      labelMode="floating"
                      label="Họ và tên"
                      :read-only="isReadOnly"
                    />
                  </div>
                  <div style="width: 24%">
                    <DxSelectBox
                      label="Đơn vị/Ban"
                      labelMode="floating"
                      placeholder=""
                      :value="dataSource[0]"
                      :data-source="dataSource"
                    >
                      <DxList :data-source="dataSource"> </DxList>
                    </DxSelectBox>
                  </div>
                </div>
                <div>
                  <DxAutocomplete
                    label="Tiêu đề"
                    labelMode="floating"
                    :input-attr="inputAttribute"
                    style="padding-top: 4px; margin-top: 20px"
                  >
                    <DxValidator>
                      <DxRequiredRule message="Tiêu đề là bắt buộc" />
                    </DxValidator>
                  </DxAutocomplete>
                  <DxAutocomplete
                    label="Mô tả"
                    labelMode="floating"
                    :input-attr="inputAttribute"
                    style="padding-top: 4px; margin-top: 20px"
                  >
                    <DxValidator>
                      <DxRequiredRule message="Mô tả là bắt buộc" />
                    </DxValidator>
                  </DxAutocomplete>
                  <DxAutocomplete
                    label="Ghi chú"
                    labelMode="floating"
                    :input-attr="inputAttribute"
                    style="
                      padding-top: 4px;
                      margin-top: 20px;
                      height: 60px;
                      width: 100%;
                    "
                  />
                  <!-- Mẫu ký số -->
                  <DxSelectBox
                    :data-source="dataSource"
                    label="Mẫu ký số"
                    labelMode="floating"
                    placeholder=""
                    style="padding-top: 4px; margin-top: 20px"
                  >
                    <DxList :data-source="dataSource"> </DxList>
                    <DxValidator>
                      <DxRequiredRule message="Mẫu ký số là bắt buộc" />
                    </DxValidator>
                  </DxSelectBox>
                </div>
              </div>
              <div>
                <div
                  style="
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 12px;
                  "
                >
                  <h4
                    style="
                      color: #fa896b;
                      display: flex;
                      flex: 1;
                      align-items: center;
                      width: 20%;
                    "
                  >
                    BẢNG CHI TIẾT KẾ HOẠCH
                    <h4 style="color: red; font-weight: bold">(*)</h4>
                  </h4>
                </div>
                <div>
                  <DxDataGrid
                    :column-auto-width="isColumnAutoWidth"
                    :allow-column-resizing="isAllowColumnResizing"
                    id="dataGrid"
                    :data-source="gridData"
                    :show-borders="isShownBorders"
                    :row-alternation-enabled="rowAlternationEnabled"
                    @selection-changed="selectEmployee"
                    :show-row-lines="isShownRowLines"
                    :show-column-lines="isShownColumnLines"
                    :export="exportConfig"
                    :search-panel="searchPanelConfig"
                    :editing="editingConfig"
                    style="border: none"
                  >
                    <DxToolbar>
                      <DxItem name="addRowButton" />
                      <DxItem location="after">
                        <template #default>
                          <DxButton icon="download" text="Tải mẫu" />
                        </template>
                      </DxItem>
                      <DxItem name="searchPanel" />
                    </DxToolbar>
                    <DxExport :enabled="true" />
                    <DxHeaderFilter :visible="true" />
                    <DxPaging :enabled="true" :pageSize="10" />
                    <DxPager
                      :visible="true"
                      :showPageSizeSelector="true"
                      :allowedPageSizes="[10, 25, 50, 100]"
                      :showInfo="true"
                    />

                    <DxColumn
                      v-for="(column, index) in infoColumns"
                      :key="index"
                      :data-field="column.dataField"
                      :caption="column.caption"
                      :alignment="column.alignment || 'center'"
                      v-bind="column.additionalProps"
                    >
                      <template v-if="column.children">
                        <DxColumn
                          v-for="(child, childIndex) in column.children"
                          :key="childIndex"
                          :data-field="child.dataField"
                          :caption="child.caption"
                          :alignment="child.alignment || 'center'"
                          v-bind="child.additionalProps"
                        />
                      </template>
                    </DxColumn>
                  </DxDataGrid>
                </div>
              </div>
              <div>
                <div style="width: 100%; padding-left: 12px">
                  <h4 style="color: #fa896b">TỆP ĐÍNH KÈM</h4>
                </div>
                <DxFileUploader
                  select-button-text="Chọn tập tin"
                  label-text="hoặc Thả tập tin vào đây"
                />
                <div style="width: 100%; display: flex; padding-top: 30px">
                  <div>
                    <DxButton
                      text="Tiếp theo"
                      icon="arrowright"
                      @click="navigateStepTwo"
                    />
                  </div>
                  <div
                    style="display: flex; flex: 1; justify-content: flex-end"
                  >
                    <div>
                      <DxButton text="Lưu" icon="save" />
                    </div>
                    <div>
                      <DxButton
                        text="Đóng"
                        icon="close"
                        style="margin-left: 8px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/layout/LeftMenu.vue";
import StepComponent from "@/components/button/StepComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

import {
  DxDataGrid,
  DxColumn,
  DxHeaderFilter,
  DxPaging,
  DxPager,
  DxToolbar,
  DxItem,
} from "devextreme-vue/data-grid";
import DxButton from "devextreme-vue/button";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxNumberBox } from "devextreme-vue/number-box";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import { AddLineForm } from "@/components/form/AddLineForm.js";

// import FrequencyPopup from "@/components/popup/FrequencyPopup.vue";
// import AddRowPopup from "@/components/popup/AddRowPopup.vue";
import {
  DxValidator,
  DxRequiredRule,
  DxRangeRule,
} from "devextreme-vue/validator";
export default {
  name: "PlanCreateList",
  components: {
    LeftMenu,
    StepComponent,
    DxButton,
    DxAutocomplete,
    DxDataGrid,
    DxColumn,
    DxHeaderFilter,
    DxNumberBox,
    DxSelectBox,
    DxList,
    DxPaging,
    DxPager,
    HeaderComponent,
    DxFileUploader,
    DxToolbar,
    DxItem,
    DxValidator,
    DxRequiredRule,
    DxRangeRule,
    // FrequencyPopup,
    // AddRowPopup,
  },

  data() {
    const dataSources = [
      "Công ty Cổ phần Lọc hóa dầu Bình Sơn",
      "Công ty CP Nhựa Hoa Sen",
      "CN1 - Ban Giám đốc",
      "Hn-Ban Tài chính Kế toán",
      "Ban Công nghệ Thông tin",
    ];
    const customButtons = [
      {
        name: "refresh",
        location: "after",
        options: {
          icon: "refresh",
          hint: "Refresh",
        },
      },
      {
        name: "clear",
        location: "after",
        options: undefined,
      },
    ];
    const infoColumns = [
      { dataField: "Ý kiến", caption: "Ý kiến", dataType: "string" },
      { dataField: "#", caption: "#", dataType: "string" },
      {
        dataField: "Điểm lấy mẫu",
        caption: "Điểm lấy mẫu",
        dataType: "string",
      },
      { dataField: "Phân xưởng", caption: "Phân xưởng", dataType: "string" },
      { dataField: "Tên mẫu", caption: "Tên mẫu", dataType: "string" },
      {
        dataField: "Mục đích chính",
        caption: "Mục đích chính",
        dataType: "string",
      },
      {
        dataField: "Quy trình lấy mẫu",
        caption: "Quy trình lấy mẫu",
        dataType: "string",
      },
      {
        dataField: "Phương pháp thử nghiệm",
        caption: "Phương pháp thử nghiệm",
        dataType: "string",
      },
      {
        dataField: "Chỉ tiêu kiểm soát",
        caption: "Chỉ tiêu kiểm soát",
        dataType: "string",
      },
      {
        dataField: "Phòng thử nghiệm",
        caption: "Phòng thử nghiệm",
        dataType: "string",
      },
      { dataField: "Giờ lấy mẫu", caption: "Giờ lấy mẫu", dataType: "date" },
      {
        dataField: "VHBT",
        caption: "VHBT",
        dataType: "boolean",
        children: [{ dataField: "Tần suất", caption: "VHBT" }],
      },
      {
        dataField: "Các dịp lễ tết (>3 ngày)",
        caption: "Các dịp lễ tết (>3 ngày)",
        dataType: "boolean",
        children: [{ dataField: "Tần suất", caption: "Lễ tết" }],
      },
      {
        caption: "KẾ HOẠCH TEST RUN DẦU THÔ",
        children: [
          { dataField: "Step at 5%", caption: "Step at 5%" },
          {
            dataField: "Step at 10%",
            caption: "Step at 10%",
            children: [
              { dataField: "5:00", caption: "5:00", dataType: "boolean" },
              { dataField: "20:00", caption: "20:00", dataType: "boolean" },
            ],
          },
          {
            dataField: "Step at 15%",
            caption: "Step at 15%",
            children: [
              { dataField: "5:00", caption: "5:00", dataType: "boolean" },
              { dataField: "20:00", caption: "20:00", dataType: "boolean" },
            ],
          },
          {
            dataField: "Final step 1(15%)",
            caption: "Final step 1(15%)",
            children: [
              { dataField: "5:00", caption: "5:00", dataType: "boolean" },
              { dataField: "20:00", caption: "20:00", dataType: "boolean" },
            ],
          },
          {
            dataField: "Final step 2(15%)",
            caption: "Final step 2(15%)",
            children: [
              { dataField: "5:00", caption: "5:00", dataType: "boolean" },
              { dataField: "20:00", caption: "20:00", dataType: "boolean" },
            ],
          },
        ],
      },
      { dataField: "CRITICAL", caption: "CRITICAL" },
    ];
    return {
      dataSource: dataSources,
      isReadOnly: true,
      isColumnAutoWidth: true,
      isAllowColumnResizing: true,
      selectEmployee: [],
      isShownSpinButtons: true,
      rowAlternationEnabled: true,
      isShownBorders: true,
      isShownRowLines: true,
      isShownColumnLines: true,
      loading: false,
      gridData: [],
      isPopupVisible: false,
      isPopupFrequencyVisible: false,
      customButtons: customButtons,
      infoColumns: infoColumns,
      searchPanelConfig: {
        visible: true,
        width: 240,
        placeholder: "Tìm kiếm...",
      },
      inputAttribute: {
        class: "search-input",
      },
      exportConfig: {
        enabled: true,
      },
      editingConfig: {
        mode: "popup",
        allowAdding: true,
        allowDeleting: true,
        allowUpdating: true,
        useIcons: true,
        popup: {
          title: "Thông tin chi tiết kế hoạch",
          showTitle: true,
          height: 720,
        },
        texts: {
          addRow: "Thêm dòng",
        },
        form: AddLineForm,
      },
      isShowClearButton: true,
      frequencyComponent: true,
    };
  },
  methods: {
    navigateStepTwo() {
      this.$router.push("/create_plan_step_two");
    },
    increaseValue() {
      if (this.year < 9999) this.year++;
    },
    decreaseValue() {
      if (this.year > 1900) this.year--;
    },
  },
};
</script>

<style>
#dataGrid {
  width: 1220px;
  height: auto;
}

.dx-datagrid .dx-header-row {
  background-color: #f3f6f9;
  color: black;
  font-weight: bold;
}
</style>
