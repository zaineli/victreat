'use client'
import React, { useState } from "react";

function Page() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Breast Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/breast-cancer-cells-illustration.jpg",
      description: "Breast cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Hormone therapy, Targeted therapy",
      prevention: "Regular exercise, Healthy diet, Limit alcohol, No smoking",
    },
    {
      id: 2,
      name: "Lung Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/lung-cancer-cells-illustration.jpg",
      description: "Lung cancer is the second most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Immunotherapy, Targeted therapy",
      prevention: "No smoking, Avoid secondhand smoke, Avoid carcinogens",
    },
    {
      id: 3,
      name: "Prostate Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/prostate-cancer-cells-illustration.jpg",
      description: "Prostate cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Hormone therapy, Immunotherapy",
      prevention: "Healthy diet, Regular exercise, Maintain healthy weight",
    },
    {
      id: 4,
      name: "Colorectal Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/colorectal-cancer-cells-illustration.jpg",
      description: "Colorectal cancer is the third most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Targeted therapy, Immunotherapy",
      prevention: "Healthy diet, Regular exercise, Maintain healthy weight",
    },
    {
      id: 5,
      name: "Skin Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/skin-cancer-cells-illustration.jpg",
      description: "Skin cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Immunotherapy, Targeted therapy",
      prevention: "Sun protection, Avoid tanning beds, Regular skin checks",
    },
    {
      id: 6,
      name: "Ovarian Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/ovarian-cancer-cells-illustration.jpg",
      description: "Ovarian cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Hormone therapy, Targeted therapy",
      prevention: "Oral contraceptives, Pregnancy, Tubal ligation",
    },
    {
      id: 7,
      name: "Pancreatic Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/pancreatic-cancer-cells-illustration.jpg",
      description: "Pancreatic cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Targeted therapy, Immunotherapy",
      prevention: "Healthy diet, Maintain healthy weight, No smoking",
    },
    {
      id: 8,
      name: "Leukemia",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/leukemia-cells-illustration.jpg",
      description: "Leukemia is the most common cancer",
      treatment:
        "Chemotherapy, Radiation, Targeted therapy, Immunotherapy, Stem cell transplant",
      prevention: "No known prevention",
    },
    {
      id: 9,
      name: "Liver Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/liver-cancer-cells-illustration.jpg",
      description: "Liver cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Targeted therapy, Immunotherapy",
      prevention: "Hepatitis B vaccine, Hepatitis C treatment, Limit alcohol",
    },
    {
      id: 10,
      name: "Brain Cancer",
      image:
        "https://www.cancer.gov/sites/default/files/styles/featured_image/public/2020-12/brain-cancer-cells-illustration.jpg",
      description: "Brain cancer is the most common cancer",
      treatment:
        "Surgery, Radiation, Chemotherapy, Targeted therapy, Immunotherapy",
      prevention: "No known prevention",
    },
  ]);
  const [query, setQuery] = useState("");

  const highlightKeyword = (text, keyword) => {
    const index = text.toLowerCase().indexOf(keyword.toLowerCase());
    if (index === -1) return text;

    const beforeKeyword = text.slice(0, index);
    const afterKeyword = text.slice(index + keyword.length);
    return (
      <>
        {beforeKeyword}
        <mark>{text.slice(index, index + keyword.length)}</mark>
        {afterKeyword}
      </>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-slate-900">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Search Cancer</h1>
        <input
          className="border border-gray-700 bg-gray-800 text-white rounded-md px-4 py-2 mt-4 w-80"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search Cancer"
        />
        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          {query !== "" && (
            <>
              <div className="flex justify-between w-full px-4">
                <span>All</span>
                <span>Files</span>
                <span>People</span>
              </div>
              {data
                .filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border border-gray-700 rounded-md w-full"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-xl font-bold">
                        {highlightKeyword(item.name, query)}
                      </h2>
                      <p className="text-sm">{item.description}</p>
                      <p className="text-sm">{item.treatment}</p>
                      <p className="text-sm">{item.prevention}</p>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
