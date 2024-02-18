// import Image from "next/image";

export default function Icons() {
    return (
        <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
            <label htmlFor="navigation" className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
            </label>

            <input type="checkbox" name="navigation" id="navigation" className="hidden peer" />
            <div className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
                <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>

                <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
                    <ul role="list" className="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
                        <li>
                            <h3 className="font-semibold tracking-tight text-slate-900">
                                Getting started
                            </h3>

                            <ul role="list" className="pl-3 mt-3 space-y-2">
                                <li>
                                    <a href="#" className="text-slate-600 hover:text-slate-800">
                                        Quick start guide
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-slate-900 hover:text-slate-800">
                                        All Icon
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3 className="font-semibold tracking-tight text-slate-900">
                                Categories
                            </h3>

                            <ul role="list" className="pl-3 mt-3 space-y-2">
                                <li>
                                    <a href="#" className="text-slate-600 hover:text-slate-800">
                                        Cultivation
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-slate-600 hover:text-slate-800">
                                        Graph
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                <article className="">
                    <header className="">
                        <p className="text-base font-medium text-slate-500">
                            Getting started
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            How does Spinal work?
                        </h1>
                    </header>

                    <p className="mt-2 text-xl text-slate-600">
                        Need to get started quickly with Spinal? You will learn all the basics in just minutes.
                    </p>

                    <div className="mt-8 prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:underline prose-pre:bg-slate-900">
                        <h2>
                            Humblebrag hammock swag
                        </h2>

                        <p>
                            Humblebrag hammock swag, cardigan praxis yr vexillologist locavore activated charcoal. Offal paleo iPhone, DSA cronut wolf tote bag jianbing yes plz drinking vinegar. Chartreuse polaroid irony offal meggings cornhole crucifix, banh mi glossier taxidermy tattooed shabby chic hashtag cred. 8-bit hammock humblebrag, hot chicken post-ironic meditation farm-to-table cray everyday carry succulents franzen deep v mlkshk unicorn. Literally vexillologist salvia four dollar toast direct trade fixie vice. Typewriter mustache edison bulb, everyday carry DIY craft beer sartorial yr gastropub hot chicken pabst squid.
                        </p>

                        <h3>
                            Paleo yuccie pickled fingerstache
                        </h3>

                        <p>
                            Paleo yuccie pickled fingerstache. Lyft kale chips dreamcatcher kinfolk, hot chicken man braid semiotics iceland cold-pressed tattooed church-key vegan authentic hashtag twee. Small batch mustache chia sriracha irony PBR&B, brooklyn ethical truffaut. Pop-up tumeric ugh, kickstarter quinoa semiotics keffiyeh messenger bag air plant slow-carb. Chillwave selfies thundercats gochujang intelligentsia, marfa butcher forage single-origin coffee la croix coloring book try-hard cred listicle. Messenger bag everyday carry bicycle rights, art party kinfolk stumptown kickstarter green juice meh. Portland bespoke four dollar toast migas mumblecore fanny pack.
                        </p>

                        <h3>
                            Selfies vegan microdosing aesthetic cardigan
                        </h3>

                        <p>
                            Selfies vegan microdosing aesthetic cardigan. Raclette tofu narwhal fanny pack cred flannel. Chartreuse kale chips viral gentrify vape palo santo 90's. Actually activated charcoal meggings try-hard yuccie thundercats tumeric.
                        </p>

                        <h2>
                            Pinterest twee flexitarian
                        </h2>

                        <p>
                            Pinterest twee flexitarian keytar mixtape shaman chambray actually lomo humblebrag keffiyeh yuccie health goth. Edison bulb copper mug listicle cred tote bag swag migas blog yes plz humblebrag. Bespoke keffiyeh kale chips seitan hella. Pok pok chartreuse squid jean shorts small batch, dreamcatcher williamsburg raclette flexitarian yr crucifix. Salvia church-key prism, glossier shabby chic post-ironic retro everyday carry austin master cleanse sustainable. Gastropub kombucha yuccie, photo booth semiotics tumblr vaporware normcore drinking vinegar blog.
                        </p>
                    </div>
                </article>

                <dl className="flex pt-6 mt-6 border-t border-slate-200">
                    <div className="mr-auto text-left">
                        <dt className="text-sm font-normal tracking-tight text-slate-600">
                            Previous
                        </dt>

                        <dd className="mt-1">
                            <a href="#" className="text-base font-semibold text-slate-900 hover:underline">
                                Quick start guide
                            </a>
                        </dd>
                    </div>

                    <div className="ml-auto text-right">
                        <dt className="text-sm font-normal tracking-tight text-slate-600">
                            Next
                        </dt>

                        <dd className="mt-1">
                            <a href="#" className="text-base font-semibold text-slate-900 hover:underline">
                                What are content types?
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>
        </main>
    );
}
