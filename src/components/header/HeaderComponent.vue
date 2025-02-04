<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #3699ff;
    "
  >
    <div style="display: flex; justify-content: space-between">
      <div style="padding-left: 32px; padding-right: 30px; align-items: center">
        <img
          src="@/assets/logo-light.png"
          alt="Logo"
          style="width: 60px; height: 40px"
          @click="goToHome"
        />
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 600px;
        "
      >
        <div>
          <DxButton
            text="OFFICE"
            icon="chevrondown"
            rtl-enabled="true"
            styling-mode="text"
            style="color: white; font-weight: bold"
            class="white-icon-btn"
          />
        </div>
        <div>
          <DxButton
            text="HSES"
            icon="chevrondown"
            rtl-enabled="true"
            styling-mode="text"
            style="color: white; font-weight: bold"
            class="white-icon-btn"
          />
        </div>
        <div>
          <DxButton
            text="Procurement"
            icon="chevrondown"
            rtl-enabled="true"
            styling-mode="text"
            style="color: white; font-weight: bold"
            class="white-icon-btn"
          />
        </div>
        <div>
          <DxButton
            text="Quản trị rủi ro"
            icon="chevrondown"
            rtl-enabled="true"
            styling-mode="text"
            style="color: white; font-weight: bold"
            class="white-icon-btn"
          />
        </div>
        <div>
          <DxButton
            text="Plan"
            icon="chevrondown"
            styling-mode="text"
            rtl-enabled="true"
            style="color: white; font-weight: bold"
            @click="goToHome"
            class="white-icon-btn"
          />
        </div>
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;
      "
    >
      <div>
        <img
          src="@/assets/vietnam.png"
          alt="vietnam"
          style="height: 24px; width: 28px; border-radius: 8px"
        />
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 180px;
        "
      >
        <div>
          <div>
            <p
              style="
                text-align: right;
                color: white;
                font-weight: bold;
                font-size: 12px;
              "
            >
              QUẢN TRỊ
            </p>
          </div>
          <div>
            <p
              style="
                text-align: right;
                font-weight: bold;
                font-size: 10px;
                color: #a5d1ff;
              "
            >
              Chuyên viên quản trị
            </p>
          </div>
        </div>
        <div>
          <img
            src="@/assets/avatar.png"
            alt="avatar"
            style="
              height: 36px;
              width: 36px;
              border-radius: 20px;
              margin-right: 20px;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DxButton from "devextreme-vue/button";

export default {
  name: "HeaderComponent",
  components: {
    DxButton,
  },
  methods: {
    goToHome() {
      if (this.$route.path === "/all_plans") {
        window.location.reload();
      } else {
        this.$router.push("/all_plans");
      }
    },
  },
};
</script>

<style>
.white-icon-btn .dx-icon {
  color: white !important; /* Đặt màu icon thành trắng */
}
</style>
