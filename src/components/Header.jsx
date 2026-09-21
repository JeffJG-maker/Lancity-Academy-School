import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationLinks } from "../data/navigation";
import ThemeToggle from "./ThemeToggle";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/90">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-lg font-bold text-white">
                        L
                    </div>

                    <div>
                        <h1 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                            LANCITY
                        </h1>

                        <p className="text-[9px] font-medium tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
                            ACADEMY
                        </p>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <a
                        href="#admissions"
                        className="hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400 lg:block"
                    >
                        Enroll Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200 lg:hidden"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-2">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-400"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#admissions"
                            onClick={closeMenu}
                            className="mt-3 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
                        >
                            Enroll Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;