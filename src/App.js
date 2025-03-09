import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Personal Website
      </motion.h1>
      <p className="text-lg text-gray-300 mb-6">Exploring data, insights, and creativity.</p>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/cv"><button className="btn">CV</button></Link>
        <Link to="/projects"><button className="btn">Projects</button></Link>
        <Link to="/publications"><button className="btn">Publications</button></Link>
        <Link to="/hobbies"><button className="btn">Hobbies</button></Link>
        <Link to="/gallery"><button className="btn">Photo Gallery</button></Link>
        <Link to="/blog"><button className="btn">Scientific Blog</button></Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const [posts] = useState([
    { title: "Understanding Data Science", content: "Data Science is an interdisciplinary field..." },
    { title: "Machine Learning in Chemistry", content: "Exploring ML models for chemical analysis..." },
    { title: "Visualization Techniques", content: "How to present data effectively with charts and graphs." }
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Scientific Blog</h1>
      <p className="text-lg text-gray-300 mb-6">A collection of articles on scientific topics, data analysis, and technology.</p>
      <div className="space-y-4 w-full max-w-2xl">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<div className="text-white">CV Page</div>} />
        <Route path="/projects" element={<div className="text-white">Projects Page</div>} />
        <Route path="/publications" element={<div className="text-white">Publications Page</div>} />
        <Route path="/hobbies" element={<div className="text-white">Hobbies Page</div>} />
        <Route path="/gallery" element={<div className="text-white">Photo Gallery</div>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;