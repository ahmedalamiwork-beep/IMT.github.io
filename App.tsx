import React, { useState, useMemo, useCallback } from 'react';
import { DATA } from './constants';
import type { Domain, SubModule } from './types';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Legend from './components/Legend';
import DomainCard from './components/DomainCard';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const normalizedQuery = searchQuery.toLowerCase().trim();

    const getKeys = useCallback((data: Domain[]): string[] => {
        const keys: string[] = [];
        data.forEach(domain => {
            keys.push(domain.name);
            domain.subModules.forEach(subModule => {
                keys.push(`${domain.name}-${subModule.name}`);
            });
        });
        return keys;
    }, []);

    const handleExpandAll = useCallback(() => {
        const allKeys = getKeys(DATA);
        const newExpandedState = allKeys.reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {} as Record<string, boolean>);
        setExpandedItems(newExpandedState);
    }, [getKeys]);

    const handleCollapseAll = useCallback(() => {
        setExpandedItems({});
    }, []);

    const toggleItem = useCallback((key: string) => {
        setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
    }, []);

    const { filteredData, counts } = useMemo(() => {
        if (!normalizedQuery) {
            const domainCount = DATA.length;
            let subModuleCount = 0;
            let leafCount = 0;
            DATA.forEach(d => {
                subModuleCount += d.subModules.length;
                d.subModules.forEach(sm => {
                    leafCount += sm.leaves.length;
                });
            });
            return {
                filteredData: DATA,
                counts: { domains: domainCount, subModules: subModuleCount, leaves: leafCount },
            };
        }

        let visibleDomains = 0;
        let visibleSubModules = 0;
        let visibleLeaves = 0;

        const data = DATA.map(domain => {
            const filteredSubModules = domain.subModules
                .map(subModule => {
                    const filteredLeaves = subModule.leaves.filter(leaf =>
                        leaf.name.toLowerCase().includes(normalizedQuery)
                    );

                    if (filteredLeaves.length > 0 || subModule.name.toLowerCase().includes(normalizedQuery)) {
                        visibleLeaves += filteredLeaves.length;
                        return { ...subModule, leaves: filteredLeaves };
                    }
                    return null;
                })
                .filter((sm): sm is SubModule => sm !== null);

            if (filteredSubModules.length > 0 || domain.name.toLowerCase().includes(normalizedQuery)) {
                visibleDomains++;
                visibleSubModules += filteredSubModules.length;
                if(filteredSubModules.length === 0) { // Domain name matches, but submodules don't
                     domain.subModules.forEach(sm => visibleLeaves += sm.leaves.length);
                     return domain;
                }
                return { ...domain, subModules: filteredSubModules };
            }
            return null;
        }).filter((d): d is Domain => d !== null);

        return {
            filteredData: data,
            counts: { domains: visibleDomains, subModules: visibleSubModules, leaves: visibleLeaves },
        };
    }, [normalizedQuery]);

    return (
        <div className="min-h-screen text-gray-800 font-sans p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <main>
                    <Toolbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onExpandAll={handleExpandAll}
                        onCollapseAll={handleCollapseAll}
                        counts={counts}
                    />
                    <Legend />
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredData.length > 0 ? (
                            filteredData.map(domain => (
                                <DomainCard
                                    key={domain.name}
                                    domain={domain}
                                    expandedItems={expandedItems}
                                    toggleItem={toggleItem}
                                    searchQuery={searchQuery}
                                />
                            ))
                        ) : (
                            <div className="col-span-1 md:col-span-2 xl:col-span-3 text-center py-16 px-4">
                                <h3 className="text-xl font-semibold text-gray-700">No results found</h3>
                                <p className="text-gray-500 mt-2">Try adjusting your search terms.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;