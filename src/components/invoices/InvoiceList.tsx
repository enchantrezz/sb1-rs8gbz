import React from 'react';
import { Link } from 'react-router-dom';
import { FileTextIcon, PlusIcon } from 'lucide-react';

const mockInvoices = [
  { id: 1, client: 'Acme Inc.', amount: 1500, date: '2023-03-15', status: 'Paid' },
  { id: 2, client: 'TechCorp', amount: 2000, date: '2023-03-20', status: 'Pending' },
  { id: 3, client: 'Global Services', amount: 1000, date: '2023-03-25', status: 'Overdue' },
];

const InvoiceList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Invoices</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all invoices in your account.</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/invoices/new"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            New Invoice
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Invoice
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Client
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {mockInvoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <FileTextIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">INV-{invoice.id.toString().padStart(4, '0')}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.client}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${invoice.amount}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.date}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.status}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link to={`/invoices/${invoice.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {invoice.id}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;