import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navigationLinks } from "../data/navigation";
import Reveal from "./Reveal";

function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-slate-200 bg-[#f7f8f5] dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

                <Reveal>
                    <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">

                        {/* Brand */}
                        <div className="max-w-md">
                            <a href="#home" className="inline-flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-lg font-bold text-white">
                                    L
                                </div>

                                <div>
                                    <p className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                                        LANCITY
                                    </p>

                                    <p className="text-[9px] font-medium tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
                                        ACADEMY
                                    </p>
                                </div>
                            </a>

                            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                Nurturing knowledge, character, confidence, and excellence in
                                every child.
                            </p>

                            <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-white">
                                Excellent is our minimum.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Explore
                            </h3>

                            <nav className="mt-5 flex flex-col gap-3">
                                {navigationLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Contact
                            </h3>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin
                                        size={18}
                                        className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                                    />

                                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        Lancity Academy
                                        <br />
                                        Nigeria
                                    </p>
                                </div>

                                <a
                                    href="tel:+2340000000000"
                                    className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
                                >
                                    <Phone size={18} />
                                    +234 915 7999 889
                                </a>

                                <a
                                    href="mailto:info@lancityacademy.com"
                                    className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
                                >
                                    <Mail size={18} />
                                    info@lancityacademy.com
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Bottom */}
                <Reveal delay={150}>
                    <div className="mt-16 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                            © {new Date().getFullYear()} Lancity Academy. All rights
                            reserved.
                        </p>

                        <a
                            href="#home"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
                        >
                            Back to top
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}

export default Footer;