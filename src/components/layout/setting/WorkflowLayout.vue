<template>
  <!-- Component dành riêng cho KIỂM SOÁT CHẤT LƯỢNG -->
  <div>
    <div class="workflowFrame">
      <div class="empFrame"></div>
      <div class="toolbars">
        <DxButton text="" icon="add" class="add" @click="createWorkflow" />
        <DxAutocomplete
          :input-attr="{
            placeholder: 'Tìm kiếm...',
            class: 'search-input',
          }"
          :show-clear-button="true"
          class="searchItemsInput"
        />
      </div>
    </div>
    <DxDataGrid
      id="dataGrid"
      :show-borders="isShowBorders"
      :row-alternation-enabled="isRowAlternationEnabled"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      style="border: none"
    >
      <DxHeaderFilter :visible="true" />
      <DxPaging :enabled="true" :pageSize="10" />
      <DxPager
        :visible="true"
        :showPageSizeSelector="true"
        :allowedPageSizes="[10, 25, 50, 100]"
        :showInfo="true"
      />
      <!-- Cột Tên với bộ lọc -->
      <DxColumn data-field="Tên" alignment="left"> </DxColumn>

      <!-- Các cột khác -->
      <DxColumn data-field="Loại áp dụng"></DxColumn>
      <DxColumn data-field="" data-type="date"></DxColumn>
      <DxSelection mode="single" />
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxHeaderFilter,
  DxPaging,
  DxPager,
} from "devextreme-vue/data-grid";
import DxTextBox from "devextreme-vue/text-box"; // Import DxTextBox
import DxButton from "devextreme-vue/button";
import { DxAutocomplete } from "devextreme-vue/autocomplete";

export default {
  name: "WorkflowLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxTextBox, // Đăng ký DxTextBox
    DxHeaderFilter,
    DxButton,
    DxAutocomplete,
    DxPaging,
    DxPager,
  },
  data() {
    return {
      selectedEmployee: undefined,
      filterText: "", // Biến lưu trữ bộ lọc
      gridData: [],
      isShowBorders: true,
      isRowAlternationEnabled: true,
      isShowRowLines: true,
      isShowColumnLines: true,
    };
  },
  methods: {
    createWorkflow() {
      this.$router.push("/create_workflow");
    },
    onFilterChanged(e) {
      this.filterText = e.value;
      this.gridData = this.gridData.filter((item) =>
        item["Mã số"].toString().includes(this.filterText)
      );
    },
  },
};
</script>

<style src="@/assets/css/workflowLayout.css"></style>
