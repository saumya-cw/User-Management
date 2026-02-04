import type { ColDef } from 'ag-grid-community'
import type { UserProps } from '../types/users.types'

export function getUserColumnDefs(
  showFilters: boolean
): ColDef<UserProps>[] {
  return [
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
  ]
}
export function getDefaultColDef(showFilters: boolean) {
  return {
    sortable: true,
    resizable: true,
    filter: showFilters,
    floatingFilter: showFilters,
  };
}
