<template>
  <!-- Sử dụng component LeftMenu -->
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :data-source="gridData"
      show-row-lines="true"
      show-column-lines="true"
      :state-storing="stateStoring"
      @content-ready="onContentReady"
    >
      <DxHeaderFilter :visible="true" />
      <DxPaging :enabled="true" :pageSize="10" />
      <DxPager
        :visible="true"
        :showPageSizeSelector="true"
        :allowedPageSizes="[10, 25, 50, 100]"
        :showInfo="true"
      />

      <DxColumn data-field="STT" alignment="left"> </DxColumn>
      <DxColumn
        data-field="Mã"
        :group-index="0"
        header-cell-template="headerCellTemplate"
      ></DxColumn>
      <template #headerCellTemplate="{ data }">
        <div>{{ data.value }}</div>
      </template>
      <DxColumn data-field="Tên" data-type="date"></DxColumn>
      <DxColumn data-field="Dẫn hướng"></DxColumn>
      <DxColumn data-field="Icon"></DxColumn>
      <DxColumn data-field="Truy vấn"></DxColumn>
      <DxColumn data-field="Đếm số" alignment="left"></DxColumn>
      <DxColumn data-field="Hiển thị số điện thoại"></DxColumn>
      <DxColumn data-field=""></DxColumn>
      <DxColumn data-field=""></DxColumn>
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

const stateStoring = {
  enabled: false, // Không lưu trạng thái
};

function onContentReady(e) {
  // Đóng tất cả nhóm khi lưới sẵn sàng
  e.component.collapseAll();
}

export default {
  name: "NavigationLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxTextBox, // Đăng ký DxTextBox
    DxHeaderFilter,
    DxPaging,
    DxPager,
  },
  data() {
    return {
      selectedEmployee: undefined,
      filterText: "", // Biến lưu trữ bộ lọc
      gridData: [
        {
          STT: 1,
          Mã: "KH001",
          Tên: "Kế hoạch 1",
          "Dẫn hướng": "Trang chủ",
          Icon: "home",
          "Truy vấn": "SELECT * FROM KH001",
          "Đếm số": 5,
          "Hiển thị số điện thoại": "0123456789",
        },
        {
          STT: 2,
          Mã: "KH002",
          Tên: "Kế hoạch 2",
          "Dẫn hướng": "Báo cáo",
          Icon: "report",
          "Truy vấn": "SELECT * FROM KH002",
          "Đếm số": 10,
          "Hiển thị số điện thoại": "0987654321",
        },
        {
          STT: 3,
          Mã: "KH003",
          Tên: "Kế hoạch 3",
          "Dẫn hướng": "Danh mục",
          Icon: "list",
          "Truy vấn": "SELECT * FROM KH003",
          "Đếm số": 8,
          "Hiển thị số điện thoại": "0333333333",
        },
        {
          STT: 4,
          Mã: "KH004",
          Tên: "Kế hoạch 4",
          "Dẫn hướng": "Thống kê",
          Icon: "chart",
          "Truy vấn": "SELECT * FROM KH004",
          "Đếm số": 12,
          "Hiển thị số điện thoại": "0777777777",
        },
        {
          STT: 5,
          Mã: "KH005",
          Tên: "Kế hoạch 5",
          "Dẫn hướng": "Hệ thống",
          Icon: "settings",
          "Truy vấn": "SELECT * FROM KH005",
          "Đếm số": 15,
          "Hiển thị số điện thoại": "0111111111",
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
