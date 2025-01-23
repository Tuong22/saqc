<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      background-color: #f5f5f5;
    "
  >
    <!-- Popup - Thêm dòng -->
    <DxPopup
      :visible="isPopupVisible"
      title="Thông tin chi tiết kế hoạch"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
    >
      <template>
        <div style="flex: 1">
          <div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <DxSelectBox
                  label="Bộ mẫu"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Phân xưởng"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Điểm lấy mẫu"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
            </div>
            <div>
              <DxSelectBox
                label="Tên mẫu"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
                @initialized="saveSelectBoxInstance"
              >
                <DxList
                  :data-source="dataSource"
                  @initialized="saveListInstance"
                >
                </DxList>
              </DxSelectBox>
            </div>
            <div>
              <DxSelectBox
                label="Mục đích chính"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
                @initialized="saveSelectBoxInstance"
              >
                <DxList
                  :data-source="dataSource"
                  @initialized="saveListInstance"
                >
                </DxList>
              </DxSelectBox>
            </div>
            <div>
              <DxSelectBox
                label="Chỉ tiêu kiểm soát"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
                @initialized="saveSelectBoxInstance"
              >
                <DxList
                  :data-source="dataSource"
                  @initialized="saveListInstance"
                >
                </DxList>
              </DxSelectBox>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <DxSelectBox
                  label="Quy trình lấy mẫu"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Phương pháp thử nghiệm"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Phòng thử nghiệm"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
            </div>
            <div style="display: flex">
              <div style="margin-right: 8px">
                <DxAutocomplete
                  labelMode="floating"
                  label="Giờ lấy mẫu"
                  width="390px"
                />
              </div>
              <div>
                <DxSelectBox
                  label="CRITICAL"
                  labelMode="floating"
                  width="390px"
                  placeholder=""
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
              </div>
            </div>
          </div>
          <div>
            <div><h4 style="color: #fa8a6d">KẾ HOẠCH TEST RUN DẦU THÔ</h4></div>
            <div style="display: flex; justify-content: space-between; flex: 1">
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Step At 5%
                  </p>
                </div>
                <div><DxCheckBox :value="null" /> Step at 5%</div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Step At 10%
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox :value="null" /> 5:00</div>
                  <div><DxCheckBox :value="null" /> 20:00</div>
                </div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Step At 15%
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox :value="null" /> 5:00</div>
                  <div><DxCheckBox :value="null" /> 20:00</div>
                </div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Final Step 1(15%)
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox :value="null" /> 5:00</div>
                  <div><DxCheckBox :value="null" /> 20:00</div>
                </div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Final Step 2(15%)
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox :value="null" /> 5:00</div>
                  <div><DxCheckBox :value="null" /> 20:00</div>
                </div>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div style="width: 580px">
                <DxAutocomplete
                  :data-source="store"
                  label="Tần suất VHBT"
                  :buttons="addButtons"
                  labelMode="floating"
                  @initialized="saveSelectBoxInstance"
                />
              </div>
              <div style="width: 580px">
                <DxAutocomplete
                  :data-source="store"
                  label="Tần suất các dịp lễ tết (>3 ngày)"
                  :buttons="addButtons"
                  labelMode="floating"
                  @initialized="saveSelectBoxInstance"
                />
              </div>
            </div>
            <div
              style="
                width: 100%;
                justify-content: flex-end;
                display: flex;
                padding-top: 8px;
              "
            >
              <DxButton text="Lưu" icon="save" />
            </div>
          </div>
        </div>
      </template>
    </DxPopup>
    <!-- Sử dụng component LeftMenu -->
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
                :step="{ count: '1', name: 'THÔNG TIN KẾ HOẠCH' }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 1px solid black;
                  width: 32%;
                "
              />
              <step-component
                :step="{ count: '2', name: 'QUY TRÌNH' }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 1px solid black;
                  width: 32%;
                "
              />
              <step-component
                :step="{ count: '3', name: 'CHỌN VÙNG KÝ' }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 1px solid black;
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
                      :show-clear-button="true"
                      ><template #content>
                        <div class="number-box-icons">
                          <span @click="increaseValue" class="icon-up">▲</span>
                          <span @click="decreaseValue" class="icon-down"
                            >▼</span
                          >
                        </div>
                      </template></DxNumberBox
                    >
                  </div>
                  <div style="width: 24%">
                    <DxAutocomplete
                      :value="'2025/40/KH-QLCL-NCPT-VHSX'"
                      :data-source="store"
                      label="Mã số"
                      :buttons="customButtons"
                      labelMode="floating"
                      @initialized="saveSelectBoxInstance"
                    />
                  </div>
                  <div style="width: 24%">
                    <DxAutocomplete
                      :value="'QUẢN TRỊ'"
                      labelMode="floating"
                      :data-source="store"
                      @initialized="saveSelectBoxInstance"
                      label="Họ và tên"
                    />
                  </div>
                  <div style="width: 24%">
                    <DxSelectBox
                      label="Đơn vị/Ban"
                      labelMode="floating"
                      placeholder=""
                      :data-source="dataSource"
                      @initialized="saveSelectBoxInstance"
                    >
                      <DxList
                        :data-source="dataSource"
                        @initialized="saveListInstance"
                      >
                      </DxList>
                    </DxSelectBox>
                  </div>
                </div>
                <div>
                  <DxAutocomplete
                    :data-source="store"
                    @initialized="saveSelectBoxInstance"
                    label="Tiêu đề"
                    labelMode="floating"
                    :input-attr="{
                      class: 'search-input',
                    }"
                    style="padding-top: 4px; margin-top: 20px"
                  />
                  <DxAutocomplete
                    :data-source="store"
                    @initialized="saveSelectBoxInstance"
                    label="Mô tả"
                    labelMode="floating"
                    :input-attr="{
                      class: 'search-input',
                    }"
                    style="padding-top: 4px; margin-top: 20px"
                  />
                  <DxAutocomplete
                    :data-source="store"
                    label="Ghi chú"
                    labelMode="floating"
                    @initialized="saveSelectBoxInstance"
                    :input-attr="{
                      class: 'search-input',
                    }"
                    style="padding-top: 4px; margin-top: 20px"
                  />
                  <!-- Mẫu ký số -->
                  <DxSelectBox
                    :data-source="dataSource"
                    label="Mẫu ký số"
                    labelMode="floating"
                    placeholder=""
                    @initialized="saveSelectBoxInstance"
                    style="padding-top: 4px; margin-top: 20px"
                  >
                    <DxList
                      :data-source="dataSource"
                      @initialized="saveListInstance"
                    >
                    </DxList>
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
                  <div
                    style="
                      display: flex;
                      width: 30%;
                      justify-content: space-between;
                    "
                  >
                    <div>
                      <DxButton
                        text="Thêm dòng"
                        icon="add"
                        @click="togglePopup"
                      />
                    </div>
                    <div>
                      <DxButton text="Tải mẫu" icon="download" />
                    </div>
                    <div>
                      <DxButton text="Import" icon="upload" />
                    </div>
                  </div>
                  <div style="margin-left: 16px; width: 280px">
                    <DxAutocomplete
                      :data-source="store"
                      @initialized="saveSelectBoxInstance"
                      :input-attr="{
                        placeholder: 'Tìm kiếm...',
                        class: 'search-input',
                      }"
                      :show-clear-button="true"
                      style="width: 268px"
                      ><template #prefix>
                        <span class="dx-icon dx-icon-search"></span>
                      </template>
                    </DxAutocomplete>
                  </div>
                </div>
                <div style="width: 100%">
                  <DxDataGrid
                    id="dataGrid"
                    :allow-column-reordering="true"
                    :data-source="gridData"
                    :show-borders="isShownBorders"
                    :row-alternation-enabled="rowAlternationEnabled"
                    @selection-changed="selectEmployee"
                    :show-row-lines="isShownRowLines"
                    :show-column-lines="isShownColumnLines"
                  >
                    <DxHeaderFilter :visible="true" />
                    <DxPaging :enabled="true" :pageSize="10" />
                    <DxPager
                      :visible="true"
                      :showPageSizeSelector="true"
                      :allowedPageSizes="[10, 25, 50, 100]"
                      :showInfo="true"
                    />
                    <DxColumn data-field="Ý kiến "> </DxColumn>
                    <DxColumn data-field="#" alignment="center"> </DxColumn>
                    <DxColumn data-field="Điểm lấy mẫu"> </DxColumn>
                    <DxColumn data-field="Phân xưởng"> </DxColumn>
                    <DxColumn data-field="Têm mẫu"></DxColumn>
                    <DxColumn data-field="Mục đích chính"></DxColumn>
                    <DxColumn data-field="Quy trình lấy mẫu"></DxColumn>
                    <DxColumn data-field="Phương pháp thử nghiệm"></DxColumn>
                    <DxColumn data-field="Chỉ tiêu"></DxColumn>
                    <DxColumn data-field=""></DxColumn>
                    <DxSelection mode="single" />
                  </DxDataGrid>
                </div>
              </div>
              <div>
                <div style="width: 100%; padding-left: 12px">
                  <h4 style="color: #fa896b">TỆP ĐÍNH KÈM</h4>
                </div>
                <div>
                  <DxButton text="Chọn tập tin" style="margin-right: 8px" />
                  hoặc Thả tập tin vào đây
                </div>
                <div style="width: 100%; display: flex; padding-top: 30px">
                  <div>
                    <DxButton text="Tiếp theo" icon="arrowright" />
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
  DxSelection,
  DxHeaderFilter,
  DxPaging,
  DxPager,
} from "devextreme-vue/data-grid";
import DxButton from "devextreme-vue/button";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxNumberBox } from "devextreme-vue/number-box";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";
import { createStore } from "devextreme-aspnet-data-nojquery";
import { DxPopup } from "devextreme-vue/popup";
import { DxCheckBox } from "devextreme-vue";

