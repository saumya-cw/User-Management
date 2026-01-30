import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { SetFilterModule } from 'ag-grid-enterprise';
import type { ColDef } from 'ag-grid-community';

import { useUsersApi } from '../hooks/useUsersGrid';
import type { UserProps } from '../types/users.types';
import { DEFAULT_PAGINATION_PAGE_SIZE, PAGINATION_PAGE_SIZE_OPTIONS } from '../constants/users.constants';

import 'ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([AllCommunityModule, SetFilterModule]);

export function UsersGrid() {
  const { users, isLoading } = useUsersApi();
  const [showFilters, setShowFilters] = useState(false);

  const columnDefs = useMemo<ColDef<UserProps, any>[]>(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 90,
        filter: showFilters ? 'agNumberColumnFilter' : false,
      },
      {
        field: 'firstName',
        headerName: 'First Name',
        minWidth: 160,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        minWidth: 160,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'maidenName',
        headerName: 'Maiden Name',
        minWidth: 160,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'age',
        headerName: 'Age',
        width: 100,
        filter: showFilters ? 'agNumberColumnFilter' : false,
      },
      {
        field: 'gender',
        headerName: 'Gender',
        minWidth: 140,
        filter: showFilters ? 'agSetColumnFilter' : false,
      },
      {
        field: 'email',
        headerName: 'Email',
        minWidth: 240,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'phone',
        headerName: 'Phone',
        minWidth: 160,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'username',
        headerName: 'Username',
        minWidth: 140,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'birthDate',
        headerName: 'Birth Date',
        minWidth: 140,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'bloodGroup',
        headerName: 'Blood Group',
        minWidth: 120,
        filter: showFilters ? 'agTextColumnFilter' : false,
      },
      {
        field: 'height',
        headerName: 'Height',
        width: 100,
        filter: showFilters ? 'agNumberColumnFilter' : false,
      },
      {
        field: 'weight',
        headerName: 'Weight',
        width: 100,
        filter: showFilters ? 'agNumberColumnFilter' : false,
      },
      {
        field: 'eyeColor',
        headerName: 'Eye Color',
        minWidth: 120,
        filter: showFilters ? 'agTextColumnFilter' : false,
        cellStyle: (params) => {
          const color = String(params.value).toLowerCase();
          const backgroundMap: Record<string, string> = {
            blue: '#dbeafe',
            brown: '#fef3c7',
            green: '#dcfce7',
            hazel: '#fef9c3',
            gray: '#e5e7eb',
            black: '#e5e7eb',
          };
          return {
            backgroundColor: backgroundMap[color] ?? '#f3f4f6',
            color: '#111827',
            fontWeight: 500,
            textTransform: 'capitalize',
          };
        },
      },
      {
        field: 'isActive',
        headerName: 'Active',
        width: 120,
        filter: showFilters ? 'agTextColumnFilter' : false,
        cellRenderer: (params: any) =>
          params.value ? (
            <span className="text-green-600 font-medium">Active</span>
          ) : (
            <span className="text-red-600 font-medium">Inactive</span>
          ),
      },
    ],
    [showFilters]
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      filter: showFilters,
      floatingFilter: showFilters,
    }),
    [showFilters]
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
        <h2 className="text-xl font-bold tracking-wide text-gray-800">
          👥 User Management Grid
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setShowFilters(true)}
            className={`px-4 py-2 text-sm rounded transition
              ${showFilters
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Show Filters
          </button>

          <button
            onClick={() => setShowFilters(false)}
            className={`px-4 py-2 text-sm rounded transition
              ${!showFilters
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Hide Filters
          </button>
        </div>
      </div>

      {/* Grid Wrapper */}
      <div className="flex-1 p-4 overflow-x-auto">
        <div
          className="ag-theme-alpine min-w-[1200px] rounded-lg border shadow-sm bg-violet-500"
          style={{ height: 600 }}
        >
          <AgGridReact<UserProps>
            rowData={users}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            loading={isLoading}
            pagination
            paginationPageSize={DEFAULT_PAGINATION_PAGE_SIZE}
            paginationPageSizeSelector={PAGINATION_PAGE_SIZE_OPTIONS}
          />
        </div>
      </div>
    </div>
  );
}
