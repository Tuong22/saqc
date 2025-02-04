<template>
  <!-- Component dành riêng cho KIỂM SOÁT CHẤT LƯỢNG -->
  <div style="flex: 1">
    <div style="width: 100%; display: flex">
      <div style="flex: 1"></div>
      <div
        class="input"
        style="
          display: flex;
          width: 28%;
          justify-content: space-between;
          padding-bottom: 12px;
          padding-top: 12px;
        "
      >
        <DxButton
          text=""
          icon="add"
          class="add"
          @click="createWorkflow"
        />
        <DxAutocomplete
          :data-source="store"
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
    <DxDataGrid
      id="dataGrid"
      show-borders="true"
      row-alternation-enabled="true"
      :data-source="gridData"
      show-row-lines="true"
      show-column-lines="true"
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
    <DxPagination />
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
  name: "ProcessLayout", // Tên component chính
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

<style scoped>
/* Màu nền tiêu đề */
.custom-header {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: center;
  color: #333;
  padding: 10px;
  border-radius: 4px;
}

.filter {
  margin-top: 8px;
}

#dataGrid {
  height: 500px;
  border: 1px solid #ccc;
}

#app-container {
  width: 900px;
  position: relative;
}

#selected-employee {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
