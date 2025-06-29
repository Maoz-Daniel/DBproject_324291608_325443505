export interface Person {
  personid: number;
  firstname: string;
  lastname: string;
  dateofbirth?: string;
}

export interface Member {
  personid: number;
  memberstartdate: string;
  membershiptype: 'Basic' | 'Standard' | 'Personalized' | 'Premium' | 'Extended' | 'Visitor';
  isactive: boolean;
}

export interface Zone {
  zoneid: number;
  gymid: number;
  zonetype: string;
  onlyformembers: boolean;
  isaccessible: boolean;
}

export interface EntryRecord {
  personid: number;
  firstname?: string;
  lastname?: string;
  deviceid: number;
  zoneid: number;
  gymid: number;
  entrytime: string;
}

export interface ExitRecord {
  personid: number;
  firstname?: string;
  lastname?: string;
  deviceid: number;
  zoneid: number;
  gymid: number;
  exittime: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Gym {
  gymid: number;
  name: string;
  gymlocation: string;
}
