<template>
  <div>
    <div>
      <DxButton @click="getData" text="Lấy Dữ Liệu Feedback" />
      <DxDataGrid
        id="dataGrid"
        :show-borders="isShowBorders"
        :data-source="dataSource"
        @selection-changed="selectItems"
        :show-row-lines="isShowRowLines"
        :show-column-lines="isShowColumnLines"
        style="border: none"
        :editing="{
          mode: 'cell',
          allowUpdating: true,
          allowDeleting: true,
          allowAdding: true,
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
        <DxColumn data-field="Màu chữ">
          <template #cell-template="{ data }">
            <DxColorBox
              :value="data.data['Màu chữ']"
              @value-changed="(e) => updateColor(data.data, 'Màu chữ', e.value)"
            />
          </template>
        </DxColumn>
        <DxColumn data-field="Màu nền">
          <template #cell-template="{ data }">
            <DxColorBox
              :value="data.data['Màu nền']"
              @value-changed="(e) => updateColor(data.data, 'Màu nền', e.value)"
            />
          </template>
        </DxColumn>
        <DxColumn data-field="Icon"></DxColumn>
        <DxColumn data-field="Tùy chọn khác"></DxColumn>
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
  DxToolbar,
  DxItem,
} from "devextreme-vue/data-grid";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import DxButton from "devextreme-vue/button";
import axios from "axios";
import { DxColorBox } from "devextreme-vue/color-box";

import { fetchData } from "@/api/getData.js"; // Đảm bảo bạn nhập đúng đường dẫn tới file chứa fetchData

export default {
  name: "FunctionLayout", // Tên component chính
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
    DxAutocomplete,
    DxButton,
    DxPaging,
    DxPager,
    DxToolbar,
    DxItem,
    DxColorBox,
  },
  data() {
    return {
      dataSource: [
        {
          "#": 1,
          Mã: "KH001",
          Tên: "Trịnh Kiến Tường",
          name: "Sản phẩm A",
          "Màu chữ": "",
          "Màu nền": "",
          Icon: "",
          "Tùy chọn khác": "",
        },
        {
          "#": 2,
          Mã: "KH002",
          Tên: "Tường Hong Quạo",
          name: "Sản phẩm B",
          "Màu chữ": "",
          "Màu nền": "",
          Icon: "",
          "Tùy chọn khác": "",
        },
      ],
      isShowBorders: true,
      isShowRowLines: true,
      isShowColumnLines: true,
    };
  },
  methods: {
    updateColor(rowData, field, newValue) {
      rowData[field] = newValue;
      this.dataSource = [...this.dataSource]; // Cập nhật lại mảng để Vue phản ứng
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
    selectItems() {
      console.log("Items selected!");
    },

    // FETCH DATA
    async getData() {
      try {
        const data = await fetchData("menus");
        this.dataSource = data; 
        console.log(this.dataSource[0].name);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    },
  },
};
</script>
