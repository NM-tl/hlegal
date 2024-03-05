const services = [
    {
        title: "IT and e-commerce",
        icon: "Ecommerce",
        text: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer.",
        additional: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer. In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
        area: [
            "support of investment projects for the development of port infrastructure",
            "certification of GTS, entering information about them in mandatory databases and registers",
            "registration of permits for the construction of port terminals",
            "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.)",
            "support of procedures related to the lease of state property in the port",
            "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line",
            "support of procedures related to the inclusion of the company within the port",
            "appeals against actions related to the illegal imposition of services in the port by monopoly companies",
        ],
    },
    {
        title: "Comprehensive daily legal support",
        icon: "Support",
        text: "In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
        additional: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer. In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
        area: [
            "support of investment projects for the development of port infrastructure",
            "certification of GTS, entering information about them in mandatory databases and registers",
            "registration of permits for the construction of port terminals",
            "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.)",
            "support of procedures related to the lease of state property in the port",
            "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line",
            "support of procedures related to the inclusion of the company within the port",
            "appeals against actions related to the illegal imposition of services in the port by monopoly companies",
        ],
    },
    {
        title: "Structuring corporate relationships",
        icon: "Coprorate",
        text: "Instead of just providing legal services, we will hire a lawyer or a whole team that will fit into the daily life of your company.",
        additional: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer. In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
        area: [
            "support of investment projects for the development of port infrastructure",
            "certification of GTS, entering information about them in mandatory databases and registers",
            "registration of permits for the construction of port terminals",
            "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.)",
            "support of procedures related to the lease of state property in the port",
            "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line",
            "support of procedures related to the inclusion of the company within the port",
            "appeals against actions related to the illegal imposition of services in the port by monopoly companies",
        ],
    },
    {
        title: "Building contractual relations",
        icon: "Trust",
        text: "Once a week, or week after month, you have your own lawyer by your side. Anyone in the company can catch it at the coffee maker and just talk about current affairs instead of waiting for update status.",
        additional: "And all the other time he will work on new diverse projects, so he will definitely not stop in professional development. One way or another, all Axon Partners will work for you instead of a corporate lawyer.",
        area: [
            "support of investment projects for the development of port infrastructure",
            "certification of GTS, entering information about them in mandatory databases and registers",
            "registration of permits for the construction of port terminals",
            "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.)",
            "support of procedures related to the lease of state property in the port",
            "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line",
            "support of procedures related to the inclusion of the company within the port",
            "appeals against actions related to the illegal imposition of services in the port by monopoly companies",
        ],
    },
    {
        title: "Protection of business, intellectual property",
        icon: "Protection",
        text: "And all the other time he will work on new diverse projects, so he will definitely not stop in professional development. One way or another, all Axon Partners will work for you instead of a corporate lawyer.",
        additional: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer. In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
        area: [
            "support of investment projects for the development of port infrastructure",
            "certification of GTS, entering information about them in mandatory databases and registers",
            "registration of permits for the construction of port terminals",
            "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.)",
            "support of procedures related to the lease of state property in the port",
            "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line",
            "support of procedures related to the inclusion of the company within the port",
            "appeals against actions related to the illegal imposition of services in the port by monopoly companies",
        ],
    },
    {
        title: "Judicial representation",
        icon: "Court",
        text: "Is it a small, medium-sized company or a market leader? Local business or multinational company? Do you have your own legal department or not?",
        additional: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer. In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
        area: [
            "support of investment projects for the development of port infrastructure",
            "certification of GTS, entering information about them in mandatory databases and registers",
            "registration of permits for the construction of port terminals",
            "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.)",
            "support of procedures related to the lease of state property in the port",
            "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line",
            "support of procedures related to the inclusion of the company within the port",
            "appeals against actions related to the illegal imposition of services in the port by monopoly companies",
        ],
    },
]

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("services");

    services.forEach(service => {
        const { title, icon, text } = service;
        section.innerHTML += `
        <div class="flex flex-col gap-[15px]">
            <div class="flex justify-center items-center w-[92px] h-[92px] bg-white rounded-[24px] mb-[15px]">
                <img src="../images/services/serv/${icon}.svg" alt="${title}">
            </div>
            <p class="text-h3-caps text-active-regular hover:text-accent-color">${title}</p>
            <p class="text-paragraph-font text-white">${text}</p>
        </div>    
        `;
    });
});
