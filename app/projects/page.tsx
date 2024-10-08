"use client";
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div className="container mx-auto p-10 space-y-8">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                    className="bg-gray-800 p-6 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-xl font-semibold">Project 1</h3>
                    <p className="mt-2">
                        {/* Project details */}
                    </p>
                </motion.div>

                <motion.div
                    className="bg-gray-800 p-6 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-xl font-semibold">Project 2</h3>
                    <p className="mt-2">
                        {/* Project details */}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
