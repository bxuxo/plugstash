import { Head } from '@inertiajs/react';

export default function Users({ users, auth }) {
    return (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    {/* Add more table headers for other user attributes */}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-600">
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        {/* Add more table cells for other user attributes */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
