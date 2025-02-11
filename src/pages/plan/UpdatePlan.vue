<!-- Cập nhật kế hoạch -->
<template>
  <DxDataGrid :data-source="source" :editing="{ allowUpdating: true }">
    <DxColumn data-field="Title" />
    <DxColumn data-field="Color">
      <template #cellTemplate="{ data }">
        <div
          :style="{
            backgroundColor: data.value,
            height: '100%',
            width: '100%',
          }"
        ></div>
      </template>
      <template #editCellTemplate="{ data }">
        <DxColorBox
          v-model="data.value"
          @value-changed="(e) => data.setValue(e.value)"
        />
      </template>
    </DxColumn>
  </DxDataGrid>
</template>

<script>
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import DxColorBox from "devextreme-vue/color-box";

export default {
  name: "UpdatePlan",
  components: {
    DxDataGrid,
    DxColumn,
    DxColorBox,
  },
  data() {
    return {
      source: [
        { Title: "Pink", Color: "#FF00FF" },
        { Title: "Yellow", Color: "#FFFF00" },
        { Title: "Green", Color: "#339966" },
      ],
    };
  },
};
</script>
