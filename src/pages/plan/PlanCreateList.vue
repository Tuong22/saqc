<!-- Component Lập kế hoạch Bước 1 -->
<template>
  <div
    style="
      background-color: #f5f5f5;
      display: flex;
      justify-content: space-between;
    "
  >
    <!-- Popup Tần suất -->
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
                      <DxCheckBox text="Hai" />
                      <DxCheckBox text="Ba" />
                      <DxCheckBox text="Tư" />
                      <DxCheckBox text="Năm" />
                      <DxCheckBox text="Sáu" />
                      <DxCheckBox text="Bảy" />
                      <DxCheckBox text="CN" />
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
                      label="Ghi chú (nếu có)"
                      label-mode="floating"
                      placeholder="Ghi chú (nếu có)"
                      height="40px"
                    />
                    <DxAutocomplete
                      label="Ghi chú (nếu có)"
                      label-mode="floating"
                      placeholder="Ghi chú (nếu có)"
                      height="40px"
                    />
                    <DxAutocomplete
                      label="Ghi chú (nếu có)"
                      label-mode="floating"
                      placeholder="Ghi chú (nếu có)"
                      height="40px"
                    />
                    <DxAutocomplete
                      label="Ghi chú (nếu có)"
                      label-mode="floating"
                      placeholder="Ghi chú (nếu có)"
                      height="40px"
                    />
                    <DxAutocomplete
                      label="Ghi chú (nếu có)"
                      label-mode="floating"
                      height="40px"
                      placeholder="Ghi chú (nếu có)"
                    />
                    <DxAutocomplete
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
              <DxColumn data-field="Trước thay đổi" alignment="center"> </DxColumn>
              <DxColumn data-field="Sau thay đổi" alignment="center"> </DxColumn>
              <DxColumn data-field="Mức độ" alignment="center"> </DxColumn>
              <DxColumn data-field="Ghi chú" alignment="center"> </DxColumn>
            </DxDataGrid>
          </div>
        </div>
      </template>
    </DxPopup>
    <!-- Popup - Thêm dòng -->
    <DxPopup
      :visible="isPopupVisible"
      title="Thông tin chi tiết kế hoạch"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      position="center"
    >
      <template>
        <div style="flex: 1">
          <div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <DxSelectBox
                  label="Bộ mẫu"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Phân xưởng"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Điểm lấy mẫu"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
            </div>
            <div>
              <DxSelectBox
                label="Tên mẫu"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </div>
            <div>
              <DxSelectBox
                label="Mục đích chính"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </div>
            <div>
              <DxSelectBox
                label="Chỉ tiêu kiểm soát"
                labelMode="floating"
                placeholder=""
                :data-source="dataSource"
              >
                <DxList :data-source="dataSource"> </DxList>
              </DxSelectBox>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <DxSelectBox
                  label="Quy trình lấy mẫu"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Phương pháp thử nghiệm"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
              <div>
                <DxSelectBox
                  label="Phòng thử nghiệm"
                  labelMode="floating"
                  placeholder=""
                  width="390px"
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
            </div>
            <div style="display: flex">
              <div style="margin-right: 8px">
                <DxAutocomplete
                  labelMode="floating"
                  label="Giờ lấy mẫu"
                  width="390px"
                />
              </div>
              <div>
                <DxSelectBox
                  label="CRITICAL"
                  labelMode="floating"
                  width="390px"
                  placeholder=""
                  :data-source="dataSource"
                >
                  <DxList :data-source="dataSource"> </DxList>
                </DxSelectBox>
              </div>
            </div>
          </div>
          <div>
            <div><h4 style="color: #fa8a6d">KẾ HOẠCH TEST RUN DẦU THÔ</h4></div>
            <div style="display: flex; justify-content: space-between; flex: 1">
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Step At 5%
                  </p>
                </div>
                <div><DxCheckBox /> Step at 5%</div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Step At 10%
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox /> 5:00</div>
                  <div><DxCheckBox /> 20:00</div>
                </div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Step At 15%
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox /> 5:00</div>
                  <div><DxCheckBox /> 20:00</div>
                </div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Final Step 1(15%)
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox /> 5:00</div>
                  <div><DxCheckBox /> 20:00</div>
                </div>
              </div>
              <div style="width: 180px">
                <div>
                  <p
                    style="
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 8px;
                      font-weight: bold;
                    "
                  >
                    Final Step 2(15%)
                  </p>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <div><DxCheckBox /> 5:00</div>
                  <div><DxCheckBox /> 20:00</div>
                </div>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div style="width: 580px">
                <DxAutocomplete
                  label="Tần suất VHBT"
                  :buttons="addButtons"
                  labelMode="floating"
                />
              </div>
              <div style="width: 580px">
                <DxAutocomplete
                  label="Tần suất các dịp lễ tết (>3 ngày)"
                  :buttons="addButtons"
                  labelMode="floating"
                />
              </div>
            </div>
            <div
              style="
                width: 100%;
                justify-content: flex-end;
                display: flex;
                padding-top: 8px;
              "
            >
              <DxButton text="Lưu" icon="save" />
            </div>
          </div>
        </div>
      </template>
    </DxPopup>
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <div v-else>
      <header-component />
      <div
        style="
          display: flex;
          width: 100%;
          height: 100%;
          background-color: white;
        "
      >
        <left-menu />
        <div style="border-left: 1px solid #e8e8e8; flex: 1">
          <div
            style="
              flex: 1;
              height: 100%;
              margin-left: 8px;
              box-shadow: 0px 0px 12px 0px rgba(0.1, 0, 0, 0.2);
              padding: 0px 12px 12px 12px;
            "
          >
            <div class="title" style="padding-top: 12px">
              <h3 style="text-align: center; font-weight: bold">
                THÊM MỚI KẾ HOẠCH KIỂM SOÁT CHẤT LƯỢNG NHÀ MÁY
              </h3>
            </div>
            <div
              style="
                border: none;
                display: flex;
                justify-content: space-between;
              "
            >
              <step-component
                :step="{
                  count: '1',
                  name: 'THÔNG TIN KẾ HOẠCH',
                  color: ' #60afff',
                  bgdColor: '#FFFFFF',
                }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 4px solid #b5b5c3;
                  width: 32%;
                  border-color: #60afff;
                  color: #60afff;
                "
              />
              <step-component
                :step="{
                  count: '2',
                  name: 'QUY TRÌNH',
                  color: '#b5b5c3',
                  bgdColor: '#FFFFFF',
                }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 4px solid #b5b5c3;
                  width: 32%;
                "
              />
              <step-component
                :step="{
                  count: '3',
                  name: 'CHỌN VÙNG KÝ',
                  color: '#b5b5c3',
                  bgdColor: '#FFFFFF',
                }"
                style="
                  padding-bottom: 8px;
                  border-bottom: 4px solid #b5b5c3;
                  width: 32%;
                "
              />
            </div>
            <div>
              <div style="width: 100%; padding-left: 12px">
                <h4 style="color: #fa896b">NGƯỜI YÊU CẦU</h4>
              </div>
              <div>
                <div style="display: flex; justify-content: space-between">
                  <div style="width: 24%">
                    <DxNumberBox
                      :value="2025"
                      :min="1900"
                      :max="9999"
                      label="Năm kế hoạch"
                      :showSpinButtons="isShownSpinButtons"
                      labelMode="floating"
                      :show-clear-button="isShowClearButton"
                      ><template #content>
                        <div class="number-box-icons">
                          <span @click="increaseValue" class="icon-up">▲</span>
                          <span @click="decreaseValue" class="icon-down"
                            >▼</span
                          >
                        </div>
                      </template></DxNumberBox
                    >
                  </div>
                  <div style="width: 24%">
                    <DxAutocomplete
                      :value="'2025/40/KH-QLCL-NCPT-VHSX'"
                      label="Mã số"
                      :buttons="customButtons"
                      labelMode="floating"
                      :read-only="isReadOnly"
                    />
                  </div>
                  <div style="width: 24%">
                    <DxAutocomplete
                      :value="'QUẢN TRỊ'"
                      labelMode="floating"
                      label="Họ và tên"
                      :read-only="isReadOnly"
                    />
                  </div>
                  <div style="width: 24%">
                    <DxSelectBox
                      label="Đơn vị/Ban"
                      labelMode="floating"
                      placeholder=""
                      :value="dataSource[0]"
                      :data-source="dataSource"
                    >
                      <DxList :data-source="dataSource"> </DxList>
                    </DxSelectBox>
                  </div>
                </div>
                <div>
                  <DxAutocomplete
                    label="Tiêu đề"
                    labelMode="floating"
                    :input-attr="{
                      class: 'search-input',
                    }"
                    style="padding-top: 4px; margin-top: 20px"
                  />
                  <DxAutocomplete
                    label="Mô tả"
                    labelMode="floating"
                    :input-attr="{
                      class: 'search-input',
                    }"
                    style="padding-top: 4px; margin-top: 20px"
                  />
                  <DxAutocomplete
                    label="Ghi chú"
                    labelMode="floating"
                    :input-attr="{
                      class: 'search-input',
                    }"
                    style="
                      padding-top: 4px;
                      margin-top: 20px;
                      height: 60px;
                      width: 100%;
                    "
                  />
                  <!-- Mẫu ký số -->
                  <DxSelectBox
                    :data-source="dataSource"
                    label="Mẫu ký số"
                    labelMode="floating"
                    placeholder=""
                    style="padding-top: 4px; margin-top: 20px"
                  >
                    <DxList :data-source="dataSource"> </DxList>
                  </DxSelectBox>
                </div>
              </div>
              <div>
                <div
                  style="
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 12px;
                  "
                >
                  <h4
                    style="
                      color: #fa896b;
                      display: flex;
                      flex: 1;
                      align-items: center;
                      width: 20%;
                    "
                  >
                    BẢNG CHI TIẾT KẾ HOẠCH
                    <h4 style="color: red; font-weight: bold">(*)</h4>
                  </h4>
                </div>
                <div>
                  <DxDataGrid
                    :column-auto-width="isColumnAutoWidth"
                    :allow-column-resizing="isAllowColumnResizing"
                    id="dataGrid"
                    :data-source="gridData"
                    :show-borders="isShownBorders"
                    :row-alternation-enabled="rowAlternationEnabled"
                    @selection-changed="selectEmployee"
                    :show-row-lines="isShownRowLines"
                    :show-column-lines="isShownColumnLines"
                    :export="{
                      enabled: true,
                    }"
                    :search-panel="{
                      visible: true,
                      width: 240,
                      placeholder: 'Tìm kiếm...',
                    }"
                    :editing="{
                      mode: 'popup',
                      allowAdding: true,
                      allowDeleting: true,
                      allowUpdating: true,
                      useIcons: true,
                      popup: {
                        title: 'Dẫn hướng',
                        showTitle: true,
                        height: 440,
                      },
                      texts: {
                        addRow: 'Thêm dòng',
                      },
                      form: {
                        colCount: 2,
                      },
                    }"
                    style="border: none"
                  >
                    <DxToolbar>
                      <DxItem name="addRowButton" />
                      <DxItem location="after">
                        <template #default>
                          <DxButton icon="download" text="Tải mẫu" />
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
                      data-field="Ý kiến"
                      caption="Ý kiến"
                      alignment="center"
                    />
                    <DxColumn data-field="#" caption="#" alignment="center" />
                    <DxColumn
                      data-field="Điểm lấy mẫu"
                      caption="Điểm lấy mẫu"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Phân xưởng"
                      caption="Phân xưởng"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Tên mẫu"
                      caption="Tên mẫu"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Mục đích chính"
                      caption="Mục đích chính"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Quy trình lấy mẫu"
                      caption="Quy trình lấy mẫu"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Phương pháp thử nghiệm"
                      caption="Phương pháp thử nghiệm"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Chỉ tiêu kiểm soát"
                      caption="Chỉ tiêu kiểm soát"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Phòng thử nghiệm"
                      caption="Phòng thử nghiệm"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="Giờ lấy mẫu"
                      caption="Giờ lấy mẫu"
                      alignment="center"
                    />
                    <DxColumn
                      data-field="VHBT"
                      caption="VHBT"
                      alignment="center"
                    >
                      <DxColumn
                        data-field="Tần suất"
                        caption="Tần suất"
                        alignment="center"
                      />
                    </DxColumn>
                    <DxColumn
                      data-field="Các dịp lễ tết (>3 ngày)"
                      caption="Các dịp lễ tết (>3 ngày)"
                      alignment="center"
                      ><DxColumn
                        data-field="Tần suất"
                        caption="Tần suất"
                        alignment="center"
                      />
                    </DxColumn>
                    <DxColumn
                      caption="KẾ HOẠCH TEST RUN DẦU THÔ"
                      alignment="center"
                    >
                      <DxColumn
                        data-field="Step at 5%"
                        caption="Step at 5%"
                        alignment="center"
                      />
                      <DxColumn
                        data-field="Step at 10%"
                        caption="Step at 10%"
                        data-type="boolean"
                        alignment="center"
                      >
                        <DxColumn
                          data-field="5:00"
                          caption="5:00"
                          data-type="boolean"
                          alignment="center"
                        />
                        <DxColumn
                          data-field="20:00"
                          caption="20:00"
                          data-type="boolean"
                          alignment="center"
                        />
                      </DxColumn>

                      <DxColumn
                        data-field="Step at 15%"
                        caption="Step at 15%"
                        data-type="boolean"
                        alignment="center"
                      >
                        <DxColumn
                          data-field="5:00"
                          caption="5:00"
                          data-type="boolean"
                          alignment="center"
                        />
                        <DxColumn
                          data-field="20:00"
                          caption="20:00"
                          data-type="boolean"
                          alignment="center"
                        />
                      </DxColumn>

                      <DxColumn
                        data-field="Final step 1(15%)"
                        caption="Final step 1(15%)"
                        data-type="boolean"
                        alignment="center"
                      >
                        <DxColumn
                          data-field="5:00"
                          caption="5:00"
                          data-type="boolean"
                          alignment="center"
                        />
                        <DxColumn
                          data-field="20:00"
                          caption="20:00"
                          data-type="boolean"
                          alignment="center"
                        />
                      </DxColumn>

                      <DxColumn
                        data-field="Final step 2(15%)"
                        caption="Final step 2(15%)"
                        data-type="boolean"
                        alignment="center"
                      >
                        <DxColumn
                          data-field="5:00"
                          caption="5:00"
                          data-type="boolean"
                          alignment="center"
                        />
                        <DxColumn
                          data-field="20:00"
                          caption="20:00"
                          data-type="boolean"
                          alignment="center"
                        />
                      </DxColumn>
                    </DxColumn>
                    <DxColumn
                      data-field="CRITICAL"
                      caption="CRITICAL"
                      alignment="center"
                    />
                    <DxScrolling
                      column-rendering-mode="virtual"
                      alignment="center"
                    />
                  </DxDataGrid>
                </div>
              </div>
              <div>
                <div style="width: 100%; padding-left: 12px">
                  <h4 style="color: #fa896b">TỆP ĐÍNH KÈM</h4>
                </div>
                <DxFileUploader
                  select-button-text="Chọn tập tin"
                  label-text="hoặc Thả tập tin vào đây"
                />
                <div style="width: 100%; display: flex; padding-top: 30px">
                  <div>
                    <DxButton
                      text="Tiếp theo"
                      icon="arrowright"
                      @click="navigateStepTwo"
                    />
                  </div>
                  <div
                    style="display: flex; flex: 1; justify-content: flex-end"
                  >
                    <div>
                      <DxButton text="Lưu" icon="save" />
                    </div>
                    <div>
                      <DxButton
                        text="Đóng"
                        icon="close"
                        style="margin-left: 8px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/layout/LeftMenu.vue";
