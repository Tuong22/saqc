<!-- Component Lập kế hoạch Bước 3 -->
<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      background-color: #f5f5f5;
    "
  >
    <DxPopup
      :visible="isPopupVisible"
      title="Bước xử lý"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
      height="auto"
      width="600px"
    >
      <template>
        <div>
          <div>
            <div>
              <DxAutocomplete
                inputmode="decimal"
                label="STT"
                :value="1"
                labelMode="floating"
              />
            </div>
            <div>
              <DxAutocomplete
                inputmode="decimal"
                label="Tên bước"
                labelMode="floating"
              />
            </div>
            <div>
              <DxSelectBox
                label="Loại duyệt"
                labelMode="floating"
                placeholder=""
                :data-source="typeSource"
                show-clear-button="true"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </div>
            <div>
              <DxSelectBox
                label="Bước trả lại mặc định"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </div>
          </div>
          <div
            style="display: flex; justify-content: flex-end; padding-top: 20px"
          >
            <DxButton icon="save" text="Lưu" />
          </div>
        </div>
      </template>
    </DxPopup>
    <!-- Sử dụng component LeftMenu -->
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <div v-else style="flex: 1">
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
                  color: '#60afff',
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
            </div>
            <div>
              <div style="padding-top: 20px">
                <div style="display: flex; flex: 1">
                  <div style="flex: 1">
                    <DxSelectBox
                      label="Tài liệu ký số"
                      labelMode="floating"
                      placeholder=""
                      :data-source="typePDFSource"
                      show-clear-button="true"
                      width="320px"
                    >
                      <DxList :data-source="typePDFSource"> </DxList>
                    </DxSelectBox>
                  </div>
                  <!-- Mô phỏng pdf sẽ xuất -->
                  <div style="width: 70%; height: 100%; border: 2px solid red">
                    <p>
                      -------------------------------------------------------Mô
                      phỏng danh sách kế hoạch mới
                      tạo-------------------------------------------------------
                    </p>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    padding-top: 12px;
                  "
                >
                  <div style="display: flex; justify-content: space-between">
                    <div>
                      <DxButton
                        icon="arrowleft"
                        text="Bước trước"
                        @click="navigateBack"
                      />
                    </div>
                  </div>
                  <div style="display: flex; justify-content: space-between">
                    <div style="padding-right: 12px">
                      <DxButton icon="save" text="Lưu" />
                    </div>
                    <div style="padding-right: 12px">
                      <DxButton icon="todo" text="Gửi duyệt" />
                    </div>
                    <div>
                      <DxButton
                        icon="remove"
                        text="Đóng"
                        @click="navigateAll"
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

import { createStore } from "devextreme-aspnet-data-nojquery";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";
import DxButton from "devextreme-vue/button";
import { DxPopup } from "devextreme-vue/popup";
import { DxAutocomplete } from "devextreme-vue/autocomplete";

export default {
  name: "PlanCreateStepThree",
  components: {
    LeftMenu,
    StepComponent,
    HeaderComponent,
    DxSelectBox,
    DxList,
    DxButton,
    DxPopup,
    DxAutocomplete,
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
    const options = ["Quy trình mẫu kế hoạch KSCL"];
    return {
      store,
      dataSource: options,
      listInstance: null,
      loading: false,
      isPopupVisible: false,
      typeSource: ["Tuần tự", "Song song", "Song song đồng thuận"],
      customButtons: [
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
      ],
      typePDFSource: [
        "[2025_41_KH-QLCL-NCPT-VHSX]KẾ HOẠCH KIỂM SOÁT CHẤT LƯỢNG NĂM 2025_1.pdf",
      ],
      addButtons: [
        {
          name: "add",
          location: "after",
          options: {
            icon: "add",
            hint: "Add",
          },
        },
      ],
    };
  },
  methods: {
    navigateBack() {
      this.$router.push("/create_plan_step_two");
    },
    navigateAll() {
      this.$router.push("/create_plan");
    },
  },
};
</script>
