<script >

    import { onMount } from "svelte";

    let circles;
    let step = 1;

    
    onMount(() => {
        circles = document.querySelectorAll('.step-circle');
        // Do something with nd, such as adding event listeners, styles, etc.
    });

    function changeColorCircle(event) {
        let target = event.target;
        if(!target.classList.contains("active")) {
            target.classList.add("active");
            circles.forEach(element => {
                if(element !== target) {
                    element.classList.remove("active")
                }
            });
        }
    }

    function changeStep(number) {
        step = number;
    }

</script>

<section id="step-form" class="pt-[var(--blocks-gap)]">
    <div class="container">

        <div class="flex flex-col gap-4 items-center lg:justify-between mb-[var(--blocks-gap-demi)] lg:gap-0 lg:flex-row">
            <div class="flex items-center justify-center gap-4">
                <svg width="51" height="58" viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 17.3007C51 15.2995 49.9472 13.4494 48.2386 12.4488L28.2619 0.750467C26.5533 -0.250156 24.4477 -0.250156 22.7381 0.750467L2.76138 12.4497C1.05283 13.4504 0 15.3004 0 17.3017V40.6993C0 42.7005 1.05283 44.5506 2.76138 45.5512L22.7381 57.2495C24.4467 58.2502 26.5523 58.2502 28.2619 57.2495L48.2386 45.5512C49.9472 44.5506 51 42.7005 51 40.6993V17.3017V17.3007ZM33.0174 31.3504L17.9557 44.0366C17.2317 44.6472 16.2289 43.8104 16.7106 42.998L21.8247 31.1924C22.0507 30.813 21.9468 30.3312 21.5882 30.0903L16.4029 27.4688C15.9491 27.1636 15.9251 26.5043 16.3548 26.1444L30.9261 13.9604C31.6463 13.3587 32.6414 14.1799 32.1741 14.9913L28.6455 26.8125C28.4119 27.2182 28.5503 27.7273 28.9541 27.9448L32.8991 29.9879C33.4087 30.263 33.4693 30.9691 33.0154 31.3504H33.0174Z" fill="white"/>
                </svg>
                <h2 class="text-white text-3xl font-finalSixBlack">Contactez-nous</h2>
            </div>
            <div class="flex items-center">
                <button  class={`border-white border-solid border-[2px] w-[30px] h-[30px] rounded-full cursor-pointer step-circle ${step === 1 ? 'active' : ''}`} on:click|preventDefault={(e) => { changeColorCircle(e); changeStep(1); }}></button>
                <div class="bg-white w-[60px] h-[2px]"></div>
                <button class={`border-white border-solid border-[2px] w-[30px] h-[30px] rounded-full cursor-pointer step-circle ${step === 2 ? 'active' : ''}`} on:click|preventDefault={(e) => { changeColorCircle(e); changeStep(2); }}></button>
                <div class="bg-white w-[60px] h-[2px]"></div>
                <button class={`border-white border-solid border-[2px] w-[30px] h-[30px] rounded-full cursor-pointer step-circle ${step === 3 ? 'active' : ''}`} on:click|preventDefault={(e) => { changeColorCircle(e); changeStep(3); }}></button>
            </div>
        </div>
        

        <form class="shadow-lg bg-white lg:p-24 p-10 rounded-xl relative">

            {#if step === 1} 
                <div id="step_one" class="lg:h-[380px]">

                    <h1 class=" flex items-center gap-4 font-finalSixMedium text-lg text-center mb-12"><span class="text-white w-[45px] h-[45px] hidden lg:block bg-green p-2 rounded-full">{step}.</span> À la recherche d’un nouveau défi professionnel ?</h1>

                    <div class="lg:flex lg:items-center lg:gap-5 mb-7">
                        <div class="lg:w-1/2 mb-7 lg:mb-0">
                            <label class="hidden" for="lastname">Nom :</label>
                            <input placeholder="Nom*" type="text" name="lastname" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" />
                        </div>
            
                        <div class="lg:w-1/2 mb-7 lg:mb-0">
                            <label class="hidden" for="firstname">Prénom :</label>
                            <input placeholder="Prénom*"type="text" name="firstname" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" />
                        </div>
                    </div>

                    <div class="lg:flex lg:items-center lg:gap-5 mb-7">
                        <div class="lg:w-1/2 mb-7 lg:mb-0">
                            <label class="hidden" for="email">Email :</label>
                            <input placeholder="Email*" type="email" name="email" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" />
                        </div>
            
                        <div class="lg:w-1/2 mb-7 lg:mb-0">
                            <label class="hidden" for="phone">Téléphone :</label>
                            <input placeholder="Téléphone*" type="tel" name="phone" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" />
                        </div>
                    </div>

                    <div class="lg:w-1/2">
                        <label class="hidden" for="city">Ville :</label>
                        <input placeholder="Ville*" type="text" name="city" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" />
                    </div>
                    
                    <div class="lg:flex lg:justify-between lg:items-center mt-7 lg:mt-0">
                        <p class="text-[#9E9E9E] font-finalSixMedium">Champs obligatoires(*)</p>
                        <button class="js-next-btn mt-7 font-finalSixMedium bg-green text-white rounded-lg py-3 px-8" on:click|preventDefault={() => { changeStep(2); }}>Continuer</button>
                    </div>

                </div>
            {/if}

            {#if step === 2} 
                <div id="step_two" class="lg:h-[380px]">

                    <h1 class=" flex items-center gap-4 font-finalSixMedium text-lg text-center mb-12"><span class="text-white w-[45px] h-[45px] hidden lg:block bg-green p-2 rounded-full">{step}.</span> Laissez-nous en savoir un peu plus...</h1>

                    <div class="lg:w-full mb-7">
                        <label class="hidden" for="situation">Je suis </label>
                        <select name="situation" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full">
                            <option value="">Je suis...</option>
                                <option value="A la recherche d’un premier travail">A la recherche d’un premier travail</option>
                                <option value="En reconversion professionnelle et intéressé.e par les métiers verts.">En reconversion professionnelle et intéressé.e par les métiers verts.</option>
                                <option value="Déjà dans le secteur mais je suis actuellement sans emploi.">Déjà dans le secteur mais je suis actuellement sans emploi.</option>
                                <option value="Peu au courant et je souhaite me sensibiliser sur les métiers verts de l’industrie pour savoir si cela peut m’intéresser.">Peu au courant et je souhaite me sensibiliser sur les métiers verts de l’industrie pour savoir si cela peut m’intéresser.</option>
                        </select>
                    </div>
                    <div class="lg:w-full mb-7">
                        <label class="hidden" for="school_level">Je suis </label>
                        <select name="school_level" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full">
                            <option value="">Quel est votre niveau d'études ?</option>
                                <option value="Infra Bac">Infra Bac</option>
                                <option value="Bac professionnel">Bac professionnel</option>
                                <option value="Bac +2 +3 ou équivalent">Bac +2 +3 ou équivalent</option>
                                <option value="Bac +5 ou doctorant.e">Bac +5 ou doctorant.e</option>
                        </select>
                    </div>
                    <div class="lg:w-full mb-7">
                        <label class="hidden" for="how_know">Je suis </label>
                        <select name="how_know" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full">
                            <option value="">Comment avez-vous entendu parler de notre programme ?</option>
                                <option value="France Travail">France Travail</option>
                                <option value="APEC">APEC</option>
                                <option value="Missions locales">Missions locales</option>
                                <option value="Réseau sociaux et internet">Réseau sociaux et internet</option>
                                <option value="Réseau sociaux et internet">Réseau sociaux et internet</option>
                                <option value="Bouche à oreille">Bouche à oreille</option>
                                <option value="Autres">Autres</option>
                        </select>
                    </div>

                    <div class="lg:flex lg:justify-between lg:items-center mt-7 lg:mt-0">
                        <div class="mb-7 lg_mb-0">
                            <input type="checkbox" id="cgv" name="scales" required />
                             <label class="font-finalSixMedium text-sm" for="cgv">En envoyant ce formulaire, j’accepte que la team Green Skills me recontacte.</label>
                        </div>
                        <div class="flex flex-col lg:flex-row lg:gap-2 gap-4">
                            <button class="lg:mt-7 font-finalSixMedium border-green border-solid border-[2px] text-green bg-white  rounded-lg py-3 px-8" on:click|preventDefault={(e) => { changeColorCircle(e); changeStep(1); }}>Retour</button>
                            <button class="lg:mt-7 font-finalSixMedium bg-green text-white rounded-lg py-3 px-8" on:click|preventDefault={(e) => { changeColorCircle(e); changeStep(3); }}>Valider le formulaire</button>
                        </div>
                    </div>
                </div>
            {/if}

            {#if step === 3} 
                <div id="step_tkyou" class="lg:h-[380px] h-[455px]">

                    <img alt="greens skills synergie family" src="src/images/pictos/alveole_tkpage.svg" class="absolute top-0 right-0" />
                    <div class="flex flex-col justify-center items-center h-full">
                        <div class="text-green uppercase font-finalSixHeavy text-8xl text-center">Merci !</div>
                        <div class=" font-finalSixMedium text-black text-lg text-center">Notre équipe vous recontactera dès que possible</div>
                    </div>
                </div>
            {/if}
            
        </form>
    </div>
</section>

<style>
    .active {
        background-color: white;
        transition: all .2s ease;
    }
</style>