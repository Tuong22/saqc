<template>
  <!-- Component dành riêng cho KIỂM SOÁT CHẤT LƯỢNG -->
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :allow-column-reordering="true"
      :data-source="gridData"
      @selection-changed="selectEmployee"
      show-row-lines="true"
      show-column-lines="true"
    >
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
      <DxColumn
        data-field="Mã số"
        alignment="left"
        :width="160"
        :header-cell-template="headerCellTemplate"
      >
        <template #headerCellTemplate="{ column }">
          <div class="custom-header">
            {{ column.caption }}
            <div v-if="column.dataField === 'Mã số'" class="filter">
              <DxTextBox
                :value="filterText"
                @value-changed="onFilterChanged"
                placeholder="Tìm kiếm"
              />
            </div>
          </div>
        </template>
      </DxColumn>

      <!-- Các cột khác -->
      <DxColumn
        data-field="Tiêu đề"
        :width="240"
        :header-cell-template="headerCellTemplate"
      ></DxColumn>
      <DxColumn
        data-field="Năm KH"
        data-type="date"
        :width="120"
        :header-cell-template="headerCellTemplate"
      ></DxColumn>
      <DxColumn
        data-field="Người tạo"
        :width="160"
        :header-cell-template="headerCellTemplate"
      ></DxColumn>
      <DxColumn
        data-field="Bước xử lý"
        :header-cell-template="headerCellTemplate"
      ></DxColumn>
      <DxColumn
        data-field="Người xử lý"
        :header-cell-template="headerCellTemplate"
      ></DxColumn>
      <DxColumn
        data-field="Tình trạng"
        :header-cell-template="headerCellTemplate"
      ></DxColumn>

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
  },
  data() {
    return {
      selectedEmployee: undefined,
      filterText: "", // Biến lưu trữ bộ lọc
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
    selectEmployee(e) {
      e.component.byKey(e.currentSelectedRowKeys[0]).done((employee) => {
        if (employee) {
          this.selectedEmployee = employee;
        }
      });
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
