import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { UsersGrid } from './UsersGrid';
import type { UserProps } from '../types/users.types';

const mockUsers: UserProps[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    maidenName: 'Smith',
    age: 30,
    gender: 'male',
    email: 'john@test.com',
    phone: '1234567890',
    username: 'johndoe',
    birthDate: '1994-01-01',
    bloodGroup: 'O+',
    height: 180,
    weight: 75,
    eyeColor: 'Blue',
    isActive: true,
  },
];

vi.mock('../hooks/useUsersGrid', () => ({
  useUsersApi: () => ({
    users: mockUsers,
    isLoading: false,
  }),
}));

vi.mock('ag-grid-react', () => ({
  AgGridReact: (props: any) => (
    <div data-testid="ag-grid">
      <div data-testid="row-data">
        {JSON.stringify(props.rowData)}
      </div>
      <div data-testid="column-defs">
        {JSON.stringify(props.columnDefs)}
      </div>
    </div>
  ),
}));

describe('UsersGrid', () => {
  it('renders AG Grid component', () => {
    render(<UsersGrid />);

    const grid = screen.getByTestId('ag-grid');
    expect(grid).toBeInTheDocument();
  });

  it('passes row data to AG Grid', () => {
    render(<UsersGrid />);

    const rowData = screen.getByTestId('row-data');
    expect(rowData.textContent).toContain('John');
  });

  it('passes column definitions to AG Grid', () => {
    render(<UsersGrid />);

    const columnDefs = screen.getByTestId('column-defs');
    expect(columnDefs.textContent).toContain('firstName');
    expect(columnDefs.textContent).toContain('email');
    expect(columnDefs.textContent).toContain('eyeColor');
  });
});
