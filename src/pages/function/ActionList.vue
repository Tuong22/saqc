<!-- Tình trạng -->
<template>
  <div class="fullFunctionFrame">
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
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
import FunctionLayout from "@/components/FunctionLayout.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "ActionList", 
  components: {
    LeftMenu, 
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
