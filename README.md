# UserCard Manager

UserCard Manager is a responsive React application that displays a list of users in a card-based layout using Bootstrap. Users are visually organized with profile pictures, roles highlighted by colored badges, and personal information. It includes a real-time search feature that filters users by email and displays results dynamically.

## 🔍 Features

- 📇 User cards with image, role, email, phone, and birth date
- 🎨 Circular profile images styled using Bootstrap
- 🔴🟢🟡 Role-based badge colors (admin, user, moderator)
- 🔎 Live search by email address
- 🔁 Reset functionality to show all users again
- ⚙️ Component-based structure with props and state management

## 🚀 Tech Stack

- React
- Bootstrap 5
- JavaScript (ES6+)

## 📁 Folder Structure

src/
├── components/
│ ├── Users.jsx # Parent component handling the list and search
│ └── UsersCard.jsx # Individual user card component
├── utils/
│ └── data.js # Mock users data
├── App.js
└── index.js

bash
Copy
Edit

## 🛠️ How to Run Locally

1. Clone the repository:
   git clone https://github.com/yourusername/usercard-manager.git
   cd usercard-manager

2. Install dependencies:
   npm install
   Start the development server:
   npm start
   Open http://localhost:3000 in your browser.

📸 Screenshots
Default View	Search Filtered

Made with ❤️ using React and Bootstrap.
