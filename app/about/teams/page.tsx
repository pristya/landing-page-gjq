"use client";

import Navbar from "@/app/components/navbar/page";
import React from "react";

type Node = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  children?: Node[];
  labelAbove?: string; // tambahan
};

const BASE_PATH = "/teams/";

const tree: Node = {
  id: 1,
  name: "AHMAD TIJANI",
  role: "DIREKTUR GRIYA JICHU QOF",
  imageUrl: `${BASE_PATH}1.png`,
  children: [
    {
      id: 2,
      labelAbove: "KEUANGAN",
      name: "ZIKRI ALFIAN",
      role: "ACCOUNTING & TAX",
      imageUrl: `${BASE_PATH}2.png`,
      children: [
        { id: 3, name: "MUTHIA ASTUTI", role: "FINANCE", imageUrl: `${BASE_PATH}5.png` }
      ],
    },
    {
      id: 4,
      labelAbove: "PELAKSANA",
      name: "RIZQI PAHLEVI",
      role: "TEKNIK SIPIL",
      imageUrl: `${BASE_PATH}3.png`,
      children: [
        {
          id: 5,
          name: "AMIR",
          role: "SURVEYOR",
          imageUrl: `${BASE_PATH}6.png`,
          children: [
            { id: 6, name: "CHAERUL ANWAR", role: "M&E", imageUrl: `${BASE_PATH}8.png` },
          ],
        },
      ],
    },
    {
      id: 7,
      labelAbove: "PERENCANA",
      name: "EUNIKE",
      role: "ARSITEK",
      imageUrl: `${BASE_PATH}4.png`,
      children: [
        { id: 8, name: "ANINDYA Z.", role: "ARSITEK", imageUrl: `${BASE_PATH}7.png` },
      ],
    },
  ],
};

const TreeNode = ({ node }: { node: Node }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {node.labelAbove && (
          <p className="mb-2 text-sm font-semibold text-white dark:bg-gray-800 shadow-md rounded-xl px-4 py-3 text-center border border-gray-200">{node.labelAbove}</p>
        )}

        <div className="bg-white dark:bg-gray-300 shadow-md rounded-xl px-4 py-3 text-center border border-gray-200 dark:border-gray-700 flex flex-col items-center w-64 h-60">
          <img
            src={node.imageUrl}
            alt={node.name}
            className="w-40 h-40 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 mb-2"
          />
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{node.name}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">{node.role}</p>
        </div>

        {node.children && node.children.length > 0 && <div className="w-0.5 h-6 bg-gray-400"></div>}

        {node.children && node.children.length > 0 && (
          <div className="flex gap-6">
            {node.children.map((child) => (
              <div key={child.id} className="flex flex-col items-center">
                <div className="w-full h-0.5 bg-gray-400 mb-4"></div>
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default function OrganizationTree() {
  return (
    <>
    <Navbar />
<section className="py-20 px-4 md:px-8 lg:px-16 bg-white/40 backdrop-brightness-75 dark:bg-blue-300/50 min-h-screen">
<div className="max-w-6xl mx-auto text-center mb-12">
<h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Struktur Organisasi</h2>
<p className="mt-2 text-gray-600 dark:text-gray-300">Berikut adalah struktur organisasi tim kami dalam bentuk pohon.</p>
</div>


<div className="flex justify-center overflow-x-auto">
<TreeNode node={tree} />
</div>
</section>

    </>
  );
}
