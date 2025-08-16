# Product_Management

<strong>Getting into PERN STACK </strong>

🛍️ Product Management App

A full-stack PERN application (PostgreSQL, Express, React, Node.js) for managing products with CRUD functionality. Add, view, edit, and delete products with ease.

Built with React + Vite + Zustand on the frontend, and Express + Neon PostgreSQL on the backend. Styled with TailwindCSS + DaisyUI for a clean UI, and protected with Arcjet for rate-limiting and bot protection.


Frontend

  ⚛️ React (Vite)
  
  📦 Zustand (state management)
  
  🌐 React Router
  
  🎨 Tailwind CSS + DaisyUI
  
  🔗 Axios

Backend

  🟢 Node.js + Express.js
  
  🗄️ Neon (serverless PostgreSQL)
  
  🔑 dotenv (environment variables)
  
  🛡️ Arcjet (rate limiting + bot protection)



📋 Prerequisites

  Before running the project, make sure you have:
  
  Node.js v18+
  
  npm (comes with Node.js)
  
  A Neon PostgreSQL database (or any PostgreSQL instance)


⚙️ Setup & Installation
1️⃣ Clone the Repository
      --> git clone https://github.com/aadithyaa9/Product_Management.git
      cd Product_Management
      
2️⃣ Configure Environment Variables
      Create a .env file in the project root (Product_Management/.env):
          # Neon Database Credentials
              PUSER=your_database_user
              PHOST=your_database_host
              PDATABASE=your_database_name
              PPASSWORD=your_database_password
          # Arcjet Key (Optional)
              ARCJET_KEY=your_arcjet_sdk_key

3️⃣ Install Dependencies
      Backend  -> npm install
      Frontend -> npm install --prefix frontend



▶️ Running the Application
            Open two terminals:
                  Terminal 1 → Start Backend -> npm run dev
            Backend API → http://localhost:3000
                  Terminal 2 → Start Frontend -> cd Frontend -> npm run dev
            Frontend App → http://localhost:5173



  <img width="755" height="698" alt="image" src="https://github.com/user-attachments/assets/6e5c20c3-a851-4676-a307-e371a373cdda" />



🛠️ Features

  ✅ Create, Read, Update, Delete products
  
  🎨 Clean UI with Tailwind + DaisyUI
  
  ⚡ Fast frontend with Vite
  
  🔒 Secure backend with Arcjet
  
  🌐 Neon serverless PostgreSQL integration



🤝 Contributing

  Contributions are welcome!
  
  Fork this repo
  
  Create a new branch (feature/my-feature)
  
  Commit your changes
  
  Push and open a PR
  

📜 License

  This project is licensed under the MIT License.

                

        
