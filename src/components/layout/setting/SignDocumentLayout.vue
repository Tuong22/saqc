<template>
  <!-- Component dành riêng cho KIỂM SOÁT CHẤT LƯỢNG -->
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :show-borders="isShowBorders"
      :row-alternation-enabled="isRowAlternationEnabled"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      :editing="{
        mode: 'popup', // Kiểu chỉnh sửa: 'row', 'cell', 'batch', 'popup', 'form'
        allowAdding: true, // Cho phép thêm hàng
        allowDeleting: true, // Cho phép xóa hàng
        useIcons: true,
        popup: {
          title: 'Mẫu ký số',
          showTitle: true,
          height: '260px',
        },
        form: { items: formItems },
      }"
      style="border: none"
    >
      <DxToolbar>
        <!-- Nút thêm mặc định của DxDataGrid -->
        <DxItem name="addRowButton" />
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
      <DxColumn data-field="#" alignment="center" width="100px"> </DxColumn>
      <DxColumn data-field="Mã"> </DxColumn>
      <DxColumn data-field="Tên" alignment="left"> </DxColumn>
      <DxColumn data-field="Loại mẫu"></DxColumn>
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
import DxButton from "devextreme-vue/button";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxPopup } from "devextreme-vue/popup";
import DxList from "devextreme-vue/list";
import { DxCheckBox } from "devextreme-vue";
import { DxSelectBox } from "devextreme-vue/select-box";

export default {
  name: "SignDocumentLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxTextBox, // Đăng ký DxTextBox
    DxHeaderFilter,
    DxButton,
    DxAutocomplete,
    DxPaging,
    DxPager,
    DxPopup,
    DxCheckBox,
    DxList,
    DxSelectBox,
    DxToolbar,
    DxItem,
  },
  data() {
    return {
      filterText: "", // Biến lưu trữ bộ lọc
      isShowBorders: true,
      isRowAlternationEnabled: true,
      isShowRowLines: true,
      isShowColumnLines: true,
      gridData: [
        { id: 1, Mã: "A001", Tên: "Sản phẩm 1", "Loại mẫu": "Loại A" },
        { id: 2, Mã: "B002", Tên: "Sản phẩm 2", "Loại mẫu": "Loại B" },
      ],
      isPopupVisible: false,
      loading: false,
      dataSource: [],
      customInput: "",
      formItems: [
        {
          dataField: "#",
          label: { visible: false }, // Ẩn tiêu đề mặc định
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "STT",
            labelMode: "floating",
          },
        },
        {
          dataField: "Mã",
          label: { visible: false }, // Ẩn tiêu đề mặc định
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Mã",
            labelMode: "floating",
          },
        },
        {
          dataField: "Tên",
          label: { visible: false }, // Ẩn tiêu đề mặc định
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Tên",
            labelMode: "floating",
          },
        },
        {
          dataField: "Loại mẫu",
          label: { visible: false }, // Ẩn tiêu đề mặc định
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Loại mẫu",
            labelMode: "floating",
          },
        },
      ],
    };
  },
  methods: {
    // Phương thức xử lý thay đổi bộ lọc
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
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