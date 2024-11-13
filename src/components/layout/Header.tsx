import { Bell, Search } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex flex-1">
          <div className="flex w-full max-w-lg items-center">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>
          
          <div className="h-6 w-px bg-gray-200" />
          
          <Button size="sm">
            Quick Actions
          </Button>
        </div>
      </div>
    </header>
  );
}