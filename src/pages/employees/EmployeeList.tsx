import { useState } from 'react';
import { Plus, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const initialEmployees = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    department: 'Engineering',
    position: 'Senior Developer',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    department: 'Design',
    position: 'Lead Designer',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    department: 'Marketing',
    position: 'Marketing Specialist',
    status: 'Inactive',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@example.com',
    department: 'Engineering',
    position: 'Software Engineer',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Chris Brown',
    email: 'chris@example.com',
    department: 'HR',
    position: 'HR Manager',
    status: 'Active',
  },
  {
    id: '6',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    department: 'Finance',
    position: 'Accountant',
    status: 'Inactive',
  },
  {
    id: '7',
    name: 'David Lee',
    email: 'david@example.com',
    department: 'Engineering',
    position: 'Frontend Developer',
    status: 'Active',
  },
  {
    id: '8',
    name: 'Linda Thompson',
    email: 'linda@example.com',
    department: 'Customer Support',
    position: 'Support Manager',
    status: 'Active',
  },
  {
    id: '9',
    name: 'Paul Walker',
    email: 'paul@example.com',
    department: 'Marketing',
    position: 'Content Strategist',
    status: 'Inactive',
  },
  {
    id: '10',
    name: 'Karen Scott',
    email: 'karen@example.com',
    department: 'Design',
    position: 'UX/UI Designer',
    status: 'Active',
  },
  {
    id: '11',
    name: 'James White',
    email: 'james@example.com',
    department: 'Sales',
    position: 'Sales Executive',
    status: 'Active',
  },
  {
    id: '12',
    name: 'Megan Taylor',
    email: 'megan@example.com',
    department: 'Operations',
    position: 'Operations Manager',
    status: 'Active',
  },
  {
    id: '13',
    name: 'Brian Green',
    email: 'brian@example.com',
    department: 'Engineering',
    position: 'DevOps Engineer',
    status: 'Active',
  },
  {
    id: '14',
    name: 'Sophia Martinez',
    email: 'sophia@example.com',
    department: 'Finance',
    position: 'Financial Analyst',
    status: 'Inactive',
  },
  {
    id: '15',
    name: 'Daniel Lewis',
    email: 'daniel@example.com',
    department: 'HR',
    position: 'Recruiter',
    status: 'Active',
  },
  {
    id: '16',
    name: 'Ava Clark',
    email: 'ava@example.com',
    department: 'Engineering',
    position: 'QA Engineer',
    status: 'Active',
  },
  {
    id: '17',
    name: 'Liam Rodriguez',
    email: 'liam@example.com',
    department: 'Customer Support',
    position: 'Customer Support Agent',
    status: 'Active',
  },
];

export function EmployeeList() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    email: '',
    department: '',
    position: '',
    status: 'Active',
  });

  // Handles input changes in the form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Adds the new employee to the list and closes the form
  const handleSubmit = () => {
    setEmployees([...employees, newEmployee]);
    setNewEmployee({
      id: '',
      name: '',
      email: '',
      department: '',
      position: '',
      status: 'Active',
    });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search employees..."
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="secondary">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Employee Table */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Department
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Position
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="relative py-3.5 pl-3 pr-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees
              .filter((employee) =>
                employee.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((employee) => (
                <tr key={employee.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    {employee.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {employee.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {employee.department}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {employee.position}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                        employee.status === 'Active'
                          ? 'bg-green-50 text-green-700 ring-green-600/20'
                          : 'bg-red-50 text-red-700 ring-red-600/20'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Add Employee Modal/Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add Employee</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                name="id"
                placeholder="ID"
                value={newEmployee.id}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newEmployee.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={newEmployee.department}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={newEmployee.position}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
              <select
                name="status"
                value={newEmployee.status}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="mt-4">
              <Button onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


