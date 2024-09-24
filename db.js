var http = require('http');
var url = require('url');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://localhost:27017/';
var client = new MongoClient(uri);
const fs = require('fs');
const express = require('express');

var globalEmail; // Global variable to store email


async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();

async function onRequest(req, res) {
    var path = url.parse(req.url).pathname;
    
    if (path === '/insert') {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // Convert Buffer to string
            });
            req.on('end', async () => {
                var qs = querystring.parse(body);
                await insert(req, res, qs);
            });
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    }
     else if (path === '/login') {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // Convert Buffer to string
            });
            req.on('end', async () => {
                var qs = querystring.parse(body);
                await login(req, res, qs);
            });
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    } else if (path === '/index.html') {
        // Serve the ap1.html file
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }else if (path === '/tasks/index1.html') {
    // Serve the another_page.html file
    fs.readFile('tasks/index1.html', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
    }
    else if (path === '/stories.html') {
        // Serve the another_page.html file
        fs.readFile('stories.html', function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
        }
        else if (path === '/event_calender.html') {
            // Serve the another_page.html file
            fs.readFile('event_calender.html', function(err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
            }
            else if (path === '/reu.html') {
                // Serve the another_page.html file
                fs.readFile('reu.html', function(err, data) {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.end('404 Not Found');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data);
                    }
                });
                }
                else if (path === '/about.html') {
                    // Serve the another_page.html file
                    fs.readFile('about.html', function(err, data) {
                        if (err) {
                            res.writeHead(404, { 'Content-Type': 'text/plain' });
                            res.end('404 Not Found');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(data);
                        }
                    });
                    }
                    else if (path === '/alumini_needs.html') {
                        // Serve the another_page.html file
                        fs.readFile('alumini_needs.html', function(err, data) {
                            if (err) {
                                res.writeHead(404, { 'Content-Type': 'text/plain' });
                                res.end('404 Not Found');
                            } else {
                                res.writeHead(200, { 'Content-Type': 'text/html' });
                                res.end(data);
                            }
                        });
                        }
                        else if (path === '/Donation.html') {
                            // Serve the another_page.html file
                            fs.readFile('Donation.html', function(err, data) {
                                if (err) {
                                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                                    res.end('404 Not Found');
                                } else {
                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                    res.end(data);
                                }
                            });
                            }
                            else if (path === '/specialweb.html') {
                                // Serve the another_page.html file
                                fs.readFile('specialweb.html', function(err, data) {
                                    if (err) {
                                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                                        res.end('404 Not Found');
                                    } else {
                                        res.writeHead(200, { 'Content-Type': 'text/html' });
                                        res.end(data);
                                    }
                                });
                                }
                                else if (path === '/mentorform.html') {
                                    // Serve the another_page.html file
                                    fs.readFile('mentorform.html', function(err, data) {
                                        if (err) {
                                            res.writeHead(404, { 'Content-Type': 'text/plain' });
                                            res.end('404 Not Found');
                                        } else {
                                            res.writeHead(200, { 'Content-Type': 'text/html' });
                                            res.end(data);
                                        }
                                    });
                                    }
                                    else if (path === '/event.html') {
                                        // Serve the another_page.html file
                                        fs.readFile('event.html', function(err, data) {
                                            if (err) {
                                                res.writeHead(404, { 'Content-Type': 'text/plain' });
                                                res.end('404 Not Found');
                                            } else {
                                                res.writeHead(200, { 'Content-Type': 'text/html' });
                                                res.end(data);
                                            }
                                        });
                                        }
                                        else if (path === '/caro.html') {
                                            // Serve the another_page.html file
                                            fs.readFile('caro.html', function(err, data) {
                                                if (err) {
                                                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                                                    res.end('404 Not Found');
                                                } else {
                                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                                    res.end(data);
                                                }
                                            });
                                            }
                                            else if (path === '/animate.html') {
                                                // Serve the another_page.html file
                                                fs.readFile('animate.html', function(err, data) {
                                                    if (err) {
                                                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                                                        res.end('404 Not Found');
                                                    } else {
                                                        res.writeHead(200, { 'Content-Type': 'text/html' });
                                                        res.end(data);
                                                    }
                                                });
                                                }

     else if (path === '/display') {
        // Handle display functionality
        await display(req, res);
    } 
    else if (path === '/display1') {
        // Handle display functionality
        await display1(req, res);
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}

async function insert(req, res, qs) {
    try {
        var db = client.db('user');
        var collection = db.collection('details');

        // Check if email or EMIS number already exists
        var existingUser = await collection.findOne({
            $or: [
                { email: qs["email"] }
            ]
        });

        if (existingUser) {
            // Email or EMIS number already exists
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<script>alert("Email already exists!"); window.history.back();</script>');
            return;
        }

        // If not, insert the new user
        var data = {
            name: qs["name"],
            email: qs["email"],
            mobile: qs["mobile"],
            password: qs["password"]
        };

        var result = await collection.insertOne(data);
        console.log("Document inserted:", result.insertedCount);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Sign Up Successful');
    } catch (error) {
        console.error("Error inserting document:", error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error inserting document');
    }
}

// Required to read and serve static files

async function login(req, res, qs) {
    try {
        var db = client.db('user');
        var collection = db.collection('details');

        var user = await collection.findOne({
            email: qs["email"],
            password: qs["password"]
        });

        if (user) {
            // Store email globally upon successful login
            globalEmail=qs["email"];
            // Redirect to dashboard.html on successful login
            res.writeHead(302, {
                'Location': '/index.html',
                'Content-Type': 'text/plain'
            });
            res.end('Redirecting...');
        } else {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('Invalid Email or Password');
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
}

async function display(req, res) {
    try {
        if (!globalEmail) {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('No user logged in');
            return;
        }

        var db = client.db('user');
        var collection = db.collection('details');

        var user = await collection.findOne({ email:globalEmail });

        

        if (user) {
            // Serve HTML with user details
            res.writeHead(200, { 'Content-Type': 'text/html' });

            // Create an HTML template
            const html = `
                <!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <style>
        .sticky {
            position: sticky;
            top: 10px;
            /* Adjust as needed */
        }


        .bg-primary {
            background-color: #002366 !important;
        }


        .btn-primary {
            background-color: #002366 !important;
            border-color: #002366 !important;
        }


        .text-primary {
            color: gold !important;
        }


        .navbar-brand {
            color: gold !important;
        }


        .nav-link {
            color: white !important;
        }


        .nav-link.dropdown-toggle {
            color: white !important;
        }


        .dropdown-menu {
            background-color: #002366 !important;
            /* Ensures dropdown menu background matches the navbar */
        }


        .dropdown-item {
            color: white !important;
            /* Ensures dropdown items are white */
        }


        .dropdown-item:hover {
            background-color: #002366 !important;
            /* Optional: changes background color on hover */
        }


        #hello {
            background-color: #002366;
        }


        /* Global Styles */
        body {
            background-color: #f8f9fa;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }


        .container {
            max-width: 1200px;
            margin: 0 auto;
        }


        a {
            color: #007bff;
            text-decoration: none;
        }


        a:hover {
            text-decoration: underline;
        }


        /* Card Styles */
        .card {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 8px;
            background-color: #ffffff;
            overflow: hidden;
        }


        .card-body {
            padding: 1.5rem;
        }


        .card-body.text-center {
            background-color: #343a40;
        }


        .card-body.text-center h2 {
            margin: 0;
            color: #ffffff;
        }


        .card p {
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }


        /* Profile Section */
        .col-md-9 .card-body p {
            font-size: 1.1rem;
            color: #495057;
        }


        .col-md-9 .card-body strong {
            color: #212529;
        }


        /* Sidebar Section */
        .col-md-3 {
            position: sticky;
            top: 2rem;
        }


        ul.list-group {
            border-radius: 8px;
            overflow: hidden;
        }


        ul.list-group .list-group-item {
            font-size: 1rem;
            padding: 1rem;
            transition: background-color 0.3s ease;
            cursor: pointer;
        }


        ul.list-group .list-group-item:hover {
            background-color: #e9ecef;
        }


        ul.list-group .list-group-item a {
            color: #212529;
            font-weight: 500;
        }


        ul.list-group .list-group-item a:hover {
            text-decoration: none;
            color: #007bff;
        }


        /* Modal Styles */
        .modal-content {
            border-radius: 8px;
        }


        .modal-header {
            border-bottom: 1px solid #dee2e6;
        }


        .modal-header h5 {
            color: #343a40;
        }


        .modal-body button {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }


        /* Button Styles */
        button.btn {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }


        button.btn:hover {
            background-color: #0056b3;
            color: #fff;
        }


        #openModal {
            margin-bottom: 2rem;
        }


        /* Scroll Up Button */
        a.text-decoration-none i {
            font-size: 1.5rem;
        }


        a.text-decoration-none i:hover {
            color: #007bff;
        }


        /* Dark Mode Styles */
        body.dark-mode {
            background-color: #121212;
            color: #e0e0e0;
        }


        body.dark-mode .card-body.text-center {
            background-color: #1f1f1f;
        }


        body.dark-mode .card {
            background-color: #2c2c2c;
            color: #e0e0e0;
        }


        body.dark-mode ul.list-group .list-group-item {
            background-color: #333;
            color: #e0e0e0;
        }


        body.dark-mode ul.list-group .list-group-item:hover {
            background-color: #444;
        }


        body.dark-mode .modal-content {
            background-color: #1f1f1f;
            color: #e0e0e0;
        }


        body.dark-mode .btn-primary {
            background-color: #007bff;
            color: #fff;
        }


        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 0 15px;
            }


            .col-md-3 {
                margin-bottom: 2rem;
            }


            .card-body {
                padding: 1rem;
            }


            button.btn {
                padding: 0.6rem 1.2rem;
            }


            ul.list-group .list-group-item {
                padding: 0.75rem;
                font-size: 0.9rem;
            }
        }


        /* Move Up Button Styling */
        .move-up {
            display: inline-flex;
            align-items: center;
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            font-size: 1rem;
            font-weight: 500;
            border-radius: 50px;
            border: none;
            transition: background-color 0.3s ease, transform 0.3s ease;
            text-transform: uppercase;
            margin-bottom: 20px;
        }


        .move-up:hover {
            background-color: #0056b3;
            transform: translateY(-5px);
            /* Add a lift on hover */
        }


        .move-up i {
            margin-right: 10px;
            font-size: 1.2rem;
        }


        .move-up:active {
            transform: translateY(2px);
            /* Button press effect */
        }


        .move-up .bi-arrow-up {
            color: white;
            font-size: 1.2rem;
        }


        .move-up:hover .bi-arrow-up {
            color: #fff;
        }
        #cc{
            background-color: #002366;
        }
    </style>


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>


<body>


    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #002366;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Alumni Portal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>


    <div class="container mt-4 p-5">
        <div class="row">
            <!-- Left Panel with Sections -->

            <!-- Right Side Profile Section -->
            <div class="col-md-9" id="upd">
                <!-- Profile Section -->
                <div class="card mb-3">
                    <div class="card-body text-white text-center"id="cc">
                        <h2>My Profile</h2>
                    </div>
                </div>


                <!-- Profile Details -->
                <div class="card mb-3">
                    <div class="card-body">
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Mobile:</strong> ${user.mobile}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Settings Modal -->
    <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="settingsModalLabel">Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <button class="btn btn-primary w-100 mb-2" onclick="toggleDarkMode()">Dark/Light Mode</button>
                    <button class="btn btn-primary w-100 mb-2">Update Your Profile</button>
                    <button class="btn btn-primary w-100">Alumni Points: <span id="alumniPoints">1250</span></button>
                </div>
            </div>
        </div>
    </div>


    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


    <script>
        // Dark mode toggle functionality
        function toggleDarkMode() {
            document.body.classList.toggle('bg-dark');
            document.body.classList.toggle('text-white');
        }


        // Open Settings Modal
        document.getElementById('openModal').addEventListener('click', function () {
            new bootstrap.Modal(document.getElementById('settingsModal')).show();
        });
    </script>
</body>


</html>


            `;

            res.end(html);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('User not found');
        }
    } catch (error) {
        console.error("Error during display:", error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
}


http.createServer(onRequest).listen(7000);
console.log('Server is running on port 7000...');
