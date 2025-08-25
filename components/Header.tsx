import React from 'react';

const LogoIcon: React.FC = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 4.5L12 8.5L4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 19.5L12 16L7 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CircleBadge: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-white border border-gray-200 text-center shadow-sm">
        <span className="font-semibold text-gray-700 text-sm leading-tight">{text}</span>
    </div>
);

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between mb-8">
            <div className="hidden sm:flex flex-shrink-0 w-16 justify-center">
                 <CircleBadge text="Logo" />
            </div>
            <div className="flex flex-col items-center text-center px-4">
                <LogoIcon />
                <h1 className="text-3xl font-bold tracking-tight text-gray-800 mt-2">IMT - Modules Portal</h1>
                <p className="text-gray-500">Visualizer for the Mechatronics course structure</p>
            </div>
            <div className="hidden sm:flex flex-shrink-0 w-16 justify-center">
                <div className="flex items-center justify-center h-10 px-4 rounded-full bg-white border border-gray-200 text-center shadow-sm">
                    <span className="font-semibold text-gray-700 text-sm">Club IMT</span>
                </div>
            </div>
        </header>
    );
};

export default Header;