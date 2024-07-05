# Custom File Server

Welcome to the Custom File Server project! This project involves creating a simple server using Node.js that hosts files and allows users to access them if they are available on the server. If a requested file is not found, the user will see a 404 Not Found page.

## Features
- Host files on your own server using Node.js.
- Users can access files if they are available on the server.
- Custom 404 Not Found page for unavailable files.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- Basic knowledge of JavaScript and HTML

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/VijayKumar9263/CUSTOM-FILE-SERVER.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd OWN-SERVER
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Start the server:**
    ```bash
    node index.js
    ```

## Project Structure
- `index.js`: The main file that sets up and starts the Node.js server.
- `index.html`, `about.html`, `contact.html`, `service.html`: HTML files for different pages.
- `style.css`: Stylesheet for the HTML pages.
- `Image/`: Directory for storing images.

## Usage
1. **Access the server:**
    Open your web browser and go to `http://localhost:3000/`.

2. **Request a file:**
    Enter the file name in the URL. For example, `http://localhost:3000/example.txt`.

3. **404 Not Found:**
    If the file is not available, you will see the custom 404 Not Found page.

## Screenshots

### Homepage
![image](https://github.com/VijayKumar9263/OWN-SERVER/assets/134833144/e6955b76-314d-463b-9e3a-b77b475e302a)

### File Access
![image](https://github.com/VijayKumar9263/OWN-SERVER/assets/134833144/77ef806a-6ee7-47cb-a313-68be37ec50e6)

### 404 Not Found
![image](https://github.com/VijayKumar9263/OWN-SERVER/assets/134833144/fe713dac-631b-4174-96fb-c96f6e2a9a48)

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspiration from various web development tutorials.
- Thanks to the open-source community for their valuable resources.
