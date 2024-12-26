import React from 'react';
import Link from 'next/link';

const Aside = () => {
  return (
    <div>
      <aside className="w-64 bg-[#2d3436] text-white h-full">
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold">Extreme Radiology</h2>
          <nav className="mt-8">
            <Link href="/" className="block px-4 py-2 mt-2 bg-[#d63031] rounded">Dashboard</Link>
            <Link href="/profile" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Profile</Link>
            <Link href="/invoices" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Invoices</Link>
            <Link href="/reports" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Reports</Link>
            <Link href="/branches" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Branches</Link>
            <Link href="/tests" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Tests</Link>
            <Link href="/doctors" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Doctors</Link>
            <Link href="/price-list" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Price List</Link>
            <Link href="/contracts" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Contracts</Link>
            <Link href="/patients" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Patients</Link>
            <Link href="/bookings" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Bookings</Link>
            <Link href="/chat" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Chat</Link>
            <Link href="/accounting" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Accounting</Link>
            <Link href="/roles-and-users" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Roles And Users</Link>
            <Link href="/settings" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Settings</Link>
            <Link href="/translations" className="block px-4 py-2 mt-2 hover:bg-gray-700 rounded">Translations</Link>
            <Link href="/activity-logs" className="block px-4 py-2 mt-2 bg-[#d63031] rounded">Activity Logs</Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
