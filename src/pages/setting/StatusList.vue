<!-- Tình trạng -->
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
        <div style="flex: 1; margin-left: 12px; border-left: 1px solid #e8e8e8">
          <h3 style="text-align: center; font-weight: bold">TÌNH TRẠNG</h3>
          <function-layout style="padding-left: 8px; padding-right: 12px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FunctionLayout from "@/components/FunctionLayout.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "StatusList", 
  components: {
    LeftMenu,
    FunctionLayout,
    HeaderComponent,
  },
  data() {
    return {
      filters: {
        name: "",
        age: "",
        city: "",
      },
      loading: false,
      users: [
        { name: "Alice", age: 25, city: "Hà Nội" },
        { name: "Bob", age: 30, city: "Hồ Chí Minh" },
        { name: "Charlie", age: 35, city: "Đà Nẵng" },
        { name: "David", age: 28, city: "Hà Nội" },
        { name: "Eve", age: 22, city: "Hồ Chí Minh" },
      ],
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
