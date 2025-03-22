# Archaeological Artifacts Manager

A comprehensive system for managing archaeological artifacts with features for cataloging, documenting, and analyzing archaeological findings.

## Features

- 📝 Artifact Information Management
  - Basic information (location, period, size, material)
  - Photo and 3D scan file uploads
  - Metadata management
- 🔍 Advanced Search and Filtering
- 📊 Report Generation
- 🗺️ GIS Integration (planned)
- 📚 Digital Archive Management

## Tech Stack

- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB
- Storage: AWS S3
- Authentication: JWT + OAuth
- API Documentation: Swagger

## Project Structure

```
archaeological-artifacts-manager/
├── client/               # React frontend
├── server/              # Node.js backend
├── database/            # MongoDB schemas
├── docs/               # API documentation
└── utils/              # Shared utilities
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- AWS Account (for S3)

### Installation

1. Clone the repository
```bash
git clone https://github.com/kyi000/archaeological-artifacts-manager.git
cd archaeological-artifacts-manager
```

2. Install dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Set up environment variables
```bash
# Create .env file in server directory
cp .env.example .env
```

4. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server (in a new terminal)
cd client
npm start
```

## Contributing

We welcome contributions from the archaeological community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/kyi000/archaeological-artifacts-manager](https://github.com/kyi000/archaeological-artifacts-manager)