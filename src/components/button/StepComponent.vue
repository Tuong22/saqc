<!-- Component các bước trong quá trình lập kế hoạch -->
<template>
  <div style="display: flex">
    <div class="circle-text">
      <span
        class="circle"
        :style="{
          backgroundColor: `${step.bgdColor}`,
          color: `${step.color}`,
          border: `1px solid ${step.color}`,
        }"
        >{{ step.count }}</span
      >
      <p :style="{ color: `${step.color}` }">{{ step.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepComponent",
  props: {
    step: {
      type: Object,
      required: true,
      validator(value) {
        return (
          typeof value.count === "string" &&
          typeof value.name === "string" &&
          typeof value.color === "string" &&
          typeof value.bgdColor === "string"
        );
      },
    },
  },
};
</script>

<style scoped>
.circle-text {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
}

.circle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: blue;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
  padding: 8px;
  font-size: 24px;
}
</style>
