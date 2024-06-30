<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Project Title: Custom File Server</h1>

<p>Welcome to the Custom File Server project! This project involves creating a simple server using Node.js that hosts files and allows users to access them if they are available on the server. If a requested file is not found, the user will see a 404 Not Found page.</p>

<h2>Features</h2>
<ul>
    <li>Host files on your own server using Node.js.</li>
    <li>Users can access files if they are available on the server.</li>
    <li>Custom 404 Not Found page for unavailable files.</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js installed on your machine</li>
    <li>Basic knowledge of JavaScript and HTML</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>
        <p><strong>Clone the repository:</strong></p>
        <pre><code>git clone https://github.com/VijayKumar9263/OWN-SERVER.git</code></pre>
    </li>
    <li>
        <p><strong>Navigate to the project directory:</strong></p>
        <pre><code>cd OWN-SERVER</code></pre>
    </li>
    <li>
        <p><strong>Install the dependencies:</strong></p>
        <pre><code>npm install</code></pre>
    </li>
    <li>
        <p><strong>Start the server:</strong></p>
        <pre><code>node index.js</code></pre>
    </li>
</ol>

<h2>Project Structure</h2>
<ul>
    <li><code>index.js</code>: The main file that sets up and starts the Node.js server.</li>
    <li><code>index.html</code>, <code>about.html</code>, <code>contact.html</code>, <code>service.html</code>: HTML files for different pages.</li>
    <li><code>style.css</code>: Stylesheet for the HTML pages.</li>
    <li><code>Image/</code>: Directory for storing images.</li>
</ul>

<h2>Usage</h2>
<ol>
    <li><strong>Access the server:</strong>
        <p>Open your web browser and go to <code>http://localhost:3000/</code>.</p>
    </li>
    <li><strong>Request a file:</strong>
        <p>Enter the file name in the URL. For example, <code>http://localhost:3000/example.txt</code>.</p>
    </li>
    <li><strong>404 Not Found:</strong>
        <p>If the file is not available, you will see the custom 404 Not Found page.</p>
    </li>
</ol>

<h2>Screenshots</h2>

<h3>Homepage</h3>
<img src="Image/homepage.png" alt="Homepage">

<h3>File Access</h3>
<img src="Image/file-access.png" alt="File Access">

<h3>404 Not Found</h3>
<img src="Image/404.png" alt="404 Not Found">

<h2>Contributing</h2>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch: <code>git checkout -b feature-branch</code>.</li>
    <li>Make your changes and commit them: <code>git commit -m 'Add some feature'</code>.</li>
    <li>Push to the branch: <code>git push origin feature-branch</code>.</li>
    <li>Submit a pull request.</li>
</ol>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Acknowledgments</h2>
<ul>
    <li>Inspiration from various web development tutorials.</li>
    <li>Thanks to the open-source community for their valuable resources.</li>
</ul>

</body>
</html>
