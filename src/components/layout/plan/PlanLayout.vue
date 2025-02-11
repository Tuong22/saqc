<!-- Component cho Trang PlanList.vue -->
<template>
  <div style="flex: 1">
    <div style="flex: 1; padding-top: 20px">
      <!-- Popup hiển thị thông tin chi tiết -->

      <DxDataGrid
        id="dataGrid"
        :data-source="gridData"
        :show-row-lines="isShowRowLines"
        :show-column-lines="isShowColumnLines"
        :show-borders="isShowBorders"
        :search-panel="{
          visible: true,
          width: 240,
          placeholder: 'Tìm kiếm...',
        }"
        @row-click="onRowClick"
      >
        <DxToolbar>
          <DxItem location="before">
            <template #default>
              <DxButton
                text="Thêm"
                icon="add"
                style="
                  background-color: #337ab7;
                  color: white !important;
                  font-weight: bold;
                "
                class="add-button"
                @click="navigateToCreatePlan"
              />
            </template>
          </DxItem>
          <DxItem location="after">
            <template #default>
              <DxNumberBox
                :value="2025"
                :min="1900"
                :max="9999"
                label="Năm"
                labelMode="floating"
                :showSpinButtons="isShowSpinBtn"
                :show-clear-button="true"
                style="width: 240px"
              />
            </template>
          </DxItem>
          <DxItem location="after">
            <template #default>
              <DxSelectBox
                :data-source="dataSource"
                placeholder=""
                label="Tình trạng"
                labelMode="floating"
                style="width: 240px"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </template>
          </DxItem>
          <DxItem name="searchPanel" />
        </DxToolbar>
        <DxHeaderFilter :visible="true" />
        <DxPaging :enabled="true" :pageSize="10" />
        <DxPager
          :visible="true"
          :showPageSizeSelector="true"
          :allowedPageSizes="[10, 25, 50, 100]"
          :showInfo="true"
        />
        <DxColumn data-field="Mã số" alignment="left" :width="92" />
        <DxColumn data-field="Tiêu đề" :width="240" alignment="center" />
        <DxColumn
          data-field="Năm KH"
          data-type="date"
          :width="120"
          alignment="center"
        />
        <DxColumn data-field="Người tạo" :width="160" alignment="center" />
        <DxColumn data-field="Bước xử lý" alignment="center" />
        <DxColumn data-field="Người xử lý" alignment="center" />
        <DxColumn data-field="Tình trạng" alignment="center" />
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
  DxPager,
  DxItem,
  DxToolbar,
} from "devextreme-vue/data-grid";

import DxButton from "devextreme-vue/button";
import { DxSelectBox } from "devextreme-vue/select-box";
import { DxNumberBox } from "devextreme-vue/number-box";
import { DxList } from "devextreme-vue/list";

export default {
  name: "PlanLayout",
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxPaging,
    DxHeaderFilter,
    DxPager,
    DxItem,
    DxToolbar,
    DxSelectBox,
    DxNumberBox,
    DxButton,
    DxList,
  },
  data() {
    return {
      popupVisible: false,
      selectedRow: null,
      isShowRowLines: true,
      isShowColumnLines: true,
      isShowBorders: true,
      isShowSpinBtn: true,
      dataSource: [
        "Từ chối",
        "Trả lại",
        "Hoàn thành",
        "Đang phê duyệt",
        "Đang soạn",
        "Trả lại",
        "Tất cả",
      ],
      gridData: [
        {
          "Mã số": 1,
          "Tiêu đề": "Kế hoạch 1",
          "Năm KH": "2025",
          "Người tạo": "Người A",
          "Bước xử lý": "Bước 1",
          "Người xử lý": "Người B",
          "Tình trạng": "Đang xử lý",
        },
        {
          "Mã số": 2,
          "Tiêu đề": "Kế hoạch 2",
          "Năm KH": "2025",
          "Người tạo": "Người C",
          "Bước xử lý": "Bước 2",
          "Người xử lý": "Người D",
          "Tình trạng": "Hoàn thành",
        },
        {
          "Mã số": 3,
          "Tiêu đề": "Kế hoạch 3",
          "Năm KH": "2025",
          "Người tạo": "Người E",
          "Bước xử lý": "Bước 3",
          "Người xử lý": "Người F",
          "Tình trạng": "Đang phê duyệt",
        },
      ],
    };
  },
  methods: {
    navigateToCreatePlan() {
      this.$router.push({ path: "/create_plan" });
    },
    onRowClick(e) {
      this.selectedRow = e.data; // Lưu hàng được click vào biến selectedRow
      this.popupVisible = !this.popupVisible; // Hiển thị popup
    },
  },
};
</script>

<style scoped>
.add-button .dx-icon {
  background-color: white !important;
}
</style>

<style>
.add-button .dx-icon {
  color: white !important;
}
</style>
