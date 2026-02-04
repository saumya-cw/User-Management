import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { SetFilterModule } from "ag-grid-enterprise";
import { useUsersApi } from "../hooks/useUsersGrid";
import type { UserProps } from "../types/users.types";

import {
  DEFAULT_PAGINATION_PAGE_SIZE,
  PAGINATION_PAGE_SIZE_OPTIONS,
} from "../constants/users.constants";

import "ag-grid-community/styles/ag-theme-alpine.css";
import { getUserColumnDefs, getDefaultColDef } from "../utils/userColumnDefs";
import { Button } from "./Button";

ModuleRegistry.registerModules([AllCommunityModule, SetFilterModule]);

export function UsersGrid() {
  const { users: userData, isLoading } = useUsersApi();
  const [showFilters, setShowFilters] = useState(false);

  const columnDefs = getUserColumnDefs(showFilters);
  const defaultColDef = getDefaultColDef(showFilters);

  const filterButtons = [
    {
      label: "Show Filters",
      isActive: showFilters,
      onClick: () => setShowFilters(true),
    },
    {
      label: "Hide Filters",
      isActive: !showFilters,
      onClick: () => setShowFilters(false),
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
        <h2 className="text-xl font-bold tracking-wide text-gray-800">
          👥 User Management Grid
        </h2>

        <div className="flex gap-3">
          {filterButtons.map(({ label, onClick, isActive }) => (
            <Button
              key={label}
              label={label}
              onClick={onClick}
              isActive={isActive}
            />
          ))}
        </div>
      </div>

      {/* Grid Wrapper */}
      <div className="flex-1 p-4 overflow-x-auto">
        <AgGridReact<UserProps>
          className="ag-theme-alpine min-w-300 rounded-lg border shadow-sm bg-violet-500"
          containerStyle={{ height: 600 }}
          rowData={userData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          loading={isLoading}
          pagination
          paginationPageSize={DEFAULT_PAGINATION_PAGE_SIZE}
          paginationPageSizeSelector={PAGINATION_PAGE_SIZE_OPTIONS}
        />
      </div>
    </div>
  );
}
