import React from 'react';
import type { SubModule } from '../types';
import LeafPill from './LeafPill';
import ChevronIcon from './icons/ChevronIcon';

interface SubModuleItemProps {
    domainName: string;
    subModule: SubModule;
    expandedItems: Record<string, boolean>;
    toggleItem: (key: string) => void;
    searchQuery: string;
}

const SubModuleItem: React.FC<SubModuleItemProps> = ({ domainName, subModule, expandedItems, toggleItem, searchQuery }) => {
    const subModuleKey = `${domainName}-${subModule.name}`;
    const isExpanded = expandedItems[subModuleKey] || (searchQuery.length > 0 && subModule.leaves.some(l => l.name.toLowerCase().includes(searchQuery.toLowerCase())));

    // In search mode, we don't need details/summary for sub-modules as they are auto-expanded.
    if (searchQuery.length > 0) {
        return (
            <div>
                 <div className="flex items-center space-x-3 mb-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                    <h3 className="font-semibold text-gray-700">{subModule.name}</h3>
                </div>
                <div className="pl-5 flex flex-wrap gap-2">
                    {subModule.leaves.map(leaf => (
                        <LeafPill key={leaf.name} leaf={leaf} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <details open={isExpanded} className="group">
            <summary 
                className="flex items-center justify-between p-3 cursor-pointer list-none rounded-md hover:bg-gray-200 transition-colors"
                onClick={(e) => {
                    e.preventDefault();
                    toggleItem(subModuleKey);
                }}
            >
                <div className="flex items-center space-x-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                    <h3 className="font-semibold text-gray-700">{subModule.name}</h3>
                </div>
                <ChevronIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-90`} />
            </summary>
            <div className="pt-2 pb-1 pl-8">
                <div className="flex flex-wrap gap-2">
                    {subModule.leaves.map(leaf => (
                        <LeafPill key={leaf.name} leaf={leaf} />
                    ))}
                </div>
            </div>
        </details>
    );
};

export default SubModuleItem;