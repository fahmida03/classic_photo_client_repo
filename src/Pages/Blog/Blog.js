import React from 'react';
import sql from '../../Assets/sql.png'
import js from '../../Assets/js.jpg'

const Blog = () => {
    return (
        <div className='mt-24 w-11/12 mx-auto'>
            <div className='flex mb-10 shadow-lg'>
                <div className=''>
                    <img src={sql} alt="" />
                </div>
                <div className='m-2 ml-8'>
                    <p className='text-2xl text-white'>Difference between SQL and NoSQL</p> <br />
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
            <div>

            </div>
            <div>
                <div className=''>
                    <img src={js} alt="" />
                </div>
                <div className='m-2 ml-8'>
                    <p className='text-2xl text-white'>Difference between SQL and NoSQL</p> <br />
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
            <div></div>
        </div>
    );
};

export default Blog;