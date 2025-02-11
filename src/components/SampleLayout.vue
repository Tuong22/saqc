<!-- Component cho Trang SampleList.vue -->
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
        :search-panel="{
          visible: true,
          width: 240,
          placeholder: 'Tìm kiếm...',
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
import DxButton from "devextreme-vue/button";
import axios from "axios";
import { functionServices } from "@/services/FunctionService.js";

export default {
  name: "SampleLayout",
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
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
