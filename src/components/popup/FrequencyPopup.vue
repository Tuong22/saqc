<template>
  <div>
    <DxPopup
      :visible="isPopupFrequencyVisible"
      title="Tần suất"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
      height="auto"
    >
      <template>
        <div style="flex: 1; width: 100%; height: 100%; border: 1px solid #ccc">
          <div style="width: 100%; background-color: #f7f7f7">
            <DxButtonGroup
              :items="buttonItems"
              :styling-mode="'text'"
              :keyExpr="'id'"
              :textExpr="'text'"
              :selectedItemKeys="selectedKeys"
              selection-mode="single"
              @selection-changed="onSelectionChanged"
              style="background-color: white; border: none"
            />
          </div>
          <div v-if="frequencyComponent" style="flex: 1; padding: 0 12px 8px">
            <table style="padding-top: 12px; width: 100%">
              <thead>
                <tr>
                  <th>Loại tần suất</th>
                  <th>Chi tiết</th>
                  <th>Ghi chú (nếu có)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 100px; height: 100%; padding-top: 8px">
                    <DxCheckBox text="Tuần" style="padding-bottom: 24px" />
                    <DxCheckBox text="Tháng" style="padding-bottom: 20px" />
                    <DxCheckBox text="Ngày" style="padding-bottom: 28px" />
                    <DxCheckBox text="Năm" style="padding-bottom: 28px" />
                    <DxCheckBox text="Request" style="padding-bottom: 20px" />
                    <DxCheckBox text="Khác" />
                  </td>
                  <td style="width: 400px">
                    <div
                      style="
                        display: flex;
                        justify-content: space-evenly;
                        padding-top: 20px;
                      "
                    >
                      <DxCheckBox
                        v-for="(day, index) in days"
                        :key="index"
                        :text="day"
                      />
                    </div>
                    <div style="padding-top: 8px">
                      <DxTagBox
                        :dataSource="MonthsItems"
                        :valueExpr="'id'"
                        :displayExpr="'text'"
                        placeholder="Tháng"
                        label="Tháng"
                        label-mode="floating"
                        :show-clear-button="isShowDropdownButton"
                        :show-drop-down-button="isShowDropdownButton"
                        :show-selection-controls="isShowSelectionControls"
                        height="40px"
                      />
                    </div>
                    <div>
                      <DxNumberBox
                        label="Lần/Ngày"
                        label-mode="floating"
                        placeholder="Lần/Ngày"
                        :showSpinButtons="isShownSpinButtons"
                        labelMode="floating"
                        :show-clear-button="isShowClearButton"
                        height="40px"
                      ></DxNumberBox>
                    </div>
                    <div>
                      <DxNumberBox
                        label="Lần/Năm"
                        label-mode="floating"
                        placeholder="Lần/Năm"
                        :showSpinButtons="isShownSpinButtons"
                        labelMode="floating"
                        :show-clear-button="isShowClearButton"
                        height="40px"
                      ></DxNumberBox>
                    </div>
                    <div style="height: 40px"></div>
                    <div style="padding-top: 8px">
                      <DxAutocomplete
                        label="Khác"
                        label-mode="floating"
                        placeholder="Khác"
                        height="40px"
                      />
                    </div>
                  </td>
                  <td style="flex: 1; padding-left: 12px">
                    <DxAutocomplete
                      v-for="(item, index) in notes"
                      :key="index"
                      label="Ghi chú (nếu có)"
                      label-mode="floating"
                      placeholder="Ghi chú (nếu có)"
                      height="40px"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="padding-top: 12px; padding-bottom: 12px">
              <DxSelectBox
                label="Mức độ thay đổi"
                labelMode="floating"
                placeholder=""
                :show-clear-button="isShowClearButton"
                :data-source="limitationType"
              >
                <DxList :data-source="limitationType"> </DxList>
              </DxSelectBox>
            </div>
            <div>
              <div>
                <DxAutocomplete
                  label="Nội dung diễn giải (nếu có thay đổi)"
                  label-mode="floating"
                  placeholder="Nội dung diễn giải (nếu có thay đổi)"
                  height="80px"
                />
              </div>
              <div
                style="
                  display: flex;
                  justify-content: flex-end;
                  padding-top: 12px;
                "
              >
                <DxButton text="Lưu" icon="save" />
              </div>
            </div>
          </div>
          <div v-else>
            <DxDataGrid
              id="dataGrid"
              :data-source="gridData"
              :show-borders="isShownBorders"
              :row-alternation-enabled="rowAlternationEnabled"
              @selection-changed="selectEmployee"
              :show-row-lines="isShownRowLines"
              :show-column-lines="isShownColumnLines"
            >
              <DxColumn data-field="#" alignment="center"> </DxColumn>
              <DxColumn data-field="Năm" alignment="center"> </DxColumn>
              <DxColumn data-field="Trước thay đổi" alignment="center">
              </DxColumn>
              <DxColumn data-field="Sau thay đổi" alignment="center">
              </DxColumn>
              <DxColumn data-field="Mức độ" alignment="center"> </DxColumn>
              <DxColumn data-field="Ghi chú" alignment="center"> </DxColumn>
            </DxDataGrid>
          </div>
        </div>
      </template>
    </DxPopup>
  </div>
