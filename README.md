📦 Kubernetes Full Stack DevOps Project (MongoDB + Express + Nginx Frontend)

A production-style Kubernetes deployment of a full-stack application using:

⚙️ Backend: Node.js (Express)
🗄️ Database: MongoDB (StatefulSet)
🌐 Frontend: Nginx serving static HTML (ConfigMap-driven UI)
☸️ Orchestration: Kubernetes (Docker Desktop)
🔁 Configuration: ConfigMaps + Services + Deployments
🚀 Architecture Overview
                     ┌──────────────────────────┐
                     │      Browser (User)      │
                     └────────────┬─────────────┘
                                  │
                                  ▼
                     ┌──────────────────────────┐
                     │   Frontend (Nginx Pod)   │
                     │  - HTML from ConfigMap   │
                     │  - Reverse Proxy /api    │
                     └────────────┬─────────────┘
                                  │
                                  ▼
                     ┌──────────────────────────┐
                     │ Backend (Node.js API)    │
                     │  - Express Server        │
                     │  - Connects to MongoDB   │
                     └────────────┬─────────────┘
                                  │
                                  ▼
                     ┌──────────────────────────┐
                     │ MongoDB StatefulSet      │
                     │  - Persistent Storage     │
                     └──────────────────────────┘
🧱 Kubernetes Components Used
📦 Workloads
Deployment → Frontend, Backend
StatefulSet → MongoDB
🌐 Networking
ClusterIP → Backend, MongoDB
NodePort → Frontend (external access)
⚙️ Configuration
ConfigMap → Frontend HTML
ConfigMap → Nginx reverse proxy config
Environment Variables → MongoDB connection string
💾 Storage
PersistentVolumeClaim (MongoDB data persistence)
📁 Project Structure
kubernetes-full-project/
│
├── k8s/
│   ├── backend/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── server.js
│   │
│   ├── frontend/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── configmap.yaml
│   │   └── nginx-config.yaml
│   │
│   ├── mongo/
│   │   ├── statefulset.yaml
│   │   ├── service.yaml
│   │   └── pvc.yaml
│
├── README.md
⚙️ Prerequisites

Before running this project, ensure you have:

Docker Desktop (with Kubernetes enabled)
kubectl installed
Git installed
VS Code (recommended)

Check cluster:

kubectl get nodes
🚀 Deployment Steps
1️⃣ Create namespace
kubectl create namespace dev
2️⃣ Deploy MongoDB
kubectl apply -f k8s/mongo/
3️⃣ Deploy Backend
kubectl apply -f k8s/backend/
4️⃣ Deploy Frontend
kubectl apply -f k8s/frontend/
🌐 Access Application
Option 1 — Port Forward (Local Dev)
kubectl port-forward service/frontend 8081:80 -n dev

Open:

http://localhost:8081
Option 2 — NodePort Access

Frontend runs on:

http://localhost:30007
🧪 Test API Flow

From frontend UI:

👉 Click “Test Backend”

Expected response:

Backend is running 🚀
🔐 Key Features Implemented
✅ Frontend
Nginx-based static UI
HTML served via ConfigMap
API proxy to backend
✅ Backend
Express.js REST API
Environment-based MongoDB connection
Kubernetes service discovery
✅ MongoDB
StatefulSet deployment
Persistent storage (data survives pod restart)
🧠 Key Kubernetes Concepts Demonstrated
Pods, Deployments, StatefulSets
Services (ClusterIP & NodePort)
ConfigMaps (UI + Nginx config)
DNS-based service discovery
Port forwarding
Container networking inside cluster
🚨 Known Issues & Lessons Learned
❌ Common mistake
ConfigMap changes do NOT auto-refresh pods
✅ Fix
kubectl rollout restart deployment frontend -n dev
❌ Nginx 404 errors

Cause:

Missing /api reverse proxy config
❌ Port-forward issues

Cause:

Port already in use
Fix:
Use different port (8081, 8090, etc.)
🔥 What I learned from this project
Kubernetes networking is service-based, not localhost-based
ConfigMaps must be mounted correctly to take effect
Stateful apps require persistent volumes
Frontend-backend communication needs explicit routing
Debugging Kubernetes requires layered thinking (pod → service → config → network)
🚀 Future Improvements
Helm chart packaging
Ingress controller (no port-forward needed)
CI/CD pipeline (GitHub Actions)
MongoDB authentication
Horizontal Pod Autoscaler
👨‍💻 Author

Solomon Esekhile-Leo
