<!-- Dẫn hướng -->
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
        <left-menu />
        <div class="content" style="border-left: 1px solid #e8e8e8">
          <div class="title">
            <h3 style="text-align: center; font-weight: bold">DẪN HƯỚNG</h3>
          </div>
          <div class="input">
            <div style="flex: 1; width: 100%; height: 100%">
              <div style="width: 98%; height: 100%">
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

import HeaderComponent from "@/components/header/HeaderComponent.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
import NavigationLayout from "@/components/layout/setting/NavigationLayout.vue";

export default {
  name: "NavigationList", 
  components: {
    LeftMenu, 
    NavigationLayout,
    HeaderComponent,
  },
  data() {
    return {
      isPopupVisible: false,
      loading: false,
      dataSource: [],
    };
  },
};
</script>

<style>
input {
  margin: 5px;
  padding: 5px;
}
.add .dx-icon {
  color: black !important; 
}
.content {
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
