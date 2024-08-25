import React from 'react';

const DataTable = ({ data, columns, sortColumn, sortDirection, onSort }) => {
  const handleSort = (column) => {
    if (onSort) {
      onSort(column);
    }
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="border p-2 cursor-pointer"
              onClick={() => handleSort(column.key)}
            >
              {column.label}{' '}
              {sortColumn === column.key && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={`${item.id}-${column.key}`} className="border p-2">
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
