# PeerPort - Connect with Developers 🚀

A modern developer networking platform built with React, Redux, and real-time chat functionality. Connect with fellow developers, build meaningful relationships, and grow your professional network in the tech community.

## ✨ Features

- **Smart Developer Matching** - Discover developers based on skills, interests, and career goals
- **Real-time Chat** - Instant messaging with Socket.IO integration
- **Profile Management** - Comprehensive profiles with skills, experience, and photo uploads
- **Connection System** - Send/receive connection requests and manage your network
- **Responsive Design** - Beautiful UI with Tailwind CSS and DaisyUI components
- **Secure Authentication** - JWT-based authentication with protected routes

## 🛠️ Tech Stack

- **Frontend**: React 19, Redux Toolkit, React Router
- **Styling**: Tailwind CSS, DaisyUI
- **Real-time**: Socket.IO Client
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd peerport-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Body.jsx        # Main layout wrapper
│   ├── NavBar.jsx      # Navigation component
│   ├── Welcome.jsx     # Landing page
│   ├── Login.jsx       # Authentication
│   ├── Feed.jsx        # User discovery feed
│   ├── Profile.jsx     # User profile management
│   ├── Connections.jsx # Network connections
│   ├── Request.jsx     # Connection requests
│   ├── Chat.jsx        # Real-time messaging
│   └── ...
├── utils/              # Redux store and utilities
│   ├── appStore.js     # Redux store configuration
│   ├── userSlice.js    # User state management
│   ├── feedSlice.js    # Feed state management
│   ├── socket.js       # Socket.IO configuration
│   └── constants.js    # API constants
└── App.jsx             # Main app component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### Authentication System
- Secure login/signup with JWT tokens
- Protected routes for authenticated users
- Persistent user sessions

### Developer Feed
- Swipe-style interface for discovering developers
- Interest/ignore functionality
- Smart matching algorithm

### Real-time Chat
- Instant messaging between connected developers
- Socket.IO powered real-time communication
- Message history and user presence

### Profile Management
- Comprehensive developer profiles
- Skill tags and experience levels
- Photo upload functionality
- Editable personal information

### Connection System
- Send connection requests to other developers
- Accept/reject incoming requests
- Manage your professional network
- Search and filter connections

## 🎨 Design Philosophy

PeerPort features a modern, dark-themed UI with:
- Gradient backgrounds and smooth transitions
- Responsive design for all device sizes
- Intuitive navigation and user experience
- Professional color scheme optimized for developers

## 🔗 API Integration

The frontend connects to a backend API with endpoints for:
- User authentication and management
- Developer feed and matching
- Connection requests and management
- Real-time chat functionality
- File uploads and media handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and modern web technologies
- UI components powered by Tailwind CSS and DaisyUI
- Real-time functionality enabled by Socket.IO
- Icons provided by Lucide React

---

**PeerPort** - Where developers connect, collaborate, and grow together! 🚀