export type Role = 'ADMIN' | 'HR' | 'EMPLOYEE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  department: string;
  position: string;
  joinDate: string;
  salary: number;
  avatar?: string;
}

export interface Leave {
  id: string;
  userId: string;
  type: 'SICK' | 'VACATION' | 'PERSONAL';
  startDate: string;
  endDate: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  reason: string;
}

export interface Attendance {
  id: string;
  userId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'PRESENT' | 'ABSENT' | 'LATE';
}