</template>

<script>
import DxPopup from "devextreme-vue/popup";
import DxButtonGroup from "devextreme-vue/button-group";
import DxCheckBox from "devextreme-vue/check-box";
import DxTagBox from "devextreme-vue/tag-box";
import DxNumberBox from "devextreme-vue/number-box";
import DxSelectBox from "devextreme-vue/select-box";
import DxAutocomplete from "devextreme-vue/autocomplete";
import DxDataGrid, { DxColumn } from "devextreme-vue/data-grid";
import DxButton from "devextreme-vue/button";

export default {
  name: "FrequencyPopup",
  components: {
    DxPopup,
    DxButtonGroup,
    DxCheckBox,
    DxTagBox,
    DxNumberBox,
    DxSelectBox,
    DxAutocomplete,
    DxDataGrid,
    DxColumn,
    DxButton,
  },
  data() {
    return {
      buttonItems: [
        { id: 1, text: "Tần suất" },
        { id: 2, text: "Lịch sử thay đổi" },
      ],
      selectedKeys: [1],
      frequencyComponent: true,
      days: ["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "CN"],
      MonthsItems: [
        { id: 1, text: "Tháng 1" },
        { id: 2, text: "Tháng 2" },
        { id: 3, text: "Tháng 3" },
        { id: 4, text: "Tháng 4" },
        { id: 5, text: "Tháng 5" },
        { id: 6, text: "Tháng 6" },
        { id: 7, text: "Tháng 7" },
        { id: 8, text: "Tháng 8" },
        { id: 9, text: "Tháng 9" },
        { id: 10, text: "Tháng 10" },
        { id: 11, text: "Tháng 11" },
        { id: 12, text: "Tháng 12" },
      ],
      notes: Array(6).fill(null),
      limitationType: ["Không đổi", "Tăng", "Giảm", "Đổi loại"],
      gridData: [],
      isShowDropdownButton: true,
      selectEmployee: [],
      isShowSelectionControls: true,
      isShownSpinButtons: true,
      isShowClearButton: true,
      isShownBorders: true,
      rowAlternationEnabled: true,
      isShownRowLines: true,
      isShownColumnLines: true,
    };
  },
  props: {
    isPopupFrequencyVisible: Boolean,
  },
  methods: {
    onSelectionChanged(e) {
      const selectedButton = e.addedItems[0];
      if (selectedButton.id === 1) {
        this.frequencyComponent = true;
      } else {
        this.frequencyComponent = false;
      }
    },
  },
};
</script>

<style>
.dx-popup-wrapper {
  display: none; /* Ẩn popup hoàn toàn khi không hiển thị */
}

.dx-popup-wrapper.dx-overlay-visible {
  display: block; /* Hiển thị lại khi visible */
}
</style>
