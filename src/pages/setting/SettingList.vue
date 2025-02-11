<!-- Cài đặt -->
<template>
  <div style="display: flex; justify-content: space-between">
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
        <div
          style="
            flex: 1;
            background-color: transparent;
            border-left: 1px solid #e8e8e8;
          "
        >
          <div style="flex: 1">
            <div
              style="
                width: 98%;
                background-color: white;
                box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
                margin-left: 12px;
                padding-top: 4px;
              "
            >
              <div class="title">
                <h3 style="text-align: center; font-weight: bold">CÀI ĐẶT</h3>
              </div>
              <div
                style="
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  padding-bottom: 20px;
                "
              >
                <div style="width: 500px; padding-right: 20px">
                  <DxAutocomplete
                    :data-source="store"
                    placeholder=""
                    label="Mã số kế hoạch"
                    labelMode="floating"
                    :show-clear-button="true"
                    style="width: 500px"
                  >
                  </DxAutocomplete>
                </div>
                <div style="width: 500px; padding-left: 20px">
                  <p style="font-weight: bold; font-size: 16px">
                    Cho phép tất cả người dùng truy cập
                  </p>
                  <DxCheckBox />
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex: 1;
                  justify-content: flex-end;
                  padding-right: 12px;
                  padding-bottom: 12px;
                "
              >
                <div style="margin-right: 12px">
                  <DxButton text="Lưu" icon="save" />
                </div>
                <div>
                  <DxButton text="Đóng" icon="remove" />
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
import HeaderComponent from "@/components/header/HeaderComponent.vue";

import { DxCheckBox } from "devextreme-vue";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import DxButton from "devextreme-vue/button";

export default {
  name: "SettingList",
  components: {
    LeftMenu,
    DxCheckBox,
    DxAutocomplete,
    DxButton,
    HeaderComponent,
  },
  data() {
    return {
      loading: false,
      store: ["ABC", "DEF", "GHI", "XYZ"],
    };
  },
};
</script>
