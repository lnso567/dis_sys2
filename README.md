# Dockerized Full-Stack Environment Practice

這是一個用於練習 **Docker 容器化佈署**與 **Nginx 反向代理 (Reverse Proxy)** 的實驗專案。透過 Docker Compose 整合前端 React、後端 Node.js 與 Nginx 伺服器。

##  專案目標 (Goal)
- 實作 Nginx 作為反向代理伺服器，將請求轉發至正確的服務。
- 使用 Docker Compose 實現一鍵佈署 (Infrastructure as Code 雛形)。
- 練習多容器間的網路通訊 (Docker Network)。

##  系統架構 (Architecture)
- **Nginx**: 監聽 80 端口，作為入口點。
- **React**: 前端靜態頁面。
- **Node.js**: 後端 API 服務。
- **Docker Compose**: 管理上述所有容器的生命週期與網路。

##  如何執行 (Usage)

### 前置作業
- 確保已安裝 Docker 與 Docker Compose。

### 啟動服務
```bash
# 複製專案並進入目錄
git clone [您的專案連結]
cd [專案資料夾]

# 啟動所有服務 (背景執行)
docker-compose up -d
