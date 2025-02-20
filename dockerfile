# Sử dụng hình ảnh Node.js chính thức
FROM node:16

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json trước (tận dụng cache)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build project (nếu Vue được cấu hình để build trước khi chạy)
RUN npm run build

# Đặt cổng mặc định cho ứng dụng
EXPOSE 8080

# Lệnh chạy ứng dụng (dành cho môi trường production)
CMD ["npm", "run", "serve"]
