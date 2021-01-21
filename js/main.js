eval(mod_pagespeed_C0fTajxCSS);
eval(mod_pagespeed_2LklESEPNT);
var MSG_DELAY = 1000;
var TYPE_SPEED = 100;
var url = window.cdn_path;
if (url === undefined) {
  url = "";
}
var flow = [{
    type: "text",
    content: "Bună ziua, mă numesc Maria Filipaș. Sunt reumatolog, resuscitator, specialist în medicina funcțională și integrativă. Bine ați venit pe site-ul meu oficial."
}, {
    type: "text",
    content: "Aici petrec diagnostice gratuite online și dau recomandări personale care au ajutat la sute de femei și bărbați să scape de durerile de spate și articulații."
}, {
    type: "text",
    content: "Pentru a primi recomandările mele pentru repararea articulațiilor, vă rog să răspundeți la câteva întrebări."
}, {
    type: "single_choice",
    content: "Vă cunoașteţi diagnosticul?",
    answers: ["Artrita", "Osteoartrita", "Altele", "Eu nu ştiu"]
}, {
    type: "single_choice",
    content: "În ce părţi ale corpului aveţi dureri articulare?",
    answers: ["Picioare", "Mâini", "Spate", "În locuri diferite"]
}, {
    type: "single_choice",
    content: "Cât de activ este stilul dvs. de viaţă?",
    answers: ["Fac sport", "Nu fac sport, dar mă stărui să mă mișc mai mult", "Loc de muncă sedentar, mă mișc puțin", "Mai mult stau acasă"]
}, {
    type: "single_choice",
    content: "Vă alimentaţi corect?",
    answers: ["Da, limitez produsele sărate, prăjite, de patiserie", "Când şi cum, undeva 50/50", "Ador mâncarea „dăunătoare”, fast-food-uri, prăjite", "Mănânc ceea pentru ce am destui bani"]
}, {
    type: "single_choice",
    content: "Vârsta dvs.?",
    answers: ["Sub 30 de ani", "31-40 de ani", "41-50 de ani", "51 - 60 de ani", "Peste 60 de ani"]
}, {type: "text", content: "Vă mulțumesc pentru răspunsuri."}, {
    type: "text",
    content: "Problemele articulare nu pot fi lansate. Acest lucru poate duce la dezvoltarea unor modificări ireversibile în țesutul cartilaginos, deformarea articulațiilor și pierderea completă a mobilității. Prin urmare, este bine că v-aţi adresat la mine."
}, {
    type: "text",
    content: "Prima recomandare este să beți cel puțin 2 litri de apă pe zi. Osteocondroza, artrita și artrozele sunt o consecință a deshidratării. Și cu cât persoana îmbătrânește, cu atât are nevoie de mai multă apă. Beţi des, dar încetul cu încetul."
}, {
    type: "text",
    content: "În cazul dvs., este obligatoriu să utilizați remedii externe cu vindecarea veninelor naturale."
}, {type: "text", content: "Ulei de ricin ameliorează rapid durerea și inflamația."}, {
    type: "text",
    content: "Castan de cal subțiază sângele și îmbunătățește circulația sângelui în articulații."
}, {type: "text", content: "Lavandă stimulează producția de colagen și repară articulațiile."}, {
    type: "text",
    content: "Ulei de lamaie protejează articulațiile de uzură și normalizează hormonii."
}, {
    type: "text",
    content: "Chiar și în timpurile antice, oamenii foloseau aceste otrăvuri de dureri la nivelul spatelui și articulațiilor, iar astăzi cei mai importanţi reumatologi din lume le recunosc ca cele mai eficiente pentru recuperarea țesutului articular afectat."
}, {
    type: "text",
    content: "Substanțele enumerate pot fi găsite separat, dar este mult mai convenabil și mai eficient să le utilizați ca parte a unui nou remediu de durere articulară „Hondrowell”. Otravurile naturale enumerate se conțin în el sub forma unei formule speciale cu o concentrație maximă de nutrienți."
}, {
    type: "text",
    content: "Pentru a scăpa de durere, a restabili țesutul cartilajului și mobilitatea articulațiilor, este suficient să aplicați „Hondrowell” ​​extern de 1-2 ori pe zi, şi într-o lună veți putea să vă atingeți scopul."
}, {type: "text", content: "Așa arată.  <br> <img src='"+url+"images/tov.png' class='prod-img' style='max-width: 18%'>"}, {
    type: "text",
    content: "Iată rezultatele câtorva dintre pacienții mei care și-au recuperat articulațiile cu Hondrowell: <br><img src='"+url+"images/comm22.png'> <img src='"+url+"images/valgusnaya-deformaciya-stopy-operaciya-do-posle.jpg' style='width: 100%;'> <img src='"+url+"images/cimg2.png'>"
}, {
    type: "text",
    content: "Durata optimă a cursului, care ia în considerare vârsta, stilul de viață și starea de sănătate actuală, este de la 30 de zile."
}, {
    type: "text",
    content: "În acest timp, va avea loc o restaurare profundă a țesutului cartilaginos al articulației și lichidului sinovial."
}, {
    type: "text",
    content: "În plus, mai am pentru dvs. veşti minunate. Ați trecut diagnosticul online și ați devenit clientul meu al 2000-lea!"
}, {
    type: "text",
    content: "Abia astăzi aveţi ocazia să obţineţi „Hondrowell” pentru promovare."
}, {
    type: "text",
    content: "Pentru a obține „Hondrowell”, scrieți numele și numărul de telefon în formularul de comandă de mai jos. Datele dvs. sunt trimise direct producătorului, nimeni altcineva nu are acces la ele."
}, {
    type: "text",
    content: "Vă va suna înapoi un specialist și după clarificarea tuturor detaliilor în aceeași zi vi se va trimite  pachetul cu cursul „Hondrowell”"
}, {
    type: "text",
    content: "Numărul de pachete promoționale este limitat, așa că vă recomand să vă grăbiți cu comanda."
}, {
    type: "form", templateId: "orderForm", afterMount: function afterMount() {
        setTimeout(() => autoscroll.disable(), 150);
    }
}];
flow.reduce(function (acc, el) {
    return acc.then(function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                var id = "rand_" + new Date().getTime();
                var $messageContainer = $("<div id='".concat(id, "' class=\"box\"></div>"));
                $('.container2').append($messageContainer);
                switch (el.type) {
                    case"single_choice":
                        new Typed("#".concat(id), {
                            strings: [el.content],
                            showCursor: false,
                            typeSpeed: TYPE_SPEED,
                            onComplete: function onComplete() {
                                var $singleChoiceForm = createSingleChoiceForm(el.answers);
                                $singleChoiceForm.find("[data-answer]").click(function (event) {
                                    $(event.target).addClass('active');
                                    $singleChoiceForm.find("[data-answer]:not(.active)").attr("disabled", true);
                                    resolve();
                                });
                                $messageContainer.append($singleChoiceForm);
                                el.afterMount && el.afterMount();
                            }
                        });
                        break;
                    case"form":
                        var formHtml = $("template#".concat(el.templateId)).html();
                        $messageContainer.append(formHtml);
                        el.afterMount && el.afterMount()
                        resolve();
                        break;
                    case"text":
                        new Typed("#".concat(id), {
                            strings: [el.content],
                            showCursor: false,
                            typeSpeed: TYPE_SPEED,
                            onComplete: function onComplete() {
                                el.afterMount && el.afterMount();
                                resolve();
                            }
                        });
                }
            }, MSG_DELAY);
        });
    });
}, Promise.resolve());

