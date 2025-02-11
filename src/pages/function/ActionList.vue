<!-- Tình trạng -->
<template>
  <div class="fullFunctionFrame">
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <!-- Sử dụng component LeftMenu -->
    <div v-else style="flex: 1">
      <header-component />
      <div
        :style="{ background: $store.state.theme.functionList.backgroundColor }"
        class="positionFrame"
      >
        <left-menu />
        <div class="contentFrame">
          <h3 class="title">HÀNH ĐỘNG</h3>
          <function-layout class="functionLayout" items="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import component LeftMenu và LeftMenuItem
import FunctionLayout from "@/components/FunctionLayout.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "ActionList", // Tên component chính
  components: {
    LeftMenu, // Khai báo sử dụng LeftMenu
    FunctionLayout,
    HeaderComponent,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style src="@/assets/css/function.css"></style>
