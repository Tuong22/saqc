<template>
  <!-- Sử dụng component LeftMenu -->
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :allow-column-reordering="true"
      show-borders="true"
      row-alternation-enabled="true"
      :data-source="gridData"
      show-row-lines="true"
      show-column-lines="true"
      :state-storing="stateStoring"
      @selection-changed="selectEmployee"
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
      <DxColumn data-field="Thứ tự" alignment="left" width="100px" />
      <DxColumn data-field="Mã" />
      <DxColumn data-field="Tên" data-type="date" />
      <DxColumn data-field="Cố định" />
      <DxColumn
        data-field=""
        :cell-template="statusCellTemplate"
        width="100px"
      />
      <DxSelection mode="single" />
    </DxDataGrid>
  </div>
</template>

<script setup>
const statusCellTemplate = ({ data }) => {
  return (
    <div style="text-align: center;">
      <DxButton icon="trash" onClick="handleDelete(data)" />
    </div>
  );
};
</script>

<script setup lang="ts">
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxHeaderFilter,
  DxPaging,
  DxPager
  // DxLookup,
} from "devextreme-vue/data-grid";
// import DxTextBox from "devextreme-vue/text-box"; // Import DxTextBox

const stateStoring = {
  enabled: false, // Không lưu trạng thái
};

function onContentReady(e) {
  // Đóng tất cả nhóm khi lưới sẵn sàng
  e.component.collapseAll();
}

const lookupDataSourceConfig = [
  { CustomerID: 1, ContactName: "Nguyễn Văn A", Phone: "0123456789" },
  { CustomerID: 2, ContactName: "Trần Thị B", Phone: "0987654321" },
  { CustomerID: 3, ContactName: "Lê Văn C", Phone: "0912345678" },
  { CustomerID: 4, ContactName: "Phạm Thị D", Phone: "0934567890" },
  { CustomerID: 5, ContactName: "Hoàng Văn E", Phone: "0956781234" },
  { CustomerID: 6, ContactName: "Đinh Thị F", Phone: "0978123456" },
  { CustomerID: 7, ContactName: "Phan Văn G", Phone: "0991234567" },
  { CustomerID: 8, ContactName: "Vũ Thị H", Phone: "0945678912" },
  { CustomerID: 9, ContactName: "Ngô Văn I", Phone: "0923456789" },
  { CustomerID: 10, ContactName: "Đỗ Thị J", Phone: "0967891234" },
];

export default {
  name: "RoleLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    // DxTextBox, // Đăng ký DxTextBox
    DxHeaderFilter,
    DxPaging,
    DxPager
    // DxLookup,
  },
  data() {
    return {
      lookupDataSourceConfig,
      selectedEmployee: undefined,
      filterText: "", // Biến lưu trữ bộ lọc
      gridData: [
        { "Thứ tự": 1, Mã: "A001", Tên: "Nguyễn Văn A", "Cố định": "Có" },
        { "Thứ tự": 2, Mã: "A002", Tên: "Trần Thị B", "Cố định": "Không" },
        { "Thứ tự": 3, Mã: "A003", Tên: "Lê Văn C", "Cố định": "Có" },
        { "Thứ tự": 4, Mã: "A004", Tên: "Phạm Thị D", "Cố định": "Không" },
        { "Thứ tự": 5, Mã: "A005", Tên: "Hoàng Văn E", "Cố định": "Có" },
        { "Thứ tự": 6, Mã: "A006", Tên: "Đinh Thị F", "Cố định": "Không" },
        { "Thứ tự": 7, Mã: "A007", Tên: "Phan Văn G", "Cố định": "Có" },
        { "Thứ tự": 8, Mã: "A008", Tên: "Vũ Thị H", "Cố định": "Không" },
        { "Thứ tự": 9, Mã: "A009", Tên: "Ngô Văn I", "Cố định": "Có" },
        { "Thứ tự": 10, Mã: "A010", Tên: "Đỗ Thị J", "Cố định": "Không" },
      ],
    };
  },
  methods: {
    handleDelete(data) {
      // Xử lý xóa
      console.log("Xóa dữ liệu:", data);
    },
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