function createSingleChoiceForm(answers) {
    var answersHtml = answers.reduce(function (result, answer) {
        return result + "<button type=\"button\" class=\"answer\" data-answer>".concat(answer, "</button>");
    }, "");
    return $("<div class=\"answers\">".concat(answersHtml, "</div>"));
}

function initAutoscroll() {
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            disableAutoscroll();
        } else if (isPageBottom) {
            enableAutoscroll();
        }
    });
    var scrollIntervalId = null;
    var smoothyScroll = new SmoothScroll(null, {speed: 100});

    function enableAutoscroll() {
        if (scrollIntervalId) {
            return;
        }
        var lastLoopBodyHeight = document.body.scrollHeight;
        scrollIntervalId = setInterval(function () {
            var newBodyHeight = document.body.scrollHeight;
            if (lastLoopBodyHeight < newBodyHeight) {
                smoothyScroll.animateScroll(newBodyHeight);
            }
        }, 100);
    }

    function disableAutoscroll() {
        scrollIntervalId && clearInterval(scrollIntervalId);
        smoothyScroll.cancelScroll();
        scrollIntervalId = null;
    }

    function isPageBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    return {enable: enableAutoscroll, disable: disableAutoscroll}
}

var autoscroll = null
$(document).ready(function () {
    autoscroll = initAutoscroll();
    autoscroll.enable()
});