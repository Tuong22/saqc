<template>
  <div
    style="
      height: 100%;
      width: 260px;
    "
  >
    <div v-for="group in data" :key="group.id" class="menu-group">
      <div
        @click="toggleDropdown(group.id)"
        class="menu-group-header"
        :class="{ active: group.isOpen }"
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div>
          <i
            :class="group.icon"
            class="mr-3"
            style="padding-right: 8px; color: #ffa800"
          ></i>
        </div>
        <div>
          <span>{{ group.name }}</span>
        </div>
        <div style="padding-right: 12px">
          <i v-show="!group.isOpen" class="fa-solid fa-angle-right"></i>
          <i v-show="group.isOpen" class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div
        v-show="group.isOpen"
        class="menu-group-children"
        :class="{ 'slide-in': group.isOpen, 'slide-out': !group.isOpen }"
      >
        <div v-for="child in group.children" :key="child.id" class="menu-item">
          <li>
            <router-link :to="child.url">{{ child.name }}</router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "KIỂM SOÁT CHẤT LƯỢNG",
          isOpen: true,
          icon: "fa-regular fa-folder-open",
          children: [
            {
              id: 1,
              name: "Chờ tôi xử lý",
              url: "/waiting_approval",
              icon: "fa fa-circle-notch",
            },
            { id: 2, name: "Đang xử lý", url: "/in_progress" },
            { id: 3, name: "Soạn thảo", url: "/drafting" },
            { id: 4, name: "Tất cả", url: "/all_plans" },
          ],
        },
        {
          id: 2,
          name: "QUẢN TRỊ",
          isOpen: true,
          icon: "fa-regular fa-folder-open",
          children: [
            { id: 5, name: "Dẫn hướng", url: "/menu" },
            { id: 6, name: "Vai trò", url: "/role" },
            { id: 7, name: "Phân quyền", url: "/privilege" },
            { id: 8, name: "Cài đặt", url: "/setting" },
            { id: 9, name: "Quy trình mẫu", url: "/workflow" },
            { id: 10, name: "Mẫu ký số", url: "/sign_document" },
            { id: 11, name: "Tình trạng", url: "/status" },
            { id: 12, name: "Hành động", url: "/action" },
            { id: 13, name: "Bộ mẫu", url: "/sample" },
            { id: 14, name: "Phân xưởng", url: "/workshop" },
            { id: 15, name: "Phòng thử nghiệm", url: "/laboratory" },
            { id: 16, name: "Phương pháp thử nghiệm", url: "/testing_method" },
            { id: 17, name: "Tên mẫu", url: "/sample_name" },
            { id: 18, name: "Mục đích", url: "/purpose" },
            { id: 19, name: "Quy trình lấy mẫu", url: "/sampling_procedure" },
            { id: 20, name: "Điểm lấy mẫu", url: "/sampling_point" },
            { id: 21, name: "Chỉ tiêu kiểm soát", url: "/control_criteria" },
            { id: 22, name: "Mức độ khẩn cấp", url: "/critical" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleDropdown(groupId) {
      const group = this.data.find((item) => item.id === groupId);
      group.isOpen = !group.isOpen;
    },
  },
};
</script>

<style scoped>
.menu-group {
  margin-bottom: 10px;
  box-shadow: offset-x offset-y blur-radius spread-radius color;
}

.menu-group-header {
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
}

.menu-group-children {
  padding-left: 20px;
  overflow: hidden; /* Đảm bảo phần tử bên trong không tràn ra ngoài */
  max-height: 0; /* Bắt đầu với chiều cao bằng 0 */
  transition: 100% 0.3s ease-out; /* Hiệu ứng cuộn từ từ */
}

.menu-group-children.slide-in {
  max-height: 100%; /* Chiều cao tối đa khi danh sách mở */
}

.menu-group-children.slide-out {
  height: 100%; /* Chiều cao 0 khi danh sách đóng */
}

.menu-item {
  padding: 5px;
}

.menu-item a {
  text-decoration: none;
  color: #333;
}

.menu-item :active {
  background-color: #e1e1e1;
}

.menu-item a:hover {
  color: #007bff;
}
</style>
