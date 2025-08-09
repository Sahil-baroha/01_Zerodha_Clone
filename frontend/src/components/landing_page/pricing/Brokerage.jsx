import React, { useState } from "react";

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  const PricingData = {
    equity: {
      title: "Equity",
      subtitles: [
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      data: {
        Brokerage: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
        "STT/CTT": [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.02% on the sell side",
          "0.125% of the intrinsic value on options that are bought and exercised\n0.1% on sell side (on premium)",
        ],
        "Transaction charges": [
          "NSE: 0.00297%\nBSE: 0.00375%",
          "NSE: 0.00297%\nBSE: 0.00375%",
          "NSE: 0.00173%\nBSE: 0",
          "NSE: 0.03503% (on premium)\nBSE: 0.0325% (on premium)",
        ],
        GST: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        "SEBI charges": [
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ],
        "Stamp charges": [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    },
    currency: {
      title: "Currency",
      subtitles: ["Currency feature", "Currency option"],
      data: {
        Brokerage: [
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        "STT/CTT": ["No STT", "No STT"],
        "Transaction charges": [
          `NSE: 0.00035% ${(<br />)}
          BSE: 0.00045%`,
          `NSE: 0.0311% ${(<br />)}
          BSE: 0.001%`,
        ],
        GST: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        "SEBI charges": ["₹10 / crore	", "₹10 / crore"],
        "Stamp charges": [
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ],
      },
    },
    commodity: {
      title: "Commodity",
      subtitles: ["Commodity futures", "Commodity options"],
      data: {
        Brokerage: [
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        "STT/CTT": ["0.01% on sell side (Non-Agri)", "0.05% on sell side"],
        "Transaction charges": [
          "MCX: 0.0021%\nNSE: 0.0001%",
          "MCX: 0.0418%\nNSE: 0.001%",
        ],
        GST: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        "SEBI charges": [
          "Agri: ₹1 / crore\nNon-agri: ₹10 / crore",
          "₹10 / crore",
        ],
        "Stamp charges": [
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    },
  };

  // Helper function to render text with line breaks
  const renderTextWithLineBreaks = (text) => {
    if (typeof text !== "string") return text;

    return text.split("\n").map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="container overflow-x-auto">
      <div className="flex flex-wrap gap-4 min-w-full border-b-[1px] my-6 border-b-gray-200">
        {Object.keys(PricingData).map((tab) => {
          return (
            <button
              className={`font-semibold px-6 py-2 text-[1.8rem] transition-colors ${
                activeTab === tab
                  ? "text-gray-500 border-b-2 border-blue-500"
                  : "text-blue-500 hover:text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {PricingData[tab].title}
            </button>
          );
        })}
      </div>

      {/* Tables*/}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-left min-w-48">
                Charges
              </th>

              {PricingData[activeTab].subtitles.map((subtitle) => {
                return (
                  <th className="border border-gray-300 px-4 py-3 text-left min-w-48">
                    {subtitle}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="">
            {Object.entries(PricingData[activeTab].data).map(
              ([rowName, rowData], rowIndex) => {
                return (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-600 bg-gray-50">
                      {rowName}
                    </td>{" "}
                    {rowData.map((cellData, cellIndex) => {
                      return (
                        <td key={cellIndex} className="border-[1px] border-gray-300 px-3 py-8">
                          {renderTextWithLineBreaks(cellData)}
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brokerage;
