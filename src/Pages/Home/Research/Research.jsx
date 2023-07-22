import React, { useEffect, useState } from "react";
const Research = () => {
  const [researchs, setResearchs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/research")
      .then((res) => res.json())
      .then((data) => setResearchs(data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className=" mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Recommended Research Papers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {researchs.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Author: {paper.author}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Publication Year: {paper.publication_year}
                </p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Read Paper
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
