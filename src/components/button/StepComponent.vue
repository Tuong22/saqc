<template>
  <div style="display: flex">
    <div class="circle-text">
      <span
        class="circle"
        style="background-color: white; color: black; border: 1px solid black"
        >{{ step.count }}</span
      >
      {{ step.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StepComponent",
  props: {
    // Khai báo một prop tên là 'message'
    step: {
      count: String,
      name: String,
      required: true, // Prop này là bắt buộc
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
