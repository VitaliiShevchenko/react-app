import {Table} from "~/types/queryBuilder";

export const Users = [
  {
    userId: "USR001",
    firstName: "John",
    lastName: "Doe",
    address: "123 Main Street",
    country: "United States",
    email: "john.doe@example.com",
    phoneNumber: "+1-555-123-4567"
  },
  {
    userId: "USR002",
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Park Avenue",
    country: "Canada",
    email: "jane.smith@example.com",
    phoneNumber: "+1-555-234-5678"
  },
  {
    userId: "USR003",
    firstName: "Alice",
    lastName: "Johnson",
    address: "789 Oak Road",
    country: "United Kingdom",
    email: "alice.j@example.com",
    phoneNumber: "+44-555-345-6789"
  }
];

export const Departments = [
  {
    departmentCode: "HR001",
    departmentName: "Human Resources",
    location: "Building A",
    manager: "USR001",
    budget: 500000
  },
  {
    departmentCode: "IT002",
    departmentName: "Information Technology",
    location: "Building B",
    manager: "USR002",
    budget: 750000
  },
  {
    departmentCode: "FIN003",
    departmentName: "Finance",
    location: "Building A",
    manager: "USR003",
    budget: 1000000
  }
];

export const Headers = [
  {
    id: "HDR001",
    title: "Q1 Report",
    status: "Approved",
    createdBy: "USR001",
    createdDate: "2024-01-15",
    priority: "High"
  },
  {
    id: "HDR002",
    title: "Employee Review",
    status: "Pending",
    createdBy: "USR002",
    createdDate: "2024-02-01",
    priority: "Medium"
  },
  {
    id: "HDR003",
    title: "Budget Planning",
    status: "Draft",
    createdBy: "USR003",
    createdDate: "2024-03-10",
    priority: "Low"
  }
];

export const Tables: Table[] = [
  {
    id: "TBL001",
    name: "Users",
    definition: {
      columns: [
        { name: "userId", type: "string", required: true },
        { name: "firstName", type: "string", required: true },
        { name: "lastName", type: "string", required: true },
        { name: "address", type: "string" },
        { name: "country", type: "string" },
        { name: "email", type: "string", required: true },
        { name: "phoneNumber", type: "string" }
      ]
    },
    data: Users
  },
  {
    id: "TBL002",
    name: "Departments",
    definition: {
      columns: [
        { name: "departmentCode", type: "string", required: true },
        { name: "departmentName", type: "string", required: true },
        { name: "location", type: "string" },
        { name: "manager", type: "string", required: true },
        { name: "budget", type: "number" }
      ]
    },
    data: Departments
  },
  {
    id: "TBL003",
    name: "Headers",
    definition: {
      columns: [
        { name: "id", type: "string", required: true },
        { name: "title", type: "string", required: true },
        { name: "status", type: "string", required: true },
        { name: "createdBy", type: "string", required: true },
        { name: "createdDate", type: "date" },
        { name: "priority", type: "string" }
      ]
    },
    data: Headers
  }
];
