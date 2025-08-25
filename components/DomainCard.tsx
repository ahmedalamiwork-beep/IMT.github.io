import React from 'react';
import type { Domain } from '../types';
import SubModuleItem from './SubModuleItem';
import ChevronIcon from './icons/ChevronIcon';

interface DomainCardProps {
    domain: Domain;
    expandedItems: Record<string, boolean>;
    toggleItem: (key: string) => void;
    searchQuery: string;
}

const DomainCard: React.FC<DomainCardProps> = ({ domain, expandedItems, toggleItem, searchQuery }) => {
    const domainKey = domain.name;
    const isExpanded = expandedItems[domainKey] || (searchQuery.length > 0);

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
            <details open={isExpanded} className="group">
                <summary 
                    className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-50 transition-colors"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleItem(domainKey);
                    }}
                >
                    <div className="flex items-center space-x-3">
                        <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                        <h2 className="text-lg font-bold text-gray-800">{domain.name}</h2>
                    </div>
                    <ChevronIcon className={`w-6 h-6 text-gray-400 transition-transform duration-300 group-open:rotate-90`} />
                </summary>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className="space-y-3">
                        {domain.subModules.map(subModule => (
                            <SubModuleItem
                                key={subModule.name}
                                domainName={domain.name}
                                subModule={subModule}
                                expandedItems={expandedItems}
                                toggleItem={toggleItem}
                                searchQuery={searchQuery}
                            />
                        ))}
                    </div>
                </div>
            </details>
        </div>
    );
};

export default DomainCard;