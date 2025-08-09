# CI/CD Pipeline Demo

A comprehensive DevOps demonstration showcasing modern CI/CD practices with automated testing, security scanning, containerization, and deployment automation.

## 🚀 Features

- **Express.js REST API** with health endpoints
- **Automated Testing** with Jest and Supertest
- **Multi-stage Docker Build** for production optimization
- **GitHub Actions CI/CD** with 4-stage pipeline
- **Security Scanning** with npm audit
- **Nginx Reverse Proxy** for load balancing
- **Docker Compose** for multi-container deployment

## 📋 API Endpoints

- `GET /` - API information
- `GET /health` - Health check endpoint
- `POST /users` - Create user (requires name and email)

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Run with Docker Compose
docker-compose up --build
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Test Stage** - Runs Jest test suite
2. **Security Stage** - npm audit for vulnerabilities
3. **Build Stage** - Docker image creation
4. **Deploy Stage** - Deployment simulation

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access application
curl http://localhost/health
```

## 📊 DevOps Technologies Demonstrated

- **Version Control**: Git, GitHub
- **CI/CD**: GitHub Actions
- **Testing**: Jest, Supertest
- **Security**: npm audit, Helmet.js
- **Containerization**: Docker, Docker Compose
- **Reverse Proxy**: Nginx
- **Monitoring**: Health checks
- **Infrastructure as Code**: Docker Compose YAML