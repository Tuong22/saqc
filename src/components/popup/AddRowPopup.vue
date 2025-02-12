<template>
  <div>
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
  </div>
</template>

<script>
import DxPopup from "devextreme-vue/popup";
import DxSelectBox from "devextreme-vue/select-box";
import DxAutocomplete from "devextreme-vue/autocomplete";
import DxButton from "devextreme-vue/button";
import DxCheckBox from "devextreme-vue/check-box";

export default {
  name: "AddRowPopup",
  components: {
    DxPopup,
    DxSelectBox,
    DxAutocomplete,
    DxButton,
    DxCheckBox,
  },
  data() {
    return {
      dataSource: [
        "Công ty Cổ phần Lọc hóa dầu Bình Sơn",
        "Công ty CP Nhựa Hoa Sen",
        "CN1 - Ban Giám đốc",
        "Hn-Ban Tài chính Kế toán",
        "Ban Công nghệ Thông tin",
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
    };
  },
  props: {
    isPopupVisible: Boolean,
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
