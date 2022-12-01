import React from 'react';
import sql from '../../Assets/image/sql.png'
import js from '../../Assets/image/js.jpg'
import jwt from '../../Assets/image/jwt.png'
import nodejs from '../../Assets/image/nodejs.png'

const Blog = () => {
    return (
        <div className='mt-24 w-11/12 mx-auto '>
            {/* 1st question */}

            <div className='mb-10 shadow-lg rounded-lg p-7 w-11/12 mx-auto'>
                <div className='mx-auto'>
                    <img src={sql} alt="" />
                </div>
                <div className='m-2 ml-8'>
                    <p className='text-2xl text-white text-center'>Difference between SQL and NoSQL</p> <br />
                    <p className='text-lg'>The five critical differences between SQL vs NoSQL are:</p>
                    <ol className='list-decimal'>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ol>
                </div>
            </div>

            {/* 2nd question */}

            <div className='mt-20 w-11/12 mx-auto p-7 shadow-lg rounded-lg'>
                <div className='w-2/5 mx-auto'>
                    <img src={jwt} alt="" />
                </div>
                <div className='mt-5'>
                    <p className='text-2xl text-white'>What is JWT, and how does it work?</p>
                    <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).
                        They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.</p>
                    <br />
                    <p className='text-white text-lg'>Five steps how it works</p>
                    <ol className='list-decimal'>
                        <li>During the first request, the client sends a POST request with a username and password.</li>
                        <li>Validate the username and password. Generate the JWT using a secret key</li>
                        <li>Upon successful authentication, the server generates the JWT and sends this JWT to the client.</li>
                        <li>This JWT can contain a payload of data. On all subsequent requests, the client sends this JWT token in the header.</li>
                        <li>Using this token the server authenticates the user. don’t need the client to send the username and password to the server each request for authentication.</li>
                    </ol>

                </div>
            </div>


            {/* 3rd question */}
            <div className='mt-20 w-11/12 mx-auto shadow-lg rounded-lg'>
                <div className='w-3/5 mx-auto'>
                    <img src={js} alt="" />
                </div>
                <div className='m-2 ml-8 mt-4 pb-5'>
                    <p className='text-2xl text-white text-center'>What is the difference between javascript and NodeJS?</p> <br />

                    <ol className='list-decimal text-start p-5'>
                        <li className='mb-3'>JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.</li>
                        <li className='mb-3'>JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. It needs libraries that may be easily accessed from JavaScript programming to make it more useful.</li>
                        <li className='mb-3'>JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and any running environment is equivalent to a proper browser. On the other hand, Node.js only supports the V8 engine, which is exclusive to Google Chrome. However, written JavaScript code can run in any environment, regardless of whether it supports the V8 engine.</li>
                        <li className='mb-3'>A particular non-blocking task is needed to access any operating system. There are some basic objects in JavaScript, but they are all os-specific. For example, ActiveX Control is a Windows-only application. However, Node.js is granted the ability to run non-blocking tasks unique to the operating system from any JavaScript programming. There are no os-specific constants in it. Node.js is well-versed in creating a clear binding with the file system, allowing the developer to read and write to disk.</li>
                        <li className='mb-3'>JavaScript's main advantages include a wide range of interfaces and interactivity and just the right amount of server contact and direct input to visitors. On the other hand, Node.js has a node package manager with over 500 modules and the ability to handle concurrent requests. It also has the special capability of supporting micro-service architecture as well as IoT.</li>
                    </ol>
                </div>
            </div>


            {/* 4th question */}
            <div className='m-20 p-7 shadow-lg rounded-lg w-11/12 mx-auto'>
                <div className='w-2/3 mx-auto mb-7'>
                    <img src={nodejs} alt="" />
                </div>
                <div>
                    <p className='text-2xl text-white mb-4'>How does NodeJS handle multiple requests at the same time?</p>
                    <p>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.</p>
                    <p className='mb-3'>Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.</p>
                    <p className='mb-3'>The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.</p>
                    <p className='mb-3'>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.</p>
                    <p className='mb-3'>So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                        The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                        If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;