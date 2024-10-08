import Link from 'next/link';

export default function Header() {
    return (
        <header className="py-4 bg-gray-800 shadow-lg text-white">
            <nav className="container mx-auto flex justify-between">
                <Link href="/" className="text-2xl font-bold">
                    My Portfolio
                </Link>
                <div className="space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    {/* Add more links if needed */}
                </div>
            </nav>
        </header>
    );
}
