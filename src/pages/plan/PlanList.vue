<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      background-color: #f5f5f5;
    "
  >
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
        <div style="flex: 1; width: 100%; height: 100%">
          <div style="width: 98%; height: 100%">
            <div
              style="
                flex: 1;
                display: flex;
                justify-content: space-between;
                margin: 12px 0 16px 12px;
              "
            >
              <div class="add">
                <DxButton
                  text="Thêm"
                  icon="add"
                  style="background-color: #337ab7; color: white"
                  class="add-button"
                  @click="navigateToCreatePlan"
                />
              </div>
              <div
                class="input"
                style="
                  display: flex;
                  width: 68%;
                  justify-content: space-between;
                "
              >
                <DxNumberBox
                  :value="2025"
                  :min="1900"
                  :max="9999"
                  label="Năm"
                  labelMode="floating"
                  showSpinButtons="true"
                  :show-clear-button="true"
                  style="width: 240px"
                />
                <DxSelectBox
                  :data-source="dataSource"
                  @initialized="saveSelectBoxInstance"
                  placeholder=""
                  label="Tình trạng"
                  labelMode="floating"
                  style="width: 240px"
                >
                  <DxList
                    :data-source="dataSource"
                    @initialized="saveListInstance"
                  >
                  </DxList>
                </DxSelectBox>
                <DxAutocomplete
                  :data-source="store"
                  @initialized="saveSelectBoxInstance"
                  placeholder=""
                  label="Tìm kiếm"
                  labelMode="floating"
                  :input-attr="{
                    class: 'search-input',
                  }"
                  :show-clear-button="true"
                  style="width: 280px"
                  ><template #prefix>
                    <span class="dx-icon dx-icon-search"></span>
                  </template>
                </DxAutocomplete>
              </div>
            </div>
            <plan-layout style="margin-left: 12px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { DxForm, DxItem } from "devextreme-vue/form";
import DxList from "devextreme-vue/list";
import DxButton from "devextreme-vue/button";
import { DxSelectBox } from "devextreme-vue/select-box";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxNumberBox } from "devextreme-vue/number-box";

import { createStore } from "devextreme-aspnet-data-nojquery";

import LeftMenu from "@/components/layout/LeftMenu.vue";
import PlanLayout from "@/components/layout/plan/PlanLayout.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "PlanList",
  components: {
    LeftMenu,
    PlanLayout,
    DxSelectBox,
    DxList,
    DxButton,
    DxAutocomplete,
    DxNumberBox,
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
      "Từ chối",
      "Trả lại",
      "Hoàn thành",
      "Đang phê duyệt",
      "Đang soạn",
      "Trả lại",
      "Tất cả",
    ];
    return {
      store,
      dataSource: options,
      listInstance: null,
      loading: false,
      filters: {
        year: "",
        status: "",
        search: "",
      },
    };
  },
  methods: {
    // Lưu instance của DxSelectBox khi nó được khởi tạo
    saveSelectBoxInstance(e) {
      console.log("DxSelectBox initialized:", e);
    },

    // Lưu instance của DxList khi nó được khởi tạo
    saveListInstance(e) {
      console.log("DxList initialized:", e);
    },

    navigateToCreatePlan() {
      this.$router.push({ path: "/create_plan" });
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
</style>
