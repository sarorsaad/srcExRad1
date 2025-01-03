/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FVN7Er3wYbz
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"



export  default function reportComponent() {

  
  return (
    <div className="bg-white">
      <div className="bg-[#41a342] p-4 text-white">
        <h1 className="text-2xl font-bold">Reports</h1>
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-2">
        <Button className="report-button bg-black text-white">Copy</Button>
<Button className="report-button bg-black text-white">Excel</Button>
<Button className="report-button bg-black text-white">CSV</Button>
<Button className="report-button bg-black text-white">PDF</Button>
        </div>
        <div className="flex space-x-2">
          <Input placeholder="Search:" type="text" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg">Filters</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
            <div>
            <Label htmlFor="status">Status</Label>
            <div id="status"> {/* Wrapper with id */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="done">Done</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="barcode">Barcode</Label>
            <Input id="barcode" placeholder="Enter barcode" type="text" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Barcode</TableHead>
              <TableHead>Patient Code</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Tests</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Done</TableHead>
              <TableHead>Signed</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>340</TableCell>
              <TableCell>180817134647</TableCell>
              <TableCell>1710238933403</TableCell>
              <TableCell>Hassan Hassan</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>18 Years</TableCell>
              <TableCell>1234567890</TableCell>
              <TableCell>
                <div>CBC</div>
                <div>CBC ONE</div>
                <div>CBC ESR</div>
                <div>CBC</div>
              </TableCell>
              <TableCell>12-03-2024 10:25</TableCell>
              <TableCell>
                <CircleIcon className="text-red-500" />
              </TableCell>
              <TableCell>
                <FileEditIcon className="text-red-500" />
              </TableCell>
              <TableCell>
                <CircleEllipsisIcon className="text-red-500" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center p-4">
        <div>Show 10 entries</div>
        <div className="flex space-x-2">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}

import React, { SVGProps } from 'react';
function CircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function FileEditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function CircleEllipsisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  )
}
