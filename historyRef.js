const informationHtml = ['<ul><p class="titlee">Народ</p> <li>1. Колдун в народном понимании — это не просто мужской эквивалент ведьмы. Его образ более мифологизирован. </li> <li>2. Народная культура жестко противопоставляет "прямое" и "кривое" как хорошее и дурное, например: "кривая дорожка" как преступный образ жизни. Кривизна — это нарушение правильного порядка вещей, прорыв хаоса, грозящий самыми страшными бедами. И поэтому колтун (сбившиеся в узел волосы) считался внешним выражением проклятий, бед и болезней.</li> <li>3. Нейтрализация колтуна требовала изощренных магических действий. Как правило, их совершал знахарь, иногда - "хороший" колдун (он считался магически испорченным) </li> <li>4. В народном понимании колдун — это тот, кто насылает колтуны (точнее, проклятья, выражающиеся в появлении колтунов).</li> <li>5. Колдунов в отличии от ведьм нередко знали как реального человека, а то и специально приглашали на свадьбу, поскольку опасались, что какой нибудь неизвестный колдун захочет навредить молодым, и тогда приглашенный гость должен был нейтрализовать соперника </li></ul>',
'<ul><p class="titlee">Государство</p> <li>1. До принятия христианства государство и закон не применяло никаких мер насчет язычеств.</li> <li>2. С принятием христианства в 10 веке и формированием Московского государства отношение к магии стало меняться.</li> <li>3. В период правления Ивана Грозного было введено законодательство, ограничивающие магические практики и ведьмологию. В этот период также проходили охоты на ведьм и усиление контроля со стороны церкви.</li> <li>4. В Московской Руси любое занятие магией и отступление от веры в Бога запрещалось духовными и светскими властями, преследовалось и осуждалось как религиозное преступление. Инквизиция сжигала колдунов и ведьм на кострах. </li> </ul>',
'<ul><p class="titlee">Язычество</p> <li>1. Заговоры и заклинания: Использование словесных формул, чтобы повлиять на события или людей. Заговоры часто применялись для защиты от злых сил, привлечения сил или удачи.</li> <li>2. Травяная магия: Использование растений с целью лечения, защиты или вызывания определённых энергий. Травы считались не только лечебными, но и обладающими магической силой</li> <li>3. Обряды и ритуалы: Древнерусские традиции включали в себя различные обряды, связанные с жизненными событиями, такими как рождение, брак и смерть. Ритуалы направлялись на обеспечение благополучия и защиты.</li><li>4. Обереги и талисманы: Использование предметов, обладающих магической силой, для защиты от негативных   воздействий или привлечения положительных энергий.</li><li>5. Предсказание: Использование различных методов, таких как гадание по карточкам, кофейной гуще, или даже по руке, для предсказания будущего или получения ответов на вопросы.</li> <li>6. Связь с природой и духами: Верование в силу природы, духов и богов были важной частью русской магии. Различные обряды проводились в честь природных явлений.</li></ul>'
];
var i = 0;
var spravka = document.getElementById('spravka');

function backClicked(){
    if(i > 0){        
        forward.style.filter = "grayscale(0%)";
        i--;
        spravka.innerHTML = informationHtml[i];    
        if(i == 0)
            back.style.filter = "grayscale(100%)";
    }   
}

function forwardClicked(){
    if(i < informationHtml.length - 1){
        back.style.filter = "grayscale(0%)";
        i++;
        spravka.innerHTML = informationHtml[i];    
        if(i == informationHtml.length - 1)
            forward.style.filter = "grayscale(100%)";
    }
}