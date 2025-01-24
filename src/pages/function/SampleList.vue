<!-- Tình trạng -->
<template>
  <div style="display: flex; justify-content: space-between">
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <!-- Sử dụng component LeftMenu -->
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
          <h3 style="text-align: center; font-weight: bold">BỘ MẪU</h3>
          <sample-layout style="padding-left: 8px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import component LeftMenu và LeftMenuItem
import SampleLayout from "@/components/SampleLayout.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "SampleList", // Tên component chính
  components: {
    LeftMenu, // Khai báo sử dụng LeftMenu
    SampleLayout,
    HeaderComponent,
  },
  data() {
    return {
      loading: false,
    };
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
.input {
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}
</style>
