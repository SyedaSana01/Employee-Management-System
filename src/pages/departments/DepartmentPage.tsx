import { useState } from 'react';
import { Plus, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const departments = [
  {
    id: '1',
    name: 'Engineering',
    head: 'Jane Smith',
    employeeCount: 45,
    budget: 450000,
  },
  {
    id: '2',
    name: 'Marketing',
    head: 'John Doe',
    employeeCount: 20,
    budget: 200000,
  },
  {
    id: '3',
    name: 'Human Resources',
    head: 'Alice Johnson',
    employeeCount: 10,
    budget: 100000,
  },
];

export function DepartmentPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Department Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">{dept.name}</h3>
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <dl className="mt-4 space-y-2">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Department Head</dt>
                <dd className="text-sm font-medium">{dept.head}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Employees</dt>
                <dd className="text-sm font-medium">{dept.employeeCount}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Budget</dt>
                <dd className="text-sm font-medium">${dept.budget.toLocaleString()}</dd>
              </div>
            </dl>
            <div className="mt-4 flex justify-end">
              <Button variant="secondary" size="sm">View Details</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search departments..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Head
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{dept.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{dept.head}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{dept.employeeCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${dept.budget.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">75%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="secondary" size="sm">Edit</Button>
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