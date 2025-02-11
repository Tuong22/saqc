<!-- Vai trò - Component-->
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
        <!-- Sử dụng component LeftMenu -->
        <left-menu />
        <div class="content" style="flex: 1; border-left: 1px solid #e8e8e8">
          <div style="flex: 1; margin-left: 12px">
            <div class="title">
              <h3 style="text-align: center; font-weight: bold">VAI TRÒ</h3>
            </div>
            <div class="input">
              <div style="flex: 1; width: 100%; height: 100%">
                <div style="width: 98%; height: 100%">
                  <div
                    style="
                      flex: 1;
                      display: flex;
                      justify-content: flex-end;
                      margin: 12px 0 16px 12px;
                    "
                  >
                    <!-- <div
                      class="input"
                      style="display: flex; justify-content: space-between"
                    >
                      <DxButton text="" icon="add" class="add" />
                    </div> -->
                  </div>
                  <role-layout style="margin-left: 12px" />
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
// import DxButton from "devextreme-vue/button";

// Import component LeftMenu và LeftMenuItem
import LeftMenu from "@/components/layout/LeftMenu.vue";
import RoleLayout from "@/components/layout/setting/RoleLayout.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "RoleList", // Tên component chính
  components: {
    LeftMenu, // Khai báo sử dụng LeftMenu
    RoleLayout,
    HeaderComponent,
    // DxButton,
  },
  data () {
    return {
      loading: false,
    }
  }
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
