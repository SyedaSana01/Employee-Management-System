import { useState } from 'react';
import { Calendar, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Leave } from '@/types';

const mockLeaves: Leave[] = [
  {
    id: '1',
    userId: '1',
    type: 'VACATION',
    startDate: '2024-03-20',
    endDate: '2024-03-25',
    status: 'PENDING',
    reason: 'Annual vacation'
  },
  // Add more mock data as needed
];

export function LeavePage() {
  const [isApplyingLeave, setIsApplyingLeave] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Leave Management</h1>
        <Button onClick={() => setIsApplyingLeave(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Apply for Leave
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Vacation Leave</h3>
          <div className="mt-2">
            <span className="text-2xl font-semibold">12</span>
            <span className="text-gray-500 text-sm ml-2">days remaining</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Sick Leave</h3>
          <div className="mt-2">
            <span className="text-2xl font-semibold">8</span>
            <span className="text-gray-500 text-sm ml-2">days remaining</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Personal Leave</h3>
          <div className="mt-2">
            <span className="text-2xl font-semibold">3</span>
            <span className="text-gray-500 text-sm ml-2">days remaining</span>
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
                placeholder="Search leave requests..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="secondary">
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
                  Leave Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockLeaves.map((leave) => (
                <tr key={leave.id}>
                  <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap">{leave.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{leave.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{leave.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      leave.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                      leave.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="secondary" size="sm">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}