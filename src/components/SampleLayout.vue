<template>
  <div>
    <div
      style="display: flex; width: 100%; height: 100%; background-color: white"
    >
      <div style="flex: 1"></div>
      <div style="display: flex; width: 32%; padding-bottom: 12px">
        <!-- upload -->
        <div style="display: flex; flex: 1">
          <DxButton text="" icon="upload" style="margin-right: 8px" />
          <DxButton text="" icon="add" />
        </div>
        <DxAutocomplete
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
        <!-- add -->
        <!-- Search -->
      </div>
    </div>
    <div>
      <DxDataGrid
        id="dataGrid"
        :data-source="gridData"
        :show-borders="isShowBorders"
        :row-alternation-enabled="isRowAlternationEnabled"
        @selection-changed="selectItems"
        :show-row-lines="isShowRowLines"
        :show-column-lines="isShowColumnLines"
        style="border: 1px solid #ccc"
      >
        <DxHeaderFilter :visible="true" />
        <DxPaging :enabled="true" :pageSize="10" />
      <DxPager
        :visible="true"
        :showPageSizeSelector="true"
        :allowedPageSizes="[10, 25, 50, 100]"
        :showInfo="true"
      />
        <DxColumn data-field="#" alignment="center" width="100px"> </DxColumn>
        <DxColumn data-field="Mã"> </DxColumn>
        <DxColumn data-field="Tên" alignment="left"> </DxColumn>
        <DxColumn data-field="Màu chữ"></DxColumn>
        <DxColumn data-field="Màu nền"></DxColumn>
        <DxColumn data-field=""></DxColumn>
        <DxSelection mode="single" />
      </DxDataGrid>
    </div>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxHeaderFilter,
  DxPaging,
  DxPager
} from "devextreme-vue/data-grid";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import DxButton from "devextreme-vue/button";

export default {
  name: "SampleLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
    DxAutocomplete,
    DxButton,
    DxPaging,
    DxPager
  },
  data() {
    return {
      gridData: [],
      isShowBorders: true,
      isRowAlternationEnabled: true,
      isShowRowLines: true,
      isShowColumnLines: true
    }
  },
  methods: {
    selectItems() {
      console.log("Items selected!")
    }
  }
};
</script>
