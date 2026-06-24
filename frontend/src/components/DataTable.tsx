type DataTableProps = {
  columns: string[];
  data: Record<string, string | number>[];
};

export default function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column} className="px-4 py-3">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}