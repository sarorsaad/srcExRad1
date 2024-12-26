import { Button } from "@/components/ui/button";
import { useState } from 'react';
import * as XLSX from 'xlsx';
import html2pdf from 'html2pdf.js';
import { jsPDF } from "jspdf";

export default function ReportButtons({ data }) {
  // Assuming 'data' is the dataset you want to work with.

  // Function to copy data to clipboard
  const handleCopy = async () => {
    // Example: Copying text. Adapt as needed for your data.
    await navigator.clipboard.writeText(JSON.stringify(data));
    alert('Data copied to clipboard!');
  };

  // Function to export to Excel
  const handleExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, "report.xlsx");
  };

  // Function to export to CSV
  const handleCSV = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to export to PDF
  const handlePDF = () => {
    // Example: Converting the document body. Adjust as needed.
    const element = document.body; // This should be the specific element you wish to convert
    html2pdf(element, {
      margin:       1,
      filename:     'report.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
  };

  return (
    <div>
      <Button className="button bg-black text-white" onClick={handleCopy}>Copy</Button>
      <Button className="button bg-black text-white" onClick={handleExcel}>Excel</Button>
      <Button className="button bg-black text-white" onClick={handleCSV}>CSV</Button>
      <Button className="button bg-black text-white" onClick={handlePDF}>PDF</Button>
    </div>
  );
}
