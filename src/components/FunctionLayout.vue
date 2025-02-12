<!-- Component cho các Trang chức năng -->
<template>
  <div>
    <div>
      <DxDataGrid
        id="dataGrid"
        :show-borders="isShowBorders"
        :data-source="dataSource"
        @selection-changed="selectItems"
        :show-row-lines="isShowRowLines"
        :show-column-lines="isShowColumnLines"
        :search-panel="{
          visible: true,
          width: 240,
          placeholder: 'Tìm kiếm...',
        }"
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
          <DxItem location="after">
            <template #default>
              <DxButton text="" icon="upload" @click="triggerFileInput" />
            </template>
          </DxItem>
          <DxItem name="searchPanel" />
        </DxToolbar>
        <DxHeaderFilter :visible="true" />
        <DxPaging :enabled="true" :pageSize="10" />
        <DxPager
          :visible="true"
          :showPageSizeSelector="true"
          :allowedPageSizes="[10, 25, 50, 100]"
          :showInfo="true"
        />
        <DxColumn
          data-field="#"
          alignment="left"
          width="60px"
          :validation-rules="[{ type: 'required', message: 'STT là bắt buộc' }]"
        >
        </DxColumn>
        <DxColumn
          data-field="Mã"
          alignment="center"
          :validation-rules="[{ type: 'required', message: 'Mã là bắt buộc' }]"
        >
        </DxColumn>
        <DxColumn
          data-field="Tên"
          alignment="center"
          :validation-rules="[{ type: 'required', message: 'Tên là bắt buộc' }]"
        >
        </DxColumn>
        <DxColumn
          data-field="Màu chữ"
          alignment="center"
          :validation-rules="[
            { type: 'required', message: 'Màu chữ là bắt buộc' },
          ]"
        >
          <template #cell-template="{ data }">
            <DxColorBox
              :value="data.data['Màu chữ']"
              @value-changed="(e) => updateColor(data.data, 'Màu chữ', e.value)"
            />
          </template>
        </DxColumn>
        <DxColumn
          data-field="Màu nền"
          alignment="center"
          :validation-rules="[
            { type: 'required', message: 'Màu nền là bắt buộc' },
          ]"
        >
          <template #cell-template="{ data }">
            <DxColorBox
              :value="data.data['Màu nền']"
              @value-changed="(e) => updateColor(data.data, 'Màu nền', e.value)"
            />
          </template>
        </DxColumn>
        <DxColumn data-field="Icon" alignment="center"></DxColumn>
        <DxColumn data-field="Tùy chọn khác" alignment="center"></DxColumn>
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
import DxButton from "devextreme-vue/button";
import axios from "axios";
import { DxColorBox } from "devextreme-vue/color-box";

import { functionServices } from "@/services/FunctionService.js";

export default {
  name: "FunctionLayout",
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
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
      this.dataSource = [...this.dataSource];
    },
    triggerFileInput() {
      const fileInput = this.$refs.fileInput;
      fileInput.click();
    },

    async uploadFile() {
      const file = event.target.files[0];

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
    async getData(items) {
      try {
        const data = await functionServices(items);
        this.dataSource = data.map((item, index) => ({
          "#": index + 1,
          Mã: item.code,
          Tên:
            item.room ||
            item.sample ||
            item.samplingPointName ||
            item.testMethod ||
            item.workshop,
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
