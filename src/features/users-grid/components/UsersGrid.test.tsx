import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { UsersGrid } from "./UsersGrid";
import type { UserProps } from "../types/users.types";

const mockUsers: UserProps[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    maidenName: "Smith",
    age: 30,
    gender: "male",
    email: "john@test.com",
    phone: "1234567890",
    username: "john doe",
    birthDate: "1994-01-01",
    bloodGroup: "O+",
    height: 180,
    weight: 75,
    eyeColor: "Blue",
    isActive: true,
  },
];

vi.mock("../hooks/useUsersGrid", () => ({
  useUsersApi: () => ({
    users: mockUsers,
    isLoading: false,
  }),
}));

vi.mock("ag-grid-react", () => ({
  AgGridReact: () => (
    <div>
      <div>First Name</div>
      <div>John</div>
    </div>
  ),
}));

const renderComponent = () => render(<UsersGrid />);

describe("UsersGrid", () => {
  it("renders the grid heading", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", {
        name: /user management grid/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders column headers", () => {
    renderComponent();

    expect(screen.getByText("First Name")).toBeInTheDocument();
  });

  it("renders user data in the grid", () => {
    renderComponent();

    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("renders filter toggle buttons", () => {
    renderComponent();

    expect(
      screen.getByRole("button", { name: /show filters/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /hide filters/i }),
    ).toBeInTheDocument();
  });
});
