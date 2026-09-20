import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal";

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#f7f8f5] pt-20 dark:bg-slate-950"
        >
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

                <Reveal>
                    <div className="max-w-2xl">
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm dark:border-emerald-900 dark:bg-slate-900 dark:text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                            Excellent is our minimum
                        </div>

                        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                            Nurturing today's leaders{" "}
                            <span className="text-emerald-700 dark:text-emerald-400">
                                for tomorrow.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                            We provide a nurturing and inspiring learning environment where
                            children develop knowledge, confidence, character, and the skills
                            they need to thrive in a changing world.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <a
                                href="#admissions"
                                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
                            >
                                Begin Your Journey

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                            >
                                <Play size={15} />
                                Discover Lancity
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
                            <div>
                                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                                    10+
                                </p>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Years of excellence
                                </p>
                            </div>

                            <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

                            <div>
                                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                                    500+
                                </p>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Students nurtured
                                </p>
                            </div>

                            <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

                            <div>
                                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                                    100%
                                </p>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Commitment
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={180}>
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[520px]">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-emerald-100 dark:bg-slate-800">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-sm dark:bg-slate-900">
                                            🎓
                                        </div>

                                        <p className="mt-5 text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                                            Lancity Academy
                                        </p>

                                        <p className="mt-2 text-xs text-emerald-800/60 dark:text-slate-400">
                                            Where great minds grow
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border-[24px] border-white/50 dark:border-slate-700/50" />

                                <div className="absolute -right-10 top-12 h-28 w-28 rounded-full bg-white/30 dark:bg-emerald-900/20" />
                            </div>

                            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30 sm:-left-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-lg dark:bg-emerald-950">
                                        ✦
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                            Learning with purpose
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                            Knowledge • Character • Excellence
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Hero;