import StepComponent from "@/components/button/StepComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

import {
  DxDataGrid,
  DxColumn,
  DxHeaderFilter,
  DxPaging,
  DxPager,
  DxToolbar,
  DxItem,
} from "devextreme-vue/data-grid";
import DxButton from "devextreme-vue/button";
import { DxAutocomplete } from "devextreme-vue/autocomplete";
import { DxNumberBox } from "devextreme-vue/number-box";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxList from "devextreme-vue/list";
import { DxPopup } from "devextreme-vue/popup";
import { DxCheckBox } from "devextreme-vue";
import { DxButtonGroup } from "devextreme-vue/button-group";
import { DxTagBox } from "devextreme-vue/tag-box";
import { DxFileUploader } from "devextreme-vue/file-uploader";

export default {
  name: "PlanCreateList",
  components: {
    LeftMenu,
    StepComponent,
    DxButton,
    DxAutocomplete,
    DxDataGrid,
    DxColumn,
    DxHeaderFilter,
    DxNumberBox,
    DxSelectBox,
    DxList,
    DxPaging,
    DxPager,
    DxPopup,
    DxCheckBox,
    HeaderComponent,
    DxButtonGroup,
    DxTagBox,
    DxFileUploader,
    DxToolbar,
    DxItem,
  },

  data() {
    const options = [
      "Công ty Cổ phần Lọc hóa dầu Bình Sơn",
      "Công ty CP Nhựa Hoa Sen",
      "CN1 - Ban Giám đốc",
      "Hn-Ban Tài chính Kế toán",
      "Ban Công nghệ Thông tin",
    ];
    return {
      isShowFileList: false,
      isReadOnly: true,
      isColumnHidingEnabled: true,
      isColumnAutoWidth: true,
      isAllowColumnResizing: true,
      selectEmployee: [],
      dataSource: options,
      isShownSpinButtons: true,
      rowAlternationEnabled: true,
      isShownBorders: true,
      isShownRowLines: true,
      isShownColumnLines: true,
      loading: false,
      gridData: [],
      isPopupVisible: false,
      isPopupFrequencyVisible: false,
      customButtons: [
        {
          name: "refresh",
          location: "after",
          options: {
            icon: "refresh",
            hint: "Refresh",
          },
        },
        {
          name: "clear",
          location: "after",
          options: undefined,
        },
      ],
      addButtons: [
        {
          name: "add",
          location: "after",
          options: {
            icon: "add",
            hint: "Add",
            onClick: () => {
              this.isPopupFrequencyVisible = !this.isPopupFrequencyVisible;
            },
          },
        },
      ],
      limitationType: ["Không đổi", "Tăng", "Giảm", "Đổi loại"],
      buttonItems: [
        { id: 1, text: "Tần suất" },
        { id: 2, text: "Lịch sử thay đổi" },
      ],
      isShowClearButton: true,
      isShowDropdownButton: true,
      isShowSelectionControls: true,
      selectedKeys: [1],
      frequencyComponent: true,
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
    };
  },
  methods: {
    triggerFileInput() {
      const fileInput = this.$refs.fileInput;
      fileInput.click(); // Mở cửa sổ chọn tệp
    },
    onSelectionChanged(e) {
      const selectedButton = e.addedItems[0];
      if (selectedButton.id === 1) {
        this.frequencyComponent = true;
      } else {
        this.frequencyComponent = false;
      }
    },
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    navigateStepTwo() {
      this.$router.push("/create_plan_step_two");
    },
    increaseValue() {
      if (this.year < 9999) this.year++;
    },
    decreaseValue() {
      if (this.year > 1900) this.year--;
    },
  },
};
</script>

<style>
#dataGrid {
  width: 1220px;
  height: auto;
}

.dx-datagrid .dx-header-row {
  background-color: #f3f6f9;
  color: black;
  font-weight: bold;
}
</style>
