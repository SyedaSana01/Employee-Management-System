import { useState } from 'react';
import { Calendar, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Attendance } from '@/types';

// Mock Attendance data
const mockAttendance: Attendance[] = [
  {
    id: '1',
    userId: '1',
    name: 'John Doe',
    date: '2024-03-19',
    checkIn: '09:00',
    checkOut: '17:30',
    status: 'PRESENT',
  },
  {
    id: '2',
    userId: '2',
    name: 'Jane Smith',
    date: '2024-03-19',
    checkIn: '09:15',
    checkOut: '17:00',
    status: 'PRESENT',
  },
  {
    id: '3',
    userId: '3',
    name: 'Alice Johnson',
    date: '2024-03-19',
    checkIn: '09:05',
    checkOut: '16:45',
    status: 'PRESENT',
  },
  {
    id: '4',
    userId: '4',
    name: 'Bob Williams',
    date: '2024-03-19',
    checkIn: '09:10',
    checkOut: '16:50',
    status: 'PRESENT',
  },
  {
    id: '5',
    userId: '5',
    name: 'Emily Davis',
    date: '2024-03-19',
    checkIn: '09:20',
    checkOut: '17:10',
    status: 'PRESENT',
  },
  // More entries
];

export function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAttendance, setFilteredAttendance] = useState(mockAttendance);
  const [message, setMessage] = useState('');

  // Filter attendance by selected date
  const filterByDate = (date: string) => {
    return mockAttendance.filter((record) => record.date === date);
  };

  const handleCheckIn = () => {
    const id = prompt('Please enter your employee ID:');
    if (id) {
      const employee = mockAttendance.find((emp) => emp.userId === id);
      if (employee) {
        const newAttendance = filteredAttendance.map((record) =>
          record.userId === id && record.date === selectedDate
            ? { ...record, checkIn: new Date().toLocaleTimeString(), status: 'PRESENT' }
            : record
        );
        setFilteredAttendance(newAttendance);
        setMessage(`Employee ${employee.name} (ID: ${employee.userId}) checked in at ${new Date().toLocaleTimeString()}!`);
      } else {
        setMessage(`Employee with ID ${id} not found.`);
      }
    }
  };

  const handleCheckOut = () => {
    const id = prompt('Please enter your employee ID:');
    if (id) {
      const employee = mockAttendance.find((emp) => emp.userId === id);
      if (employee) {
        const newAttendance = filteredAttendance.map((record) =>
          record.userId === id && record.date === selectedDate
            ? { ...record, checkOut: new Date().toLocaleTimeString() }
            : record
        );
        setFilteredAttendance(newAttendance);
        setMessage(`Employee ${employee.name} (ID: ${employee.userId}) checked out at ${new Date().toLocaleTimeString()}!`);
      } else {
        setMessage(`Employee with ID ${id} not found.`);
      }
    }
  };

  const handleFilterByDate = () => {
    const filtered = filterByDate(selectedDate).sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    setFilteredAttendance(filtered);
  };

  const handleSearch = () => {
    const filtered = mockAttendance.filter((record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAttendance(filtered);
  };

  const handleGenerateReport = () => {
    const filtered = filterByDate(selectedDate);
    const reportContent = filtered.map((record) => `
      Name: ${record.name}
      Check-in: ${record.checkIn}
      Check-out: ${record.checkOut}
      Status: ${record.status}
    `).join("\n");
    alert(`Attendance Report for ${selectedDate}:\n\n${reportContent}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Attendance Tracking</h1>
        <div className="flex gap-3">
          <Button onClick={handleCheckIn}>
            <Clock className="h-4 w-4 mr-2" />
            Check In
          </Button>
          <Button variant="secondary" onClick={handleCheckOut}>
            <Clock className="h-4 w-4 mr-2" />
            Check Out
          </Button>
        </div>
      </div>

      {message && <div className="text-blue-600 font-semibold">{message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Today's Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600">Present</p>
              <p className="text-2xl font-semibold">132</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-600">Late</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-600">Absent</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">On Leave</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Button variant="secondary" onClick={handleGenerateReport}>
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search employees..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={handleSearch}
              />
            </div>
            <Button variant="secondary" onClick={handleFilterByDate}>
              <Calendar className="h-4 w-4 mr-2" />
              Filter by Date
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendance.map((record) => (
                <tr key={record.userId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{record.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.checkIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.checkOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


