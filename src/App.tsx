import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/Dashboard';
import { EmployeeList } from './pages/employees/EmployeeList';
import { AttendancePage } from './pages/attendance/AttendancePage';
import { LeavePage } from './pages/leave/LeavePage';
import { PayrollPage } from './pages/payroll/PayrollPage';
import { DepartmentPage } from './pages/departments/DepartmentPage';
import { useAuthStore } from './store/authStore';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/employees" element={
                <PrivateRoute>
                  <EmployeeList />
                </PrivateRoute>
              } />
              <Route path="/attendance" element={
                <PrivateRoute>
                  <AttendancePage />
                </PrivateRoute>
              } />
              <Route path="/leave" element={
                <PrivateRoute>
                  <LeavePage />
                </PrivateRoute>
              } />
              <Route path="/payroll" element={
                <PrivateRoute>
                  <PayrollPage />
                </PrivateRoute>
              } />
              <Route path="/departments" element={
                <PrivateRoute>
                  <DepartmentPage />
                </PrivateRoute>
              } />
              <Route path="/settings" element={
                <PrivateRoute>
                  <div>Settings Content</div>
                </PrivateRoute>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;