# CINEMADOKU - Cinema Interactive Network Game

A modern, interactive puzzle game built with React that challenges players to connect movies and actors in a unique and engaging way.

## 🎮 Features

- **Drag and Drop Interface**: Intuitive tile placement using React DnD
- **Multiple Themes**: Customizable game themes to enhance the playing experience
- **Hint System**: Built-in hints to help players when stuck
- **Responsive Design**: Playable on both desktop and mobile devices
- **Image Preloading**: Smooth gaming experience with preloaded assets
- **Progress Saving**: Automatically saves game progress
- **Toast Notifications**: User-friendly feedback system

## 🚀 Tech Stack

- React 18.3
- React DnD for drag and drop functionality
- React Toastify for notifications
- Firebase for hosting and deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Builds and deploys to Firebase

## 🎯 Game Rules

1. Place movie and actor tiles on the game board
2. Connect related movies and actors
3. Use hints when needed
4. Complete the puzzle by making all valid connections

## 🔧 Configuration

The game can be configured through the following files:
- `src/config.js` - Feature flags and game settings
- `src/themes.js` - Theme configurations
- `src/demoPuzzles.js` - Puzzle definitions

## 🌐 Deployment

The game is configured for deployment on Firebase. To deploy:

1. Ensure you have Firebase CLI installed
2. Configure Firebase project settings in `.firebaserc`
3. Run `npm run deploy`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
