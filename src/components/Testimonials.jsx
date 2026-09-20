import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import Reveal from "./Reveal";

function Testimonials() {
    return (
        <section className="bg-white py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <Reveal>
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                            Testimonials
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            What our community says.
                        </h2>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={testimonial.name} delay={index * 120}>
                            <article className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                                <Quote
                                    size={24}
                                    className="text-emerald-700 dark:text-emerald-400"
                                />

                                <p className="mt-8 text-base leading-8 text-slate-700 dark:text-slate-300">
                                    “{testimonial.quote}”
                                </p>

                                <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-800">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                        {testimonial.name}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;