<!-- Component Header cho cả Module -->
<template>
  <div
    class="headerFrame"
    :style="{ background: $store.state.theme.header.background }"
  >
    <div class="leftComponent">
      <div class="logo">
        <img
          src="@/assets/logo-light.png"
          alt="Logo"
          class="logoImg"
          @click="goToHome"
        />
      </div>
      <div class="menus">
        <div>
          <DxButton
            text="OFFICE"
            icon="chevrondown"
            :rtl-enabled="isRtlEnabled"
            styling-mode="text"
            class="menuStyle"
            :style="{ color: $store.state.theme.header.menusColor }"
          />
        </div>
        <div>
          <DxButton
            text="HSES"
            icon="chevrondown"
            :rtl-enabled="isRtlEnabled"
            styling-mode="text"
            class="menuStyle"
            :style="{ color: $store.state.theme.header.menusColor }"
          />
        </div>
        <div>
          <DxButton
            text="Procurement"
            icon="chevrondown"
            :rtl-enabled="isRtlEnabled"
            styling-mode="text"
            class="menuStyle"
            :style="{ color: $store.state.theme.header.menusColor }"
          />
        </div>
        <div>
          <DxButton
            text="Quản trị rủi ro"
            icon="chevrondown"
            :rtl-enabled="isRtlEnabled"
            styling-mode="text"
            class="menuStyle"
            :style="{ color: $store.state.theme.header.menusColor }"
          />
        </div>
        <div>
          <DxButton
            text="Plan"
            icon="chevrondown"
            styling-mode="text"
            :rtl-enabled="isRtlEnabled"
            @click="goToHome"
            class="menuStyle"
            :style="{ color: $store.state.theme.header.menusColor }"
          />
        </div>
      </div>
    </div>
    <div class="rightComponent">
      <div>
        <img src="@/assets/vietnam.png" alt="vietnam" class="flagStyle" />
      </div>
      <div class="accountInfo">
        <div>
          <div>
            <p
              class="accountName"
              :style="{ color: $store.state.theme.header.accountNameColor }"
            >
              QUẢN TRỊ
            </p>
          </div>
          <div>
            <p
              class="accountRole"
              :style="{ color: $store.state.theme.header.accountRoleColor }"
            >
              Chuyên viên quản trị
            </p>
          </div>
        </div>
        <div>
          <img src="@/assets/avatar.png" alt="avatar" class="accountAvatar" />
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
  data() {
    return {
      isRtlEnabled: true
    };
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

<style src="@/assets/css/header.css"></style>
