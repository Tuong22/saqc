<!-- Component cho Trang PlanList.vue -->
<template>
  <div style="flex: 1">
    <div style="flex: 1; padding-top: 20px">
      <!-- Popup hiển thị thông tin chi tiết -->

      <DxDataGrid
        id="dataGrid"
        ref="dataGrid"
        @exporting="onExporting"
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
                placeholder="Năm..."
                :show-spin-buttons="true"
                :show-clear-button="true"
                width="200"
                @value-changed="toggleNumberBoxColumn"
              />
            </template>
          </DxItem>
          <DxItem location="after">
            <template #default>
              <DxSelectBox
                width="220"
                placeholder="Tình trạng..."
                :items="dataSource"
                v-model="selectedStatus"
                @value-changed="toggleFilterColumn"
              />
            </template>
          </DxItem>
          <DxItem location="after">
            <template #default>
              <DxButton
                text="Export Excel"
                icon="exportxlsx"
                @click="onExporting"
                style="font-weight: bold"
              />
            </template>
          </DxItem>
          <DxItem name="searchPanel" />
        </DxToolbar>
        <DxColumnFixing :enabled="true" />
        <DxStateStoring
          :enabled="true"
          type="custom"
          :custom-load="loadState"
          :custom-save="saveState"
        />
        <!-- Export XLSX -->
        <DxExport :enabled="true" />
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
  DxStateStoring,
  DxExport,
} from "devextreme-vue/data-grid";

import DxButton from "devextreme-vue/button";
import { DxSelectBox } from "devextreme-vue/select-box";
import { DxNumberBox } from "devextreme-vue/number-box";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import saveAs from "file-saver";

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
    DxExport,
    DxStateStoring,
  },
  data() {
    return {
      popupVisible: false,
      selectedRow: null,
      isShowRowLines: true,
      isShowColumnLines: true,
      isShowBorders: true,
      isShowSpinBtn: true,
      selectedStatus: "",
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
      this.selectedRow = e.data;
      this.popupVisible = !this.popupVisible;
    },
    toggleNumberBoxColumn(e) {
      const ef = e.value.toString();
      if (this.$refs.dataGrid) {
        if (ef === "") {
          this.$refs.dataGrid.instance.clearFilter();
        } else {
          this.$refs.dataGrid.instance.filter((rowData) => {
            const year = new Date(rowData["Năm KH"]).getFullYear();
            return year === parseInt(ef, 10);
          });
        }
      } else {
        console.error("DataGrid chưa được khởi tạo.");
      }
    },
    toggleFilterColumn(e) {
      console.log(e.value);
      if (this.$refs.dataGrid) {
        this.$refs.dataGrid.instance.clearFilter();
        if (e.value === "Tất cả") {
          this.$refs.dataGrid.instance.clearFilter();
        } else {
          this.$refs.dataGrid.instance.filter(["Tình trạng", "=", e.value]);
        }
      } else {
        console.error("DataGrid chưa được khởi tạo.");
      }
    },
    onExporting(e) {
      const workbook = new Workbook();
      const worksheet1 = workbook.addWorksheet("KDKLamSan");
      const worksheet2 = workbook.addWorksheet("KDKCanLamSan");
      const worksheet3 = workbook.addWorksheet("KCK");

      exportDataGrid({
        component: e.component,
        worksheet: worksheet1,
        // customizeCell: function (options) {
        //   options.excelCell.font = { name: "Arial", size: 12 };

        //   if (options.gridCell.rowType === "header") {
        //     options.excelCell.fill = {
        //       type: "pattern",
        //       pattern: "solid",
        //       fgColor: { argb: "FFA500" }, // Mã màu vàng cam
        //     };
        //   }
        // },
      }).then(() => {
        // Export tiếp cho worksheet2
        exportDataGrid({
          component: e.component,
          worksheet: worksheet2,
        }).then(() => {
          // Export tiếp cho worksheet3
          exportDataGrid({
            component: e.component,
            worksheet: worksheet3,
          }).then(() => {
            // Lưu file sau khi tất cả worksheet đã export xong
            workbook.xlsx.writeBuffer().then(function (buffer) {
              saveAs(
                new Blob([buffer], { type: "application/octet-stream" }),
                "DataGrid.xlsx"
              );
            });
          });
        });
      });
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
