"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export default function ProductAccordion({ items }: ProductAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-base font-semibold text-secondary">
              {item.title}
            </span>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-sm text-gray-600">
              {typeof item.content === "string" ? (
                <p>{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


