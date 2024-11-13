import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { 
  Users, ClipboardList, Calendar, DollarSign, 
  BarChart2, Building2, Settings, LogOut 
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const navigation = [
  { name: 'Dashboard', href: '/', icon: BarChart2 },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Attendance', href: '/attendance', icon: ClipboardList },
  { name: 'Leave', href: '/leave', icon: Calendar },
  { name: 'Payroll', href: '/payroll', icon: DollarSign },
  { name: 'Departments', href: '/departments', icon: Building2 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();
  const { user, logout } = useAuthStore();

  return (
    <div className="flex h-screen flex-col bg-gray-900 w-64">
      <div className="flex h-16 items-center gap-2 px-6">
        <Building2 className="h-8 w-8 text-blue-500" />
        <span className="text-xl font-bold text-white">EMS Portal</span>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
                  location.pathname === item.href
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                )}
              >
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center gap-3">
          <img
            src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}`}
            alt={user?.name}
            className="h-8 w-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.role}</p>
          </div>
          <button
            onClick={logout}
            className="p-1 text-gray-400 hover:text-white"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}