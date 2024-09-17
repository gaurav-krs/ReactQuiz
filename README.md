# **Quiz Application**

A **React.js** single-page application (SPA) that fetches quiz questions from an API, allows users to answer them, provides real-time feedback by highlighting correct answers in **green** and incorrect answers in **red**, and displays the final score. The user can restart the game at the end.

## **Features**

- Fetches quiz questions from an API.
- Provides feedback on the correctness of answers:
  - **Green**: Correct Answer.
  - **Red**: Wrong Answer.
- Displays final score at the end.
- Option to restart the quiz.

## **Tech Stack**

- **Frontend**: React.js
- **State Management**: React Hooks
- **Styling**: CSS/SCSS
- **API Integration**: Fetch/AXIOS (depending on what you're using)

## **Getting Started**

Follow the instructions below to get a copy of the project up and running on your local machine.

### **Prerequisites**
Ensure you have the following installed on your machine:

Node.js
npm or yarn
Installation
Clone the repository:

bash
Copy code
cd quiz-app
Install dependencies:

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Running the Application
Start the development server:

bash
Copy code
npm start
Or using yarn:

bash
Copy code
yarn start
The app will be available at http://localhost:3000.

### **Usage**
The app will fetch quiz questions from the API and display them.
Answer the questions by selecting one of the options.
The correct answer will be highlighted in green, and the wrong answers will be highlighted in red.
At the end of the quiz, your score will be displayed.
You can restart the quiz by clicking the Restart button.