import React from 'react';

const LegendItem: React.FC<{ color: string; label: string; description: string }> = ({ color, label, description }) => (
    <div className="flex items-center space-x-2">
        <span className={`flex-shrink-0 h-3 w-3 rounded-full ${color}`}></span>
        <div>
            <span className="font-semibold text-gray-700">{label}:</span>
            <span className="ml-1.5 text-gray-600">{description}</span>
        </div>
    </div>
);


const Legend: React.FC = () => {
    return (
        <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 sr-only">Legend</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0">
                <LegendItem color="bg-blue-500" label="Level 1" description="Domain" />
                <LegendItem color="bg-teal-500" label="Level 2" description="Sub-module" />
                <LegendItem color="bg-amber-500" label="Level 3" description="Leaf (Course, TD...)" />
            </div>
        </div>
    );
};

export default Legend;