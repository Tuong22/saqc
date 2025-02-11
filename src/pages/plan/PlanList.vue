<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      background-color: #f5f5f5;
    "
  >
    <div v-if="loading" class="overlay">
      <base-spinner />
    </div>
    <div v-else style="flex: 1">
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
        <div
          style="
            flex: 1;
            width: 100%;
            height: 100%;
            border-left: 1px solid #e8e8e8;
          "
        >
          <div style="width: 98%; height: 100%">
            <plan-layout style="margin-left: 12px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/layout/LeftMenu.vue";
import PlanLayout from "@/components/layout/plan/PlanLayout.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

// import { mapActions, mapGetters } from "vuex";
// import { GET_COUNT } from "@/store/action-types";

export default {
  name: "PlanList",
  components: {
    LeftMenu,
    PlanLayout,
    HeaderComponent,
  },
  data() {
    return {
      dataSource: [
        "Từ chối",
        "Trả lại",
        "Hoàn thành",
        "Đang phê duyệt",
        "Đang soạn",
        "Trả lại",
        "Tất cả",
      ],
      loading: false,
      filters: {
        year: "",
        status: "",
        search: "",
      },
    };
  },
  computed: {
    // ...mapGetters({ count: "getCount" }),
  },
  methods: {
    navigateToCreatePlan() {
      this.$router.push({ path: "/create_plan" });
    },

    // ...mapActions([GET_COUNT]),
    // countNumber() {
    //   this.GET_COUNT();
    // },
  },
};
</script>
