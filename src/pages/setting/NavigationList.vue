<!-- Dẫn hướng - Component-->
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
      title="Dẫn hướng"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
      height="auto"
    >
      <template>
        <div style="display: flex; justify-content: space-between; width: 100%">
          <div style="width: 50%; padding-right: 8px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Nhóm:</p></div>
              <div>
                <DxSelectBox
                  placeholder="Lựa chọn..."
                  :data-source="dataSource"
                  width="400px"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Mã:</p></div>
              <div><DxAutocomplete style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Dẫn hướng:</p></div>
              <div><DxAutocomplete style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Truy vấn:</p></div>
              <div><DxAutocomplete style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Hiển thị điện thoại</p></div>
              <div><DxCheckBox :value="null" style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Mở rộng:</p></div>
              <div><DxCheckBox :value="null" style="width: 400px" /></div>
            </div>
          </div>
          <div style="width: 50%; padding-left: 8px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>STT:</p></div>
              <div><DxAutocomplete style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Tên:</p></div>
              <div><DxAutocomplete style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Icon:</p></div>
              <div><DxAutocomplete style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Đếm số:</p></div>
              <div><DxCheckBox :value="null" style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Hiển thị trang chủ điện thoại:</p></div>
              <div><DxCheckBox :value="null" style="width: 400px" /></div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div><p>Phân quyền:</p></div>
              <div>
                <DxAutocomplete
                  placeholder="Lựa chọn..."
                  style="width: 400px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Nút Lưu & Hủy -->
        <div>
          <div
            style="display: flex; justify-content: flex-end; margin-top: 8px"
          >
            <div>
              <DxButton
                text="Lưu"
                style="padding: 4px 8px; margin-right: 12px"
              />
            </div>
            <div><DxButton text="Hủy" style="padding: 4px 8px" /></div>
          </div>
        </div>
      </template>
    </DxPopup>
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
        <!-- Sử dụng component LeftMenu -->
        <left-menu />
        <div class="content" style="border-left: 1px solid #e8e8e8">
          <div class="title">
            <h3 style="text-align: center; font-weight: bold">DẪN HƯỚNG</h3>
          </div>
          <div class="input">
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
                    <DxButton text="Nhóm" class="add-button" />
                  </div>
                  <div
                    class="input"
                    style="
                      display: flex;
                      width: 30%;
                      justify-content: space-between;
                    "
                  >
                    <DxButton
                      text=""
                      icon="add"
                      class="add-button"
                      @click="togglePopup"
                    />
                    <DxAutocomplete
                      :data-source="store"
                      @initialized="saveSelectBoxInstance"
                      :input-attr="{
                        placeholder: 'Tìm kiếm...',
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
                <navigation-layout style="margin-left: 12px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DxButton from "devextreme-vue/button";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxPopup } from "devextreme-vue/popup";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";
import { DxCheckBox } from "devextreme-vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

// Import component LeftMenu và LeftMenuItem
import LeftMenu from "@/components/layout/LeftMenu.vue";
import NavigationLayout from "@/components/layout/setting/NavigationLayout.vue";

export default {
  name: "NavigationList", // Tên component chính
  components: {
    LeftMenu, // Khai báo sử dụng LeftMenu
    NavigationLayout,
    DxButton,
    DxAutocomplete,
    DxPopup,
    DxSelectBox,
    DxList,
    DxCheckBox,
    HeaderComponent,
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
      console.log("HELLO");
    },
  },
};
</script>

<style scoped>
input {
  margin: 5px;
  padding: 5px;
}

.content {
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
