<!-- Component cho Trang WorkflowList.vue -->
<template>
  <div>
    <DxDataGrid
      id="dataGrid"
      :show-borders="isShowBorders"
      :row-alternation-enabled="isRowAlternationEnabled"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      :search-panel="{ visible: true, width: 240, placeholder: 'Tìm kiếm...' }"
      style="border: none"
      :editing="{
        mode: 'form',
        allowAdding: true,
        allowDeleting: true,
        useIcons: true,
        popup: {
          title: 'Thêm mới quy trình',
          showTitle: true,
          height: 220,
        },
      }"
    >
      <DxHeaderFilter :visible="true" />
      <DxPaging :enabled="true" :pageSize="10" />
      <DxPager
        :visible="true"
        :showPageSizeSelector="true"
        :allowedPageSizes="[10, 25, 50, 100]"
        :showInfo="true"
      />
      <DxToolbar>
        <DxItem name="addRowButton" />
        <DxItem name="searchPanel" />
      </DxToolbar>
      <DxColumn data-field="Tên" alignment="left"> </DxColumn>
      <DxColumn data-field="Loại áp dụng"></DxColumn>
      <DxSelection mode="single" />
    </DxDataGrid>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxHeaderFilter,
  DxPaging,
  DxPager,
  DxToolbar,
  DxItem,
} from "devextreme-vue/data-grid";

export default {
  name: "WorkflowLayout",
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
    DxPaging,
    DxPager,
    DxToolbar,
    DxItem,
  },
  data() {
    return {
      selectedEmployee: undefined,
      filterText: "",
      gridData: [],
      isShowBorders: true,
      isRowAlternationEnabled: true,
      isShowRowLines: true,
      isShowColumnLines: true,
    };
  },
};
</script>

<style src="@/assets/css/workflowLayout.css"></style>
