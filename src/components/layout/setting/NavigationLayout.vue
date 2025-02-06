<template>
  <!-- Sử dụng component LeftMenu -->
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      :column-hiding-enabled="isColumnHidingEnabled"
      :showBorders="isShowBorders"
      :editing="{
        mode: 'popup', // Kiểu chỉnh sửa: 'row', 'cell', 'batch', 'popup', 'form'
        allowAdding: true, // Cho phép thêm hàng
        allowDeleting: true, // Cho phép xóa hàng
        allowUpdating: true,
        useIcons: true,
        popup: {
          title: 'Dẫn hướng', // Tiêu đề của popup
          showTitle: true, // Hiển thị tiêu đề
          height: 440, // Chiều cao popup
        },
        form: {
          colCount: 2, // Chia form thành 2 cột
        },
      }"
      style="border: none"
    >
      <DxToolbar>
        <!-- Nút thêm hàng mặc định -->
        <DxItem name="addRowButton" />

        <!-- Dropdown Filter cho cột Nhóm -->
        <DxItem location="before">
          <template #default>
            <DxSelectBox
              v-model="selectedGroup"
              :items="groupOptions"
              placeholder="Lọc theo Nhóm"
              @value-changed="filterByGroup"
              class="custom-dropdown"
            />
          </template>
        </DxItem>

        <!-- Ô input tùy chỉnh -->
        <DxItem location="after">
          <template #default>
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
          </template>
        </DxItem>
      </DxToolbar>

      <DxHeaderFilter :visible="true" />
      <DxPaging :enabled="true" :pageSize="10" />
      <DxPager
        :visible="true"
        :showPageSizeSelector="true"
        :allowedPageSizes="[10, 25, 50, 100]"
        :showInfo="true"
      />

      <DxColumn data-field="STT" alignment="left" width="60px"> </DxColumn>
      <DxColumn data-field="Mã" width="120px"></DxColumn>
      <DxColumn
        data-field="Nhóm"
        :group-index="0"
        header-cell-template="headerCellTemplate"
      >
        <template #headerCellTemplate="{ data }">
          <div>{{ data.value }}</div>
        </template></DxColumn
      >
      <DxColumn data-field="Tên" width="120px"></DxColumn>
      <DxColumn data-field="Dẫn hướng" width="120px"></DxColumn>
      <DxColumn data-field="Icon" width="120px"></DxColumn>
      <DxColumn data-field="Truy vấn"></DxColumn>
      <DxColumn data-field="Đếm số"
        ><template #checkboxCountTemplate="{ data }">
          <input
            type="checkbox"
            :checked="data.value"
            @change="toggleShowCount(data)"
          /> </template
      ></DxColumn>
      <DxColumn data-field="Hiển thị số điện thoại" caption="Hiển thị SĐT"
        ><template #checkboxPhoneNumberTemplate="{ data }">
          <input
            type="checkbox"
            :checked="data.value"
            @change="toggleShowPhone(data)"
          /> </template
      ></DxColumn>
      <DxColumn
        data-field="Hiển thị trang chủ số điện thoại"
        caption="Hiển thị trang chủ SĐT"
        ><template #checkboxHomePagePhoneNumberTemplate="{ data }">
          <input
            type="checkbox"
            :checked="data.value"
            @change="toggleShowHomePagePhone(data)"
          /> </template
      ></DxColumn>
      <DxColumn data-field="Mở rộng" caption="Mở rộng"
        ><template #checkboxExpandTemplate="{ data }">
          <input
            type="checkbox"
            :checked="data.value"
            @change="toggleExpand(data)"
          /> </template
      ></DxColumn>
      <DxColumn data-field="Phân quyền"></DxColumn>
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
  DxToolbar,
  DxItem,
} from "devextreme-vue/data-grid";
import DxTextBox from "devextreme-vue/text-box"; // Import DxTextBox
import DxSelectBox from "devextreme-vue/select-box"; // Import dropdown
import { DxAutocomplete } from "devextreme-vue/autocomplete";

export default {
  name: "NavigationLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxSelectBox,
    DxColumn,
    DxSelection,
    DxTextBox, // Đăng ký DxTextBox
    DxHeaderFilter,
    DxPaging,
    DxPager,
    DxToolbar,
    DxItem,
    DxAutocomplete,
  },
  data() {
    return {
      selectedGroup: "", 
      groupOptions: ["QUẢN TRỊ", "HỆ THỐNG"], 
      originalData: [], 
      filterText: "",
      isShowRowLines: true,
      isShowColumnLines: true,
      isColumnHidingEnabled: true,
      isShowBorders: true,
      gridData: [
        {
          STT: 1,
          Mã: "KH001",
          Nhóm: "QUẢN TRỊ",
          Tên: "Kế hoạch 1",
          "Dẫn hướng": "Trang chủ",
          Icon: "home",
          "Truy vấn": "SELECT * FROM KH001",
          "Đếm số": false,
          "Hiển thị số điện thoại": false,
          "Hiển thị trang chủ số điện thoại": false,
          "Mở rộng": false,
        },
        {
          STT: 2,
          Mã: "KH002",
          Nhóm: "QUẢN TRỊ",
          Tên: "Kế hoạch 2",
          "Dẫn hướng": "Báo cáo",
          Icon: "report",
          "Truy vấn": "SELECT * FROM KH002",
          "Đếm số": false,
          "Hiển thị số điện thoại": true,
          "Hiển thị trang chủ số điện thoại": false,
          "Mở rộng": false,
        },
        {
          STT: 3,
          Mã: "KH003",
          Nhóm: "QUẢN TRỊ",
          Tên: "Kế hoạch 3",
          "Dẫn hướng": "Danh mục",
          Icon: "list",
          "Truy vấn": "SELECT * FROM KH003",
          "Đếm số": false,
          "Hiển thị số điện thoại": false,
          "Hiển thị trang chủ số điện thoại": false,
          "Mở rộng": false,
        },
        {
          STT: 4,
          Mã: "KH004",
          Nhóm: "",
          Tên: "Kế hoạch 4",
          "Dẫn hướng": "Thống kê",
          Icon: "chart",
          "Truy vấn": "SELECT * FROM KH004",
          "Đếm số": false,
          "Hiển thị số điện thoại": true,
          "Hiển thị trang chủ số điện thoại": false,
          "Mở rộng": false,
        },
        {
          STT: 5,
          Mã: "KH005",
          Nhóm: "",
          Tên: "Kế hoạch 5",
          "Dẫn hướng": "Hệ thống",
          Icon: "settings",
          "Truy vấn": "SELECT * FROM KH005",
          "Đếm số": false,
          "Hiển thị số điện thoại": true,
          "Hiển thị trang chủ số điện thoại": false,
          "Mở rộng": false,
        },
      ],
    };
  },
  mounted() {
    this.originalData = [...this.gridData]; // Lưu trữ dữ liệu gốc
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
    toggleShowPhone(e) {
      e.setValue(!e.value);
    },
    toggleShowHomePagePhone(e) {
      e.setValue(!e.value);
    },
    toggleShowCount(e) {
      e.setValue(!e.value);
    },
    toggleExpand(e) {
      e.setValue(!e.value);
    },
    filterByGroup(e) {
      this.selectedGroup = e.value;
      this.gridData = this.selectedGroup
        ? this.originalData.filter((item) => item.Nhóm === this.selectedGroup)
        : [...this.originalData];
    },
  },
};
</script>
