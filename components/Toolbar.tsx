import React from 'react';

interface ToolbarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onExpandAll: () => void;
    onCollapseAll: () => void;
    counts: {
        domains: number;
        subModules: number;
        leaves: number;
    };
}

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

const Toolbar: React.FC<ToolbarProps> = ({ searchQuery, setSearchQuery, onExpandAll, onCollapseAll, counts }) => {
    return (
        <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <div className="relative flex-grow">
                    <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by keyword (e.g. Exam, Robotics...)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={onExpandAll}
                        className="w-full md:w-auto flex-1 bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-semibold py-2.5 px-4 rounded-lg transition duration-200"
                    >
                        Expand All
                    </button>
                    <button
                        onClick={onCollapseAll}
                        className="w-full md:w-auto flex-1 bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-semibold py-2.5 px-4 rounded-lg transition duration-200"
                    >
                        Collapse All
                    </button>
                </div>
            </div>
            <div className="text-xs text-gray-500 mt-3 text-center md:text-left">
                {counts.domains} Domains | {counts.subModules} Sub-modules | {counts.leaves} Leaves (visible)
            </div>
        </div>
    );
};

export default Toolbar;