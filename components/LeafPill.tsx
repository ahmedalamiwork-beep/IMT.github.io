import React from 'react';
import type { Leaf } from '../types';

interface LeafPillProps {
    leaf: Leaf;
}

const getLeafColor = (name: string): string => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('course')) return 'bg-blue-500 text-white';
    if (lowerName.includes('td')) return 'bg-sky-500 text-white';
    if (lowerName.includes('tp')) return 'bg-teal-400 text-white';
    if (lowerName.includes('exam')) return 'bg-amber-400 text-gray-800';
    if (lowerName.includes('resit')) return 'bg-orange-400 text-white';
    if (lowerName.includes('extras')) return 'bg-purple-400 text-white';
    return 'bg-gray-200 text-gray-700';
};

const LeafPill: React.FC<LeafPillProps> = ({ leaf }) => {
    const colorClasses = getLeafColor(leaf.name);

    return (
        <a href="#" className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg ${colorClasses} transition-transform duration-200 hover:scale-105`}>
            {leaf.name}
        </a>
    );
};

export default LeafPill;