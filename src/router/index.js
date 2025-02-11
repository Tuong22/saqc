import Vue from "vue";
import Router from "vue-router";

import PlanPage from "@/pages/plan/PlanList.vue";
import CreatePlanPage from "@/pages/plan/PlanCreateList.vue";
import MenuPage from "@/pages/setting/NavigationList.vue";
import RolePage from "@/pages/setting/RoleList.vue";
import PrivilegePage from "@/pages/setting/PrivilegeList.vue";
import SettingPage from "@/pages/setting/SettingList.vue";
import WorkflowPage from "@/pages/setting/WorkflowList.vue";
import UpdateWorkflow from "@/pages/setting/UpdateWorkflow.vue";
import SamplingProcedurePage from "@/pages/setting/SamplingProcedureList.vue";
import SignDocumentPage from "@/pages/setting/SignDocumentList.vue";
import StatusPage from "@/pages/setting/StatusList.vue";
import ActionPage from "@/pages/function/ActionList.vue";
import SamplePage from "@/pages/function/SampleList.vue";
import WorkshopPage from "@/pages/function/WorkshopList.vue";
import LaboratoryPage from "@/pages/function/LaboratoryList.vue";
import TestingMethodPage from "@/pages/function/TestingMethodList.vue";
import SampleNamePage from "@/pages/function/SampleNameList.vue";
import PurposePage from "@/pages/function/PurposeList.vue";
import SamplingPointPage from "@/pages/function/SamplingPointList.vue";
import ControlCriteriaPage from "@/pages/function/ControlCriteriaList.vue";
import CriticalPage from "@/pages/function/CriticalList.vue";
import PlanCreateList from "@/pages/plan/PlanCreateList.vue";
import CreateWorkflowList from "@/pages/setting/CreateWorkflowList.vue";
import PlanCreateStepTwo from "@/pages/plan/PlanCreateStepTwo.vue";
import PlanCreateStepThree from "@/pages/plan/PlanCreateStepThree.vue";
import UpdatePlan from "@/pages/plan/UpdatePlan.vue";
import ViewPlan from "@/pages/plan/ViewPlan.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Plan",
    component: PlanPage,
  },
  {
    path: "/create_plan",
    name: "/Create_Plan",
    component: PlanCreateList,
  },
  {
    path: "/waiting_approval",
    name: "Waiting_Approval",
    component: PlanPage,
  },
  {
    path: "/in_progress",
    name: "In_Progress",
    component: PlanPage,
  },
  {
    path: "/drafting",
    name: "Drafting",
    component: PlanPage,
  },
  {
    path: "/all_plans",
    name: "All_Plans",
    component: PlanPage,
  },
  {
    path: "/create_plan",
    name: "Create_Plan",
    component: CreatePlanPage,
  },
  {
    path: "/create_plan_step_two",
    name: "Step_Two",
    component: PlanCreateStepTwo,
  },
  {
    path: "/create_plan_step_three",
    name: "Step_Three",
    component: PlanCreateStepThree,
  },
  {
    path: "/update_plan",
    name: "Update_Plan",
    component: UpdatePlan,
  },
  {
    path: "/view_plan",
    name: "View_Plan",
    component: ViewPlan,
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuPage,
  },
  {
    path: "/role",
    name: "Role",
    component: RolePage,
  },
  {
    path: "/privilege",
    name: "Privilege",
    component: PrivilegePage,
  },
  {
    path: "/setting",
    name: "Setting",
    component: SettingPage,
  },
  {
    path: "/workflow",
    name: "Workflow",
    component: WorkflowPage,
  },
  {
    path: "/create_workflow",
    name: "Create_Workflow",
    component: CreateWorkflowList,
  },
  {
    path: "/update_workflow",
    name: "Update_Workflow",
    component: UpdateWorkflow,
  },
  {
    path: "/sign_document",
    name: "Sign_Document",
    component: SignDocumentPage,
  },
  {
    path: "/status",
    name: "Status",
    component: StatusPage,
  },
  {
    path: "/action",
    name: "Action",
    component: ActionPage,
  },
  {
    path: "/sample",
    name: "sample",
    component: SamplePage,
  },
  {
    path: "/workshop",
    name: "Workshop",
    component: WorkshopPage,
  },
  {
    path: "/laboratory",
    name: "Laboratory",
    component: LaboratoryPage,
  },
  {
    path: "/testing_method",
    name: "Testing_Method",
    component: TestingMethodPage,
  },
  {
    path: "/sample_name",
    name: "Sample_Name",
    component: SampleNamePage,
  },
  {
    path: "/purpose",
    name: "Purpose",
    component: PurposePage,
  },
  {
    path: "/sampling_procedure",
    name: "Sampling_Procedure",
    component: SamplingProcedurePage,
  },
  {
    path: "/sampling_point",
    name: "Sampling_Point",
    component: SamplingPointPage,
  },
  {
    path: "/control_criteria",
    name: "Control_Criteria",
    component: ControlCriteriaPage,
  },
  {
    path: "/critical",
    name: "Critical",
    component: CriticalPage,
  },
];

const router = new Router({
  routes,
});

export default router;
