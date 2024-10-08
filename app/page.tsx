"use client";
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="container mx-auto p-10 space-y-8">
            <motion.h1
                className="text-5xl font-bold text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm Your Name
            </motion.h1>
            <motion.p
                className="text-xl text-center"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Full Stack Engineer | Ruby on Rails | React | Next.js
            </motion.p>

            <motion.div
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="mt-4">
                    Hello, I'm Lucas Penz
                </p>
            </motion.div>
        </div>
    );
}
