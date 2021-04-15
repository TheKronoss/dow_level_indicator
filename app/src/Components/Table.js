import React from 'react'

export default function Table() {
    return (
        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bottle content
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
            <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
            </tr>

            {/* <!-- More people... --> */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}