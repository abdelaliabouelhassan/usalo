<template>
    <section class="bg-[#EDF1F8] py-16 lg:py-20">
        <div class="container px-5 flex flex-col md:flex-row gap-x-8">
            <div class="w-full">
                <div class="w-full flex flex-col md:w-full md:max-w-[33.75rem] gap-x-5">
                    <h1 class="">Altri vantaggi della locazione</h1>
                    <div class="text-lg mt-6 lg:text-xl font-light">Negli ultimi anni anche la locazione operativa tradizionale è stata scelta da un numero sempre maggiore di aziende per rinnovare la propria dotazione tecnica.<br><br></div>
                </div>
            </div>
            

            <div v-accordion class="accordion w-full flex flex-col gap-y-9 mt-9 md:mt-0">
                <div class="accordion-item">
                    <div class="accordion-header flex items-center justify-between py-3 border-b border-usalo-sky">
                        <div class="uppercase text-xl lg:text-2xl font-semibold">FISCALI E CONTABILI</div>
                        <svg class="accordion-cross" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.5V24.5" stroke="#041E42" stroke-width="2"/>
                            <path d="M0 12.5L24 12.5" stroke="#041E42" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <ul class="list-disc list-outside ml-6 flex flex-col gap-y-2 mt-3">
                            <li>canoni completamente deducibili</li>
                            <li>gestione contabile indipendentemente dal periodo di ammortamento</li>
                            <li>il contratto non costituisce indebitamento</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header flex items-center justify-between py-3 border-b border-usalo-sky">
                        <div class="uppercase text-xl lg:text-2xl font-semibold">ECONOMICI E FINANZIARI</div>
                        <svg class="accordion-cross" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.5V24.5" stroke="#041E42" stroke-width="2"/>
                            <path d="M0 12.5L24 12.5" stroke="#041E42" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <ul class="list-disc list-outside ml-6 flex flex-col gap-y-2 mt-3">
                            <li>maggiore liquidità in azienda, migliorando il cash flow</li>
                            <li>linea di credito alternativa al leasing e ai finanziamenti</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header flex items-center justify-between py-3 border-b border-usalo-sky">
                        <div class="uppercase text-xl lg:text-2xl font-semibold">OPERATIVI</div>
                        <svg class="accordion-cross" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.5V24.5" stroke="#041E42" stroke-width="2"/>
                            <path d="M0 12.5L24 12.5" stroke="#041E42" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <ul class="list-disc list-outside ml-6 flex flex-col gap-y-2 mt-3">
                            <li> durata del noleggio allineata al ciclo di vita del prodotto</li>
                            <li> possibilità di inserire i servizi collegati alla fornitura del bene locato</li>
                        </ul>
                    </div>
                </div>
            </div>
           

        </div>
    </section>
</template>