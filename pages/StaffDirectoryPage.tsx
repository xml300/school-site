import React, { useState, useMemo } from 'react';
import { MOCK_STAFF } from '../constants';

const StaffDirectoryPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [department, setDepartment] = useState('All');

    const departments = useMemo(() => {
        const allDepts = MOCK_STAFF.map(staff => staff.department);
        return ['All', ...Array.from(new Set(allDepts)).sort()];
    }, []);

    const filteredStaff = useMemo(() => {
        return MOCK_STAFF.filter(staff => {
            const nameMatch = staff.name.toLowerCase().includes(searchTerm.toLowerCase());
            const departmentMatch = department === 'All' || staff.department === department;
            return nameMatch && departmentMatch;
        });
    }, [searchTerm, department]);

    return (
        <div className="py-12 bg-slate-50 dark:bg-primary-900 opacity-0 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 opacity-0 animate-fadeInUp">
                    <h1 className="text-4xl font-extrabold font-heading text-primary-800 dark:text-white">Staff Directory</h1>
                    <p className="mt-4 text-lg text-primary-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Meet the dedicated faculty and staff of Northwood High School.
                    </p>
                </div>

                {/* Filter and Search Controls */}
                <div className="mb-10 p-4 bg-white dark:bg-primary-800 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-center opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                    <div className="relative w-full sm:w-2/3">
                        <label htmlFor="search-staff" className="sr-only">Search by name</label>
                        <input
                            type="text"
                            id="search-staff"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 dark:border-primary-600 rounded-md bg-white dark:bg-primary-700 text-primary-800 dark:text-white focus:ring-2 focus:ring-secondary-dark dark:focus:ring-secondary-light focus:outline-none"
                        />
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-full sm:w-1/3">
                         <label htmlFor="filter-department" className="sr-only">Filter by department</label>
                        <select
                            id="filter-department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 dark:border-primary-600 rounded-md bg-white dark:bg-primary-700 text-primary-800 dark:text-white focus:ring-2 focus:ring-secondary-dark dark:focus:ring-secondary-light focus:outline-none"
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Staff Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {filteredStaff.length > 0 ? (
                        filteredStaff.map((staff, index) => (
                            <div key={staff.id} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${300 + 50 * index}ms`}}>
                                <div className="group text-center bg-white dark:bg-primary-800 rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-secondary/20 overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col h-full">
                                    <img className="mx-auto h-32 w-32 rounded-full object-cover shadow-md transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-slate-200 dark:ring-primary-700" src={staff.imageUrl} alt={`Photo of ${staff.name}`} />
                                    <div className="flex-grow mt-4">
                                        <h3 className="text-lg font-bold font-heading text-primary-800 dark:text-white">{staff.name}</h3>
                                        <p className="text-secondary-dark dark:text-secondary-light text-sm font-medium">{staff.title}</p>
                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-primary-700/50 rounded-full inline-block px-2 py-0.5">{staff.department}</p>
                                    </div>
                                    <a href={`mailto:${staff.email}`} className="mt-4 inline-block text-sm text-primary-500 dark:text-slate-300 group-hover:text-secondary-dark dark:group-hover:text-secondary-light transition-colors focus-visible-ring rounded-sm" aria-label={`Contact ${staff.name}`}>
                                        Contact
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-lg text-primary-600 dark:text-slate-300">No staff members found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StaffDirectoryPage;