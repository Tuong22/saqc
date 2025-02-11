<template>
  <!-- Component dành riêng cho KIỂM SOÁT CHẤT LƯỢNG -->
  <div style="flex: 1; padding-top: 40px">
    <DxDataGrid
      id="dataGrid"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      :show-borders="isShowBorders"
    >
      <DxToolbar>
        <DxItem location="before">
          <template #default>
            <DxButton
              text="Thêm"
              icon="add"
              style="background-color: #337ab7; color: white"
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

        <!-- <DxItem location="after">
          <template #default>
            <DxAutocomplete
              placeholder=""
              label="Tìm kiếm"
              labelMode="floating"
              :input-attr="{
                class: 'search-input',
              }"
              :show-clear-button="true"
              style="width: 280px"
              ><template #prefix>
                <span class="dx-icon dx-icon-search"></span>
              </template>
            </DxAutocomplete>
          </template>
        </DxItem> -->
      </DxToolbar>
      <DxHeaderFilter :visible="true" />
      <!-- Tích hợp pagination -->
      <DxPaging :enabled="true" :pageSize="10" />
      <DxPager
        :visible="true"
        :showPageSizeSelector="true"
        :allowedPageSizes="[10, 25, 50, 100]"
        :showInfo="true"
      />
      <!-- Cột Mã số với bộ lọc -->
      <DxColumn data-field="Mã số" alignment="left" :width="160" />
      <!-- Các cột khác -->
      <DxColumn data-field="Tiêu đề" :width="240" />
      <DxColumn data-field="Năm KH" data-type="date" :width="120" />
      <DxColumn data-field="Người tạo" :width="160" />
      <DxColumn data-field="Bước xử lý" />
      <DxColumn data-field="Người xử lý" />
      <DxColumn data-field="Tình trạng" />
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
  DxItem,
  DxToolbar,
} from "devextreme-vue/data-grid";

import DxTextBox from "devextreme-vue/text-box"; // Import DxTextBox
import DxButton from "devextreme-vue/button";
import { DxSelectBox } from "devextreme-vue/select-box";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxNumberBox } from "devextreme-vue/number-box";
import { DxList } from "devextreme-vue/list";

export default {
  name: "PlanLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxTextBox, // Đăng ký DxTextBox
    DxPaging,
    DxHeaderFilter,
    DxPager,
    DxItem,
    DxToolbar,
    DxSelectBox,
    DxNumberBox,
    DxButton,
    DxAutocomplete,
    DxList,
  },
  data() {
    return {
      isShowRowLines: true,
      isShowColumnLines: true,
      isShowBorders: true,
      filterText: "", // Biến lưu trữ bộ lọc
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
    // Phương thức xử lý thay đổi bộ lọc
    onFilterChanged(e) {
      this.filterText = e.value;
      // Lọc dữ liệu theo "Mã số" khi có thay đổi bộ lọc
      this.gridData = this.gridData.filter((item) =>
        item["Mã số"].toString().includes(this.filterText)
      );
    },
    navigateToCreatePlan() {
      this.$router.push({ path: "/create_plan" });
    },
  },
};
</script>
