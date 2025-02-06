<template>
  <!-- Sử dụng component LeftMenu -->
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :show-borders="isShowBorders"
      :row-alternation-enabled="isRowAlternationEnabled"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      :editing="{
        mode: 'cell', // Kiểu chỉnh sửa: 'row', 'cell', 'batch', 'popup', 'form'
        allowUpdating: true, // Cho phép chỉnh sửa
        allowAdding: true, // Cho phép thêm hàng
        allowDeleting: true, // Cho phép xóa hàng
        useIcons: true,
      }"
      style="border: none"
    >
      <DxFilterRow :visible="true" />
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
      <DxColumn data-field="Tên" />
      <DxColumn
        data-field="Cố định"
        caption="Cố định"
        width="120px"
      >
        <template #checkboxTemplate="{ data }">
          <input
            type="checkbox"
            :checked="data.value"
            @change="toggle(data)"
          /> </template
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
  DxFilterRow,
  // DxLookup,
} from "devextreme-vue/data-grid";
// import DxTextBox from "devextreme-vue/text-box"; // Import DxTextBox

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
    DxPager,
    DxFilterRow,
    // DxLookup,
  },
  data() {
    return {
      lookupDataSourceConfig,
      filterText: "", 
      isShowBorders: true,
      isRowAlternationEnabled: true,
      isShowRowLines: true,
      isShowColumnLines: true,
      gridData: [
        { "Thứ tự": 1, Mã: "A001", Tên: "Nguyễn Văn A", "Cố định": false },
        { "Thứ tự": 2, Mã: "A002", Tên: "Trần Thị B", "Cố định": false },
        { "Thứ tự": 3, Mã: "A003", Tên: "Lê Văn C", "Cố định": false },
        { "Thứ tự": 4, Mã: "A004", Tên: "Phạm Thị D", "Cố định": false },
        { "Thứ tự": 5, Mã: "A005", Tên: "Hoàng Văn E", "Cố định": true },
        { "Thứ tự": 6, Mã: "A006", Tên: "Đinh Thị F", "Cố định": false },
        { "Thứ tự": 7, Mã: "A007", Tên: "Phan Văn G", "Cố định": true },
        { "Thứ tự": 8, Mã: "A008", Tên: "Vũ Thị H", "Cố định": false },
        { "Thứ tự": 9, Mã: "A009", Tên: "Ngô Văn I", "Cố định": true },
        { "Thứ tự": 10, Mã: "A010", Tên: "Đỗ Thị J", "Cố định": true },
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
    toggle(e) {
      e.setValue(!e.value);
    },
  },
};
</script>