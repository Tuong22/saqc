<!-- Component cho Trang SignDocumentList.vue -->
<template>
  <div style="flex: 1">
    <DxDataGrid
      id="dataGrid"
      :show-borders="isShowBorders"
      :row-alternation-enabled="isRowAlternationEnabled"
      :data-source="gridData"
      :show-row-lines="isShowRowLines"
      :show-column-lines="isShowColumnLines"
      :search-panel="{ visible: true, width: 240, placeholder: 'Tìm kiếm...' }"
      :editing="{
        mode: 'popup',
        allowAdding: true,
        allowDeleting: true,
        useIcons: true,
        popup: {
          title: 'Mẫu ký số',
          showTitle: true,
          height: '360px',
          width: '900px',
        },
        form: { items: formItems },
      }"
      style="border: none"
    >
      <DxToolbar>
        <DxItem name="addRowButton" />
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
        data-field="Loại mẫu"
        alignment="center"
        :validation-rules="[
          { type: 'required', message: 'Loại mẫu là bắt buộc' },
        ]"
      ></DxColumn>
      <template #fileUploader>
        <DxFileUploader
          accept=".pdf,.doc,.docx,.txt"
          :multiple="false"
          :upload-mode="'useForm'"
          @value-changed="onFileUpload"
          select-button-text="Chọn tập tin"
          label-text="hoặc Thả tập tin vào đây"
        />
      </template>
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
import DxFileUploader from "devextreme-vue/file-uploader";

export default {
  name: "SignDocumentLayout",
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxHeaderFilter,
    DxPaging,
    DxPager,
    DxToolbar,
    DxItem,
    DxFileUploader,
  },
  data() {
    return {
      uploadedFileName: "", 

      filterText: "",
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
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "STT",
            labelMode: "floating",
          },
        },
        {
          dataField: "Mã",
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Mã",
            labelMode: "floating",
          },
        },
        {
          dataField: "Tên",
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Tên",
            labelMode: "floating",
          },
        },
        {
          dataField: "Loại mẫu",
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Loại mẫu",
            labelMode: "floating",
          },
        },
        {
          label: { text: "TỆP ĐÍNH KÈM", cssClass: "label" },
          template: "fileUploader",
          cssClass: "upload_file",
        },
      ],
    };
  },
  methods: {
    onFileUpload(e) {
      const file = e.value[0]; 
      if (file) {
        this.uploadedFileName = file.name; 
      }
    },
  },
};
</script>

<style>
.upload_file {
  padding-top: 12px;
  color: #fa896c;
  font-size: 16px;
  font-weight: bold;
}
</style>
