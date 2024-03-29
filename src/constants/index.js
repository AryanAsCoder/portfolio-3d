
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material UI",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    }
];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AryanAsCoder',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aryan-patel-64a208227',
    }
];

export const projects = [
    {
        iconUrl: "https://img.icons8.com/ios-filled/50/nike.png",
        theme: 'btn-back-red',
        name: 'Nike Shoe Store',
        description: 'Enhanced user engagement with a React-powered cart, utilizing Redux for seamless state management. Elevated user interaction through captivating and responsive Tailwind CSS hover animations.',
        link: "https://nike-shoe-store-xi.vercel.app/",
    },
    {
        iconUrl: 'https://img.icons8.com/material-outlined/24/beach--v1.png',
        theme: 'btn-back-green',
        name: 'Travel Agency',
        description: 'Create a visually stunning and responsive travel agency website, Implemented premium design principles, enhancing user experience across various devices.',
        link: 'https://travel-site-steel.vercel.app/',
    },
    {
        iconUrl: "https://img.icons8.com/ios-glyphs/30/car--v1.png",
        theme: 'btn-back-blue',
        name: 'Car Rental',
        description: 'Integrated a dynamic and responsive car rental platform using React and Tailwind CSS. Implemented a seamless light/dark theme switcher to enhance user customization. Integrated smooth animations for better user experience using AOS (Animate On Scroll Library).',
        link: "https://car-rental-weld.vercel.app/",
    },
    {
        iconUrl: "https://img.icons8.com/ios-filled/50/chat--v1.png",
        theme: 'btn-back-yellow',
        name: 'Chat-App',
        description: 'MERN Chat App is a real-time messaging platform, built with MongoDB, Express.js, React.js, and Node.js. It offers instant messaging, and real-time user authentication for seamless communication.',
        link: "https://mern-chat-3ifz.onrender.com/signup",
    },
];
