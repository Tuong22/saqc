<template>
  <!-- Component dành riêng cho KIỂM SOÁT CHẤT LƯỢNG -->
  <div style="flex: 1">
    <DxPopup
      :visible="isPopupVisible"
      title="Mẫu ký số"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
      height="auto"
      width="1000px"
    >
      <template>
        <div>
          <div style="width: 100%">
            <div style="display: flex; justify-content: space-between">
              <div>
                <DxAutocomplete
                  label="STT"
                  labelMode="floating"
                  style="width: 460px"
                />
              </div>
              <div>
                <DxAutocomplete
                  label="Mã"
                  labelMode="floating"
                  style="width: 460px"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 12px">
              <div>
                <DxAutocomplete
                  label="Tên"
                  labelMode="floating"
                  style="width: 460px"
                />
              </div>
              <div>
                <DxSelectBox
                  placeholder="Loại mẫu"
                  :data-source="dataSource"
                  style="width: 460px; margin-top: 8px;"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
            </div>
          </div>
          <div>
            <div><h4 style="color: #fa896b">TỆP ĐÍNH KÈM</h4></div>
            <div>
              <div>
                <DxButton text="Chọn tập tin" style="margin-right: 12px"/>hoặc Thả tập tin vào đây
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end;">
            <div><DxButton text="Lưu" icon="save" /></div>
          </div>
        </div>
      </template>
    </DxPopup>
    <div style="width: 100%; display: flex">
      <div style="flex: 1"></div>
      <div
        class="input"
        style="
          display: flex;
          width: 28%;
          justify-content: space-between;
          padding-bottom: 12px;
          padding-top: 12px;
        "
      >
        <DxButton text="" icon="add" class="add" @click="togglePopup" />
        <DxAutocomplete
          :data-source="store"
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
      </div>
    </div>
    <DxDataGrid
      id="dataGrid"
      show-borders="true"
      row-alternation-enabled="true"
      :data-source="gridData"
      show-row-lines="true"
      show-column-lines="true"
    >
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
      <DxColumn data-field="" data-type="date"></DxColumn>
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
  },
  data() {
    return {
      selectedEmployee: undefined,
      filterText: "", // Biến lưu trữ bộ lọc
      gridData: [],
      isPopupVisible: false,
      loading: false,
      dataSource: [],
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
