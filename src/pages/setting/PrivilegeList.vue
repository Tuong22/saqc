<!-- Phân quyền - Privilege-->
<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      background-color: transparent;
    "
  >
    <DxPopup
      :visible="isPopupVisible"
      title="Thêm vai trò người dùng"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
      width="500px"
      height="260px"
    >
      <template>
        <div>
          <div>
            <div><p>Người dùng</p></div>
            <div>
              <DxSelectBox
                label="Chọn người dùng"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </div>
          </div>
          <div
            style="display: flex; justify-content: flex-end; padding-top: 40px"
          >
            <div>
              <DxButton text="Lưu" />
            </div>
            <div><DxButton text="Đóng" /></div>
          </div>
        </div> </template
    ></DxPopup>
    <!-- Chưa tạo nút để thực thi hành vi thêm vai trò -->
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
        <div style="flex: 1; margin-left: 12px; border-left: 1px solid #e8e8e8">
          <div>
            <h3 style="text-align: center; font-weight: bold">PHÂN QUYỀN</h3>
            <department-tree />
            <!-- Nút cài đặt tạm thời để hiển thị Popup sau khi nhấn -->
            <DxButton icon="add" text="" @click="togglePopup" />
          </div>
        </div>
      </div>
    </div>
    <!-- Sử dụng component LeftMenu -->
  </div>
</template>

<script>
// Import component LeftMenu và LeftMenuItem
import LeftMenu from "@/components/layout/LeftMenu.vue";
import DepartmentTree from "@/components/DepartmentTree.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

import { DxPopup } from "devextreme-vue/popup";
import DxButton from "devextreme-vue/button";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";

export default {
  name: "PrivilegeList", // Tên component chính
  components: {
    LeftMenu, // Khai báo sử dụng LeftMenu
    DepartmentTree, // Khai báo sử dụng DepartmentTree
    HeaderComponent,
    DxPopup,
    DxButton,
    DxSelectBox,
    DxList,
  },
  data() {
    return {
      isPopupVisible: false,
      loading: false,
      dataSource: [],
    };
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
  },
};
</script>