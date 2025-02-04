<!-- Mẫu ký số -->
<template>
  <div style="display: flex; justify-content: space-between">
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
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <!-- Sử dụng component LeftMenu -->
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
        <div style="flex: 1; margin-left: 12px; border-left: 1px solid #e8e8e8; padding-left: 12px; padding-right: 12px">
          <h3 style="text-align: center; font-weight: bold">
            THÊM MỚI QUY TRÌNH
          </h3>
          <div>
            <div>
              <div>
                <DxAutocomplete
                  :data-source="store"
                  label="Tên quy trình"
                  labelMode="floating"
                  placeholder=""
                  :show-clear-button="true"
                />
              </div>
              <div style="padding-top: 12px; padding-bottom: 20px">
                <DxSelectBox
                  label="Loại áp dụng"
                  labelMode="floating"
                  placeholder=""
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <DxButton text="Tạo bước" icon="add" @click="addStep" />
              </div>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 210px;
                "
              >
                <div>
                  <DxButton
                    text="Quay lại"
                    icon="arrowleft"
                    @click="navigateBack"
                  />
                </div>
                <div><DxButton text="Lưu" icon="save" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";
import DxButton from "devextreme-vue/button";
import { DxPopup } from "devextreme-vue/popup";

// Import component LeftMenu và LeftMenuItem
import LeftMenu from "@/components/layout/LeftMenu.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "WorkflowList", // Tên component chính
  components: {
    LeftMenu, // Khai báo sử dụng LeftMenu
    DxSelectBox,
    DxList,
    DxAutocomplete,
    DxButton,
    DxPopup,
    HeaderComponent,
  },
  data() {
    return {
      dataSource: [],
      isPopupVisible: false,
      typeSource: ["Tuần tự", "Song song", "Song song đồng thuận"],
    };
  },
  methods: {
    navigateBack() {
      this.$router.push("/workflow");
    },
    addStep() {
      this.isPopupVisible = !this.isPopupVisible;
    },
  },
};
</script>