export default {
  name: "PlanList",
  components: {
    LeftMenu,
    StepComponent,
    DxButton,
    DxAutocomplete,
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
    DxNumberBox,
    DxSelectBox,
    DxList,
    DxPaging,
    DxPager,
    DxPopup,
    DxCheckBox,
    HeaderComponent,
  },

  data() {
    const serviceUrl = "http://localhost:8080/#/all_plans";
    const store = createStore({
      key: "ID",
      loadUrl: serviceUrl,
      insertUrl: serviceUrl,
      updateUrl: serviceUrl,
      deleteUrl: serviceUrl,
    });
    const options = [
      "Công ty Cổ phần Lọc hóa dầu Bình Sơn",
      "Công ty CP Nhựa Hoa Sen",
      "CN1 - Ban Giám đốc",
      "Hn-Ban Tài chính Kế toán",
      "Ban Công nghệ Thông tin",
    ];
    return {
      store,
      selectEmployee: [],
      dataSource: options,
      listInstance: null,
      isShownSpinButtons: true,
      rowAlternationEnabled: true,
      isShownBorders: true,
      isShownRowLines: true,
      isShownColumnLines: true,
      loading: false,
      filters: {
        year: "",
        status: "",
        search: "",
      },
      gridData: [],
      isPopupVisible: false,
      customButtons: [
        {
          name: "refresh", // Tên của button
          location: "after", // Vị trí: trước ('before') hoặc sau ('after')
          options: {
            icon: "refresh", // Icon hiển thị
            hint: "Refresh", // Gợi ý tooltip
            // onClick: () => {
            //   alert("Refresh Clicked!");
            // },
          },
        },
        {
          name: "clear",
          location: "after",
          options: undefined, // Nút clear mặc định
        },
      ],
      addButtons: [
        {
          name: "add", // Tên của button
          location: "after", // Vị trí: trước ('before') hoặc sau ('after')
          options: {
            icon: "add", // Icon hiển thị
            hint: "Add", // Gợi ý tooltip
            // onClick: () => {
            //   alert("Refresh Clicked!");
            // },
          },
        },
      ],
    };
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    // Lưu instance của DxSelectBox khi nó được khởi tạo
    saveSelectBoxInstance(e) {
      console.log("DxSelectBox initialized:", e);
    },

    // Lưu instance của DxList khi nó được khởi tạo
    saveListInstance(e) {
      console.log("DxList initialized:", e);
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

<style scoped>
.add-button .dx-button-icon {
  background-color: white;
}

.search-input {
  padding-left: 30px; /* Thêm khoảng cách để chứa icon */
}

.search-input::before {
  content: "\f002"; /* Mã unicode cho icon tìm kiếm (FontAwesome) */
  font-family: "FontAwesome"; /* Font của FontAwesome */
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.number-box-icons {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.icon-up,
.icon-down {
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  margin: 2px 0;
  color: #555;
}

.icon-up:hover,
.icon-down:hover {
  color: #000;
}
</style>
