# Open-Kommunity

Welcome to the Open-Kommunity Template! This project is designed to help school clubs create a professional and customizable online platform using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User-friendly interface for easy navigation
- Customizable pages for club information, events, and announcements
- Member management system
- Event management system
- Responsive design for seamless use on all devices

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Open-Kommunity.git
   cd Open-Kommunity
   ```

2. **Install backend dependencies:**

```bash
cd server
npm install
```

3. **Install frontend dependencies:**

```bash
cd ../client
npm install
```
4. **Configuration**
### Backend Configuration:

Create a .env file in the backend directory.
Add the following environment variables:
```plaintext
PORT=3001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
### Frontend Configuration:

Create a .env file in the frontend directory.
Add the following environment variable:

```plaintext
REACT_APP_API_URL=http://localhost:3001/api
```

6. **Running the Application**
Start the backend server:

```bash
cd backend
npm start
```

Start the frontend server:
```bash
cd ../frontend
npm start
```
Open your browser and navigate to http://localhost:3000 to see the application running.

## Usage
Customize the website to fit your school club's needs by editing the React components and backend API routes. Add your own styling and features to make the website unique.

## Contributing
Contributions are welcome! 

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
I was inspired by this [design](https://dribbble.com/shots/18613046-Motoride-Motorcycle-Community-Landing-Page-Animation.)

