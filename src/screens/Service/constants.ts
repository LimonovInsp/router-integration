import { v4 as uuidv4 } from 'uuid';

export const services = [
    {
        type: "Covid-19 test (RT-PCR)",
        price: 250,
        currency: "$",
        tag: "Intelligent diagnostics",
        description: "Covid-19 Molecular Detection. Detection from the first day of infection.",
        signs: ['x-ray', 'fork'],
        id: uuidv4(),
    },
    {
        type: "Covid-19 IgG/IgM Test",
        price: 200,
        currency: "$",
        tag: "Intelligent diagnostics",
        description: "Covid-19 Molecular Detection. Detection from the first day of infection.",
        signs: ['fork'],
        id: uuidv4(),
    },
    {
        type: "Covid-19 test (RT-PCR)",
        price: 250,
        currency: "$",
        tag: "Intelligent diagnostics",
        description: "Covid-19 Molecular Detection. Detection from the first day of infection.",
        signs: [],
        id: uuidv4(),
    }
];
