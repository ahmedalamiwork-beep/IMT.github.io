import type { Domain } from './types';

const standardLeaves = [
    { name: '0_Course' },
    { name: '1_TD' },
    { name: '2_TP' },
    { name: '3_Exam' },
    { name: '4_Resit' },
    { name: 'Extras' },
];

export const DATA: Domain[] = [
    {
        name: 'Automation & Robotics',
        subModules: [
            { name: 'Automation 1 (Regulation & Control)', leaves: standardLeaves },
            { name: 'Automation 2 (State Representation)', leaves: standardLeaves },
            { name: 'Industrial Automation & PLC', leaves: standardLeaves },
            { name: 'Pneumatics, Hydraulics', leaves: standardLeaves },
            { name: 'Robotics', leaves: standardLeaves },
            { name: 'Modeling of Mechatronic Systems', leaves: standardLeaves },
            { name: 'Simulation of Mechatronic Systems', leaves: standardLeaves },
        ],
    },
    {
        name: 'Mechanics',
        subModules: [
            { name: 'Continuum Mechanics', leaves: standardLeaves },
            { name: 'Strength of Materials', leaves: standardLeaves },
            { name: 'Solid Mechanics', leaves: standardLeaves },
            { name: 'Fluid Mechanics', leaves: standardLeaves },
            { name: 'Machine Design, CAD, FEM', leaves: standardLeaves },
            { name: 'Theory of Mechanisms', leaves: standardLeaves },
            { name: 'Mechanical Manufacturing', leaves: standardLeaves },
            { name: 'Heat Engines & Heat Transfer', leaves: standardLeaves },
            { name: 'Mechanical Properties of Materials', leaves: standardLeaves },
            { name: 'Structural Vibration', leaves: standardLeaves },
        ],
    },
    {
        name: 'Electricity & Electronics',
        subModules: [
            { name: 'Digital & Analog Electronics', leaves: standardLeaves },
            { name: 'EMC', leaves: standardLeaves },
            { name: 'Non-linear Electronics (Oscillators & Multivibrators)', leaves: standardLeaves },
            { name: 'Electrotechnics & Power Electronics', leaves: standardLeaves },
            { name: 'Electric Machines', leaves: standardLeaves },
            { name: 'Wave Propagation & Electromagnetism', leaves: standardLeaves },
            { name: 'Signal Processing (Digital & Analog)', leaves: standardLeaves },
        ],
    },
    {
        name: 'Management & Economics',
        subModules: [
            { name: 'Quality ISO 9001', leaves: standardLeaves },
            { name: 'Business Management', leaves: standardLeaves },
            { name: 'Project Management', leaves: standardLeaves },
            { name: 'Accounting (General & Analytical)', leaves: standardLeaves },
            { name: 'Engineering Economics', leaves: standardLeaves },
            { name: 'Technical English', leaves: standardLeaves },
        ],
    },
    {
        name: 'Industrial Engineering',
        subModules: [
            { name: 'Production', leaves: standardLeaves },
            { name: 'Industrial Process Simulation', leaves: standardLeaves },
            { name: 'Planning & Scheduling', leaves: standardLeaves },
            { name: 'SPC Statistical Process Control', leaves: standardLeaves },
            { name: 'Industrial Maintenance', leaves: standardLeaves },
        ],
    },
    {
        name: 'Industrial IT & Instrumentation',
        subModules: [
            { name: 'Industrial Computing', leaves: standardLeaves },
            { name: 'Metrology & Sensors', leaves: standardLeaves },
            { name: 'JAVA / VB.NET', leaves: standardLeaves },
            { name: 'C Language', leaves: standardLeaves },
        ],
    },
    {
        name: 'Numerical Calculation',
        subModules: [
            { name: 'Engineering Maths / OR', leaves: standardLeaves },
            { name: 'Numerical Methods', leaves: standardLeaves },
        ],
    },
    {
        name: 'Automotive',
        subModules: [
            { name: 'Automotive Mechanics', leaves: standardLeaves },
            { name: 'Automotive Engine', leaves: standardLeaves },
            { name: 'Automotive Materials', leaves: standardLeaves },
        ],
    },
];