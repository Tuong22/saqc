<template>
  <div>
    <div>
      <DxDataGrid
        id="dataGrid"
        :data-source="gridData"
        :show-borders="isShowBorders"
        :row-alternation-enabled="isRowAlternationEnabled"
        @selection-changed="selectItems"
        :show-row-lines="isShowRowLines"
        :show-column-lines="isShowColumnLines"
        :editing="{
          mode: 'row',
          allowAdding: true,
          allowDeleting: true,
          allowUpdating: true,
          useIcons: true,
        }"
      >
        <DxToolbar>
          <DxItem name="addRowButton" />
          <!-- Ô input tùy chỉnh -->
          <DxItem location="after">
            <template #default>
              <DxButton text="" icon="upload" @click="triggerFileInput" />
            </template>
          </DxItem>

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
  DxPager,
  DxItem,
  DxToolbar,
} from "devextreme-vue/data-grid";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import DxButton from "devextreme-vue/button";
import axios from "axios";
import { functionServices } from "@/services/FunctionService.js";

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
    DxPager,
    DxItem,
    DxToolbar,
  },
  data() {
    return {
      gridData: [
        {
          id: 1,
          "#": "1",
          Mã: "SP001",
          Tên: "Sản phẩm A",
          "Màu chữ": "Đỏ",
          "Màu nền": "Trắng",
        },
        {
          id: 2,
          "#": "2",
          Mã: "SP002",
          Tên: "Sản phẩm B",
          "Màu chữ": "Xanh",
          "Màu nền": "Vàng",
        },
        {
          id: 3,
          "#": "3",
          Mã: "SP003",
          Tên: "Sản phẩm C",
          "Màu chữ": "Đen",
          "Màu nền": "Xám",
        },
        {
          id: 4,
          "#": "4",
          Mã: "SP004",
          Tên: "Sản phẩm D",
          "Màu chữ": "Tím",
          "Màu nền": "Hồng",
        },
        {
          id: 5,
          "#": "5",
          Mã: "SP005",
          Tên: "Sản phẩm E",
          "Màu chữ": "Vàng",
          "Màu nền": "Xanh",
        },
      ],
      isShowBorders: true,
      isRowAlternationEnabled: true,
      isShowRowLines: true,
      isShowColumnLines: true,
    };
  },
  methods: {
    selectItems() {
      console.log("Items selected!");
    },
    triggerFileInput() {
      const fileInput = this.$refs.fileInput;
      fileInput.click(); // Mở cửa sổ chọn tệp
    },
    async uploadFile() {
      const file = event.target.files[0]; // Lấy file từ input

      if (!file) {
        alert("Please select a file to upload");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("YOUR_API_URL_HERE", formData);
        console.log("File uploaded successfully", response.data);
      } catch (error) {
        console.error("Error uploading file", error);
      }
    },
    async getData(items) {
      try {
        const data = await functionServices(items);
        this.gridData = data.map((item, index) => ({
          "#": index + 1,
          Mã: item.code,
          Tên: item.sample,
        }));
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },
  },
  props: {
    items: String,
  },
  mounted() {
    this.getData(this.items);
  },
};
</script>
