import React, { useState } from "react";

const DataTable = ({
    data,
    columns,
    onSort,
    onSearch,
    onPageChange,
    onPerPageChange,
    onBulkAction,
    bulkActions,
    meta,
}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSort = (column) => {
        if (column.sortable) {
            const direction = meta.sort_direction === "asc" ? "desc" : "asc";
            onSort(column.key, direction);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleBulkAction = (action) => {
        onBulkAction(action, selectedItems);
        setSelectedItems([]);
    };

    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(data.map((item) => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border rounded"
                />
                <select
                    onChange={(e) => handleBulkAction(e.target.value)}
                    className="p-2 border rounded"
                    disabled={selectedItems.length === 0}
                >
                    <option value="">Bulk Actions</option>
                    {bulkActions.map((action, index) => (
                        <option key={index} value={action.action}>
                            {action.label}
                        </option>
                    ))}
                </select>
            </div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="p-2 border">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedItems.length === data.length}
                            />
                        </th>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="p-2 border cursor-pointer"
                                onClick={() => handleSort(column)}
                            >
                                <div className="flex items-center justify-between">
                                    {column.label}
                                    {column.sortable && (
                                        <span className="ml-2">
                                            {meta.sort_by === column.key ? (
                                                meta.sort_direction ===
                                                "asc" ?
                                                    "Up" : "Down"
                                            ) : (
                                                <div className="w-4 h-4" />
                                            )}
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td className="p-2 border">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(row.id)}
                                    onChange={() =>
                                        handleCheckboxChange(row.id)
                                    }
                                />
                            </td>
                            {columns.map((column) => (
                                <td key={column.key} className="p-2 border">
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <span>Rows per page: </span>
                    <select
                        value={meta.per_page}
                        onChange={(e) =>
                            onPerPageChange(Number(e.target.value))
                        }
                        className="p-2 border rounded"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => onPageChange(meta.current_page - 1)}
                        disabled={meta.current_page === 1}
                        className="p-2 mr-2 border rounded"
                    >
                        Previous
                    </button>
                    <span>
                        {meta.current_page} of {meta.last_page}
                    </span>
                    <button
                        onClick={() => onPageChange(meta.current_page + 1)}
                        disabled={meta.current_page === meta.last_page}
                        className="p-2 ml-2 border rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
