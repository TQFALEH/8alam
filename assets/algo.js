
//-------------------------------- LEVEl [3]-----------------------------
//مهارات الكتابة
const engl103 = document.getElementById('engl103');
//تفاضل وتكامل 1
const math203 = document.getElementById('math203');
// فيزياء 1
const phy103 = document.getElementById('phy103');
//برمجة 1
const cs111 = document.getElementById('cs111');
// تراكيب متقطعة
const cs103 = document.getElementById('cs103');
//---------------------------- Level [4]-----------------------------

//مهارات الاتصال
const engl104 = document.getElementById('engl104');
//تفاضل وتكامل 2
const math204 = document.getElementById('math204');
//فيزياء 2
const phy104 = document.getElementById('phy104');
//برمجة 2
const cs112 = document.getElementById('cs112');
//مهارات اللغة العربية 2
const gs112 = document.getElementById('gs112');


//-------------------------- LEVEL [5]---------------------------------

//دراسات إسلامية: ملامح في السيرة النبوية
const gs102 = document.getElementById('gs102');
//جبر خطى 1
const math243 = document.getElementById('math243');
//تصميم المنطق الرقمي
const coe211 = document.getElementById('coe211');
//الخوارزميات وتراكيب البيانات
const cs211 = document.getElementById('cs211');
// مقدمة في هندسة البرمجيات
const cs281 = document.getElementById('cs281');

// -----------------------LEVEL [6]-------------------------------------
//الكتابة الفنية
const engl214 = document.getElementById('engl214');
//اختياري علوم طبيعية
const sci100 = document.getElementById('sci100');
//تنظيم وبناء الحاسب الآلي1
const coe224 = document.getElementById('coe224');
//مقرر اختياري حر 1
const fe1 = document.getElementById('fe1');
//تحليل ونمذجة البرمجيات
const cs284 = document.getElementById('cs284');

// ---------------------------------LEVEL [7]---------------------------------
//الدراسات العامة الاختيارية 1
const gse1 = document.getElementById('gse1');
//الاحتمالات والإحصاء للمهندسين
const stat301 = document.getElementById('stat301');
// معادلات تفاضلية 1
const math320 = document.getElementById('math320');
//نظرية الحوسبة
const cs301 = document.getElementById('cs301');
//نظم التشغيل
const cs323 = document.getElementById('cs323');
//-------------------------------- LEVEL [8]----------------------------

//دراسات إسلامية: حقوق الإنسان في الإسلام
const gs103 = document.getElementById('gs103');
////مقرر اختياري حر 2
const fe2 = document.getElementById('fe2');
//نظم قواعد البيانات
const cs372 = document.getElementById('cs372');
//شبكات الحاسب
const coe332 = document.getElementById('coe332');
//النظم الذكية
const cs362 = document.getElementById('cs362');

//------------------------------- LEVEL [9]---------------------------------
//دراسات إسلامية: القيم والأخلاق الإسلامية

const gs104 = document.getElementById('gs104');
//مقرر اختياري في التخصص 1
const cs1 = document.getElementById('cs1');
//أمن الحاسب
const cs433 = document.getElementById('cs433');
//مشروع التخرج 1
const cs491 = document.getElementById('cs491');
//الرسم بالحاسب
const cs451 = document.getElementById('cs451');
// الحوسبة وأخلاقيات المهنة والمجتمع
const is482 = document.getElementById('is482');


// ---------------------------Level [10]-------------------------------------

//الدراسات العامة الاختيارية 2
const gse2 = document.getElementById('gse2');
//مقرر اختياري في التخصص 2
const cs2 = document.getElementById('cs2');
//مقرر اختياري في التخصص 3
const cs3 = document.getElementById('cs3');
//مشروع التخرج 2
const cs492 = document.getElementById('cs492');
//مقدمة في الحوسبة المتوازية
const cs424 = document.getElementById('cs424');




/////////////////////////////////////////////////// [Start Student Level ]////////////////////////////////////////
// const checkLevel = () => {
//     let studentLevel = 3;
//     if (engl103.checked && math203.checked && phy103.checked && cs111.checked && cs103.checked) {
//         studentLevel = 4;

//     }
//     else if (engl104.checked && math204.checked && gs112.checked && phy104.checked && cs112.checked) {
//         studentLevel = 5;
//     }
//     else if (gs102.checked && math243.checked && coe211.checked && cs211.checked && cs281.checked) {
//         studentLevel = 6;
//     }
//     else if (engl214.checked && sci100.checked && coe224.checked && fe1.checked && cs284.checked) {
//         studentLevel = 7;
//     }
//     else if (gse1.checked && stat301.checked && math320.checked && cs301.checked && cs323.checked) {
//         studentLevel = 8;
//     }
//     else if (gs103.checked && fe2.checked && cs372.checked && coe332.checked && cs362.checked) {
//         studentLevel = 9;
//     }

//     document.getElementById('level').innerText = 'المستوى :' + studentLevel;

//     return studentLevel;

// }


/////////////////////////////////////////////////// [End Student Level ]////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////

const math1 = [
    { key: math203, hours: 3, level: "المستوى الثالث", name: "تفاضل وتكامل 1" },
    { key: math204, hours: 3, level: "المستوى الرابع", name: "تفاضل وتكامل 2" },
    { key: math320, hours: 3, level: "المستوى السابع", name: "معادلات تفاضلية " }
]

sortMath = () => {
    var localTemp = [];
    if (!math203.checked) {
        localTemp = math1[0];
    }
    else if (!math204.checked) {
        localTemp = math1[1];
    }
    else if (!math320.checked) {
        localTemp = math1[2];
    } else {
        localTemp = null;
    }

    return localTemp;
}
////////////////////////////////////////////////////////////////////////////////////////////////

const phys =
    [
        { key: phy103, hours: 4, level: "المستوى الثالث", name: "فيزياء 1" },
        { key: phy104, hours: 4, level: "المستوى الرابع", name: "فيزياء 2" }
    ]
sortPhy = () => {
    var localTemp1 = [];
    if (!phy103.checked) {
        localTemp1 = phys[0];
    } else if (!phy104.checked) {
        localTemp1 = phys[1];
    } else {
        localTemp1 = null;
    }
    return localTemp1;
}
////////////////////////////////////////////////////////////////////////////////////////////////
const Eng = [
    { key: engl103, hours: 3, level: "المستوى الثالث", name: "مهارات الكتابة" },
    { key: engl104, hours: 3, level: "المستوى الرابع", name: " مهارات الاتصال " },
    { key: engl214, hours: 3, level: "المستوى السادس", name: " الكتابة الفنية" },
];
sortEng = () => {
    var localTemp2 = [];
    if (!engl103.checked) {
        localTemp2 = Eng[0];
    } else if (!engl104.checked) {
        localTemp2 = Eng[1];
    } else if (!engl214.checked) {
        localTemp2 = Eng[2];
    } else {
        localTemp2 = null;
    }
    return localTemp2;
};
//////////////////////////////////////////////////////////////////////////////////////////////
const Mss =
    [
        { key: math243, hours: 3, level: "المستوى الخامس", name: "جبر خطى 1" },
        { key: sci100, hours: 3, level: "المستوى السادس", name: "  اختياري علوم طبيعية " },
        { key: stat301, hours: 3, level: "المستوى السابع", name: "الاحتمالات والإحصاء للمهندسين" },
    ];
sortMss = () => {
    var localTemp3 = [];
    if (!math243.checked) {
        localTemp3 = Mss[0];
    } else if (!sci100.checked) {
        localTemp3 = Mss[1];
    } else if (!stat301.checked) {
        localTemp3 = Mss[2];
    } else {
        localTemp3 = null;
    }
    return localTemp3;
};
//////////////////////////////////////////////////////////////////////////////////////////////
const Gs =
    [
        { key: gs112, hours: 2, level: "المستوى الرابع", name: "مهارات اللغة العربية 2" },
        { key: gs102, hours: 2, level: "المستوى الخامس", name: " ملامح في السيرة النبوية" },
        { key: gs103, hours: 2, level: "المستوى الثامن", name: " حقوق الإنسان في الإسلام" },
        { key: gs104, hours: 2, level: "المستوى التاسع", name: "القيم والأخلاق الإسلامية" },

    ];
// const GsS = () => {
//     let GsT = [];
//     for (i = 0; i < Gs.length; i++) {
//         if (Gs[i].key.checked == false) {
//             GsT.push(Gs[i]);
//             console.log(Gs[i])

//         } else {
//             continue;
//         }
//     }
//     console.log(GsT)
// }
// GsS();
sortGs = () => {
    var localTemp4 = [];
    if (!gs112.checked) {
        localTemp4 = Gs[0];
    } else if (!gs102.checked) {
        localTemp4 = Gs[1];
    } else if (!gs103.checked) {
        localTemp4 = Gs[2];
    } else if (!gs104.checked) {
        localTemp4 = Gs[3];
    } else {
        localTemp4 = null;
    }
    return localTemp4;
};
//////////////////////////////////////////////////////////////////////////////////////////////
const Fe =
    [
        { key: fe1, hours: 2, level: "المستوى السادس", name: "مقرر اختياري حر 1" },
        { key: fe2, hours: 2, level: "المستوى الثامن", name: "مقرر اختياري حر 2" },
    ];
sortFe = () => {
    var localTemp10 = [];
    if (!fe1.checked) {
        localTemp10 = Fe[0];
    } else if (!fe2.checked) {
        localTemp10 = Fe[1];
    }
    else {
        localTemp10 = null;
    }
    return localTemp10;
};


//////////////////////////////////////////////////////////////////////////////////////////////
const Req = [
    { key: gse1, hours: 2, level: "المستوى السابع", name: "متطلب جامعة اختياري 1" },
    { key: gse2, hours: 2, level: "المستوى العاشر", name: "متطلب جامعة اختياري 2" },

];

sortReq = () => {
    var localTemp5 = [];

    if (!gse1.checked) {
        localTemp5 = Req[0];
    } else if (!gse2.checked) {
        localTemp5 = Req[1];
    }
    else {
        localTemp5 = null;
    }
    return localTemp5;

};
//////////////////////////////////////////////////////////////////////////////////////////////
const freecs =
    [
        { key: cs1, hours: 3, level: "المستوى التاسع", name: "مقرر اختياري في التخصص (١)" },
        { key: cs2, hours: 3, level: "المستوى العاشر", name: "مقرر اختياري في التخصص (٢)" },
        { key: cs3, hours: 3, level: "المستوى العاشر", name: "مقرر اختياري في التخصص (٣)" },
    ];
sortFreecs = () => {
    var localTemp6 = [];
    if (!cs1.checked) {
        localTemp6 = [freecs[0], null];

    } else if (!cs2.checked) {
        localTemp6 = [freecs[1], freecs[2]];
    } else if (!cs3.checked) {
        localTemp6 = [freecs[2], null];
    }
    else {
        localTemp6 = [null, null];
    }

    return localTemp6;
};
//////////////////////////////////////////////////////////////////////////////////////////////
const is = [
    { key: is482, hours: 1, level: "المستوى التاسع", name: ' الحوسبة وأخلاقيات المهنة والمجتمع' }
]
sortIS = () => {
    var localTemp11 = [];
    if (!is482.checked) {
        localTemp11 = is[0];
    } else {
        localTemp11 = null;

    }
    return localTemp11;
}

//////////
//////////////////////////////////////////////////////////////////////////////////////////////
const cs =
    [
        { key: cs111, hours: 4, level: "المستوى الثالث", name: "برمجة 1" }, //0
        { key: cs103, hours: 3, level: "المستوى الثالث", name: "تراكيب متقطعة" },//1
        { key: cs112, hours: 4, level: "المستوى الرابع", name: "برمجة 2" },//2
        { key: cs211, hours: 4, level: "المستوى الخامس", name: " خوارزميات" },//3
        { key: coe211, hours: 4, level: "المستوى الخامس", name: "تصميم المنطق الرقمي" },//4
        { key: cs281, hours: 3, level: "المستوى الخامس", name: "مقدمة في هندسة البرمجيات" },//5
        { key: coe224, hours: 4, level: "المستوى السادس", name: " تنظيم وبناء الحاسب الآلي1" },//6
        { key: cs284, hours: 4, level: "المستوى السادس", name: "تحليل ونمذجة البرمجيات" },//7
        { key: cs301, hours: 3, level: "المستوى السابع", name: " نظريةالحوسبة" },//8
        { key: cs323, hours: 4, level: "المستوى السابع", name: "نظم تشغيل" },//9
        { key: cs372, hours: 4, level: "المستوى الثامن", name: "نظم قواعد بيانات" },//10
        { key: coe332, hours: 4, level: "المستوى الثامن", name: "شبكات الحاسب الالي " },//11
        { key: cs362, hours: 3, level: "المستوى الثامن", name: "النظم الذكية " },//12
        { key: cs433, hours: 4, level: "المستوى التاسع", name: "امن الحاسب  " },//13
        { key: cs491, hours: 1, level: "المستوى التاسع", name: " مشروع تخرج 1" },//14
        { key: cs451, hours: 4, level: "المستوى التاسع", name: " الرسم بالحاسب" },//15
        { key: cs492, hours: 3, level: "المستوى العاشر", name: " مشروع تخرج 2" },//16
        { key: cs424, hours: 4, level: "المستوى العاشر", name: "مقدمة في الحوسبة المتوازية" },//17
    ]
ChCS = () => {
    var chs = []
    if (cs211.checked && coe224.checked && !cs362.checked && !cs451.checked && !cs372.checked && !coe332.checked) {
        chs = [cs[9], cs[12], cs[15], cs[10]]
    } else if (cs211.checked && !cs362.checked && !cs451.checked && !cs372.checked) {
        chs = [cs[12], cs[15], cs[10], null]
    }
    else if (cs323.checked && !coe332.checked) {
        chs = [cs[11], null, null, null]
    }

    return chs;
}

chSSC = () => {
    var chs = []
    if (cs103.checked && !cs301.checked) {
        chs = cs[8];
    }
    else {
        chs = null;
    }
    return chs;
}




sortCS = () => {
    var localTemp7 = [];
    //pro1
    if (!cs111.checked) {
        localTemp7 = [cs[0], null];
    }
    // pro2
    else if (!cs112.checked) {
        localTemp7 = [cs[2], cs[5]];
    }


    else if (!cs211.checked && (!cs281.checked)) {
        localTemp7 = [cs[5], cs[3]];
    }
    else if (cs112.checked && (!cs211.checked && !cs281.checked)) {
        localTemp7 = [cs[3], cs[5]];
    }
    else if ((cs112.checked && cs111.checked) && !cs281.checked) {
        localTemp7 = [null, cs[5]];
    }
    else if (!cs211.checked && (cs281.checked && !cs284.checked)) {
        localTemp7 = [cs[7], cs[3]];

    }
    else if (cs211.checked && (cs281.checked && !cs284.checked) && coe224.checked) {
        localTemp7 = [cs[7], cs[9]];
    }
    else if ((cs211.checked && coe224.checked) && !cs323.checked) {
        localTemp7 = [null, cs[9]];
    }
    else if (!cs281.checked && (cs211.checked && coe224.checked)) {
        localTemp7 = [cs[5], cs[9]];
    }
    else if (!cs211.checked && coe224.checked) {
        localTemp7 = [cs[3], null];
    }

    else if (cs284.checked && cs362.checked && cs372.checked && coe332.checked && !cs491.checked && !cs433.checked) {
        localTemp7 = [cs[14], cs[13]];
    }
    else if (cs284.checked && cs362.checked && cs372.checked && !coe332.checked && !cs491.checked) {
        localTemp7 = [cs[14], cs[11]];
    }
    else if ((cs284.checked && cs362.checked) && (cs372.checked && coe332.checked) && (!cs491.checked)) {
        localTemp7 = [cs[14], null];
    }
    else if ((cs284.checked && cs362.checked) && (cs372.checked && coe332.checked) && (!cs433.checked && !cs492.checked) && cs491.checked) {
        localTemp7 = [cs[13], cs[16]];

    }
    else if ((cs491.checked && !cs492.checked) && (cs323.checked && !cs424.checked)) {
        localTemp7 = [cs[16], cs[17]];
    }
    else if ((cs323.checked && !cs424.checked) && (!cs433)) {
        localTemp7 = [cs[13], cs[17]];
    }
    else if ((cs491.checked && !cs492.checked)) {
        localTemp7 = [cs[16], null];
    }
    else if ((cs491.checked && cs492.checked) && (cs323.checked && !cs424.checked)) {
        localTemp7 = [null, cs[17]];
    }


    return localTemp7
}
sortCs3 = () => {

    var localTemp8 = [];

    if (!cs103.checked) {
        localTemp8 = [cs[1], null]
    }
    else if (!coe211.checked) {
        localTemp8 = [cs[4], null];
    }
    else if (!coe224.checked && !cs301.checked) {
        localTemp8 = [cs[6], cs[8]];
    }
    else if (!cs362.checked && cs211.checked && !cs451.checked) {
        localTemp8 = [cs[12], cs[15]];

    }
    else if (!cs362.checked && cs211.checked && !cs372.checked) {
        localTemp8 = [cs[12], cs[10]];

    }
    else if (!cs372.checked && cs211.checked && !cs451.checked) {
        localTemp8 = [cs[10], cs[15]];

    }
    else if (!cs362.checked && cs211.checked) {
        localTemp8 = [cs[12], null];

    }
    else if (!cs372.checked && cs211.checked) {
        localTemp8 = [cs[10], null];
    }
    else if (cs323.checked && (cs211.checked && coe224.checked) && (!cs372.checked && !coe332.checked)) {
        localTemp8 = [cs[11], cs[10]];
    }
    else if (!cs451.checked && cs211.checked) {
        localTemp8 = [cs[15], null];
    }
    else if ((cs284.checked && cs362.checked) && (cs372.checked && !coe332.checked) && (!cs491.checked)) {
        localTemp7 = [cs[14], cs[11]];
    }
    else if (cs323.checked && (cs211.checked && coe224.checked) && (!coe332.checked && !cs301.checked)) {
        localTemp8 = [cs[11], cs[8]];
    }

    else if (!cs301.checked && !cs424.checked) {
        localTemp8 = [cs[8], cs[17]];
    }
    else if (!cs424.checked) {
        localTemp8 = [null, cs[17]];
    }
    else if (!cs301.checked) {
        localTemp8 = [cs[8], null];
    }
    else if ((cs491.checked && cs492.checked) && (cs323.checked && !cs424.checked)) {
        localTemp7 = [null, cs[17]];
    }

    return localTemp8;
}
var sili = 0;
var allHours = 0;
var remainHours = 125;
const checkedHours = () => {
    let all = [math1, phys, Eng, Mss, Gs, Fe, Req, freecs, is, cs]
    var allCheked = [];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            // console.log(all[i][j]);
            if (all[i][j].key.checked) {
                allCheked.push(all[i][j]);

            }

        }
    }
    for (i = 0; i < allCheked.length; i++) {
        allHours = allHours + allCheked[i].hours;
    }



    remainHours = remainHours - allHours;
    console.log('الساعات المتبقية : ' + remainHours);
    sili = sili + allHours
}
console.log(remainHours);
//  allHours = allHours + allCheked.hours;
//////////////////////////////////////////////////////////////////////////////////////////////
//t1,t0,t2,t3,t4,t5,t6,t7,t8,
document.getElementById('tabels').innerHTML += `
 
                     <div class="shadow-sm">
           <table id="table" class="table text-center table-bordered table-hover mb-3 p-5 text-light fw-light">
                             <thead id="t01">
                                 <tr class=" bg-light bg-opacity-25 text-dark">
                                     <th style="width: 10%;" scope="col" class=" bg-light bg-opacity-25 text-dark"> #</th>
                                     <th scope="col">الساعات</th>
                                     <th scope="col"> المادة</th>
                                 </tr>
                             </thead> `

var finalSum = 0;
var newList = [];
const sortAll = (t1, t0, t2, t3, t4, t5, t6, t7, t8, t9) => {


    t1 = sortCS();
    a = t1[0];
    b = t1[1];
    t0 = sortCs3();
    c = t0[0];
    d = t0[1];
    t2 = sortMath();
    t4 = sortEng();
    t3 = sortPhy();
    t5 = sortMss();
    t7 = sortGs();
    t6 = sortFreecs();
    e = t6[0];
    f = t6[1];
    t8 = sortFe();
    t9 = sortReq();
    t10 = sortIS();
    var finalSum = 0;
    var allTemp = [a, b, c, d, t2, t3, t4, t5, t7, t8, e, f, t9, t10];

    var tempWithout = [...new Set(allTemp)];  //
    var sum = 0;
    let min = 0;

    var filtered = tempWithout.filter(function (el) {
        return el != null;
    });

    // console.log(filtered);
    console.log('**************[START]****************');
    let counter = 0;
    let inc = 1;


    // newList.length == filtered.length;
    newList = [];


    for (var i = 0; i < filtered.length; i++) {


        sum += filtered[i].hours;
        min = filtered[i].hours;
        if (sum > 19) {
            filtered.pop();
        }
        else {
            //  newList = [...filtered]
            newList.push(filtered[i]);


            document.getElementById('table').innerHTML += `
                                <tbody  class="" id="prinText"  >
                                    <tr>
                                        <th scope="row">${inc}</th>
                                        <td id="thours0+${counter}">${filtered[i].hours}</td>
                                        <td id="'tname' + ${counter}">${filtered[i].name}</td>

                                    </tr>
                            
                            `
            console.log((filtered[i].name) + "   الساعات  : " + min);
            finalSum += filtered[i].hours;


        }

        counter++;
        inc++;
    }
    console.log('مجموع الساعات قبل: ' + sum);
    console.log(' مجموع الساعات بعد: ' + finalSum);
    remainHours = remainHours - finalSum;
    sili = sili + finalSum;

    document.getElementById('table').innerHTML += `
      
     <tr class="bg-light bg-opacity-25   text-black" style="font-weight: 800;
    font-family: 'Line Awesome Free';" >
                                        <th>مجموع الساعات</th>
                                        <td style="width: 10%;" class="bg-light bg-opacity-25 mt-3" >${finalSum}</td>
                                        <td class="bg-light bg-opacity-25">
                                        <div class="d-flex justify-content-evenly align-content-center">
                                            <div class="badge rounded my-2 bg-warning p-2 text-black"> مكتسبة : ${sili}</div>
                                            <div class="badge rounded my-2 bg-warning p-2 text-black "> متبقية : ${remainHours}</div>
                                        </div></td>
                                    </tr></tbody >

                            </table >
                            </div>
                         
    
    `
    console.log('**************[END]****************');

}

//////////////////////////



const hehe = () => {
    var check = [];
    let sum = 0;
    console.log('before');
    for (j = 0; j < newList.length; j++) {
        sum += newList[j].hours;

        console.log(newList[j].name);

    }
    console.log(sum);

    if (sum > 19) {
        newList.pop();

    }
    else {
        console.log('after');

        for (let i = 0; i < newList.length; i++) {
            newList[i].key.checked = true;
            check[i] = newList[i];

            console.log(check[i].name);
        }
        console.log('Total hours : ' + sum)

    }
    //
    sortAll(check);


}


so = () => {

    for (i = 0; i < 7; i++) {
        if (remainHours != 0) {
            hehe();
        } else {
            break;
        }
    }
}


const sortAllWith = () => {

    t1 = sortCS();
    a = t1[0];
    b = t1[1];
    t0 = sortCs3();
    c = t0[0];
    d = t0[1];
    t2 = sortMath();
    t4 = sortEng();
    t3 = sortPhy();
    t5 = sortMss();
    t7 = sortGs();
    t6 = sortFreecs();
    e = t6[0];
    f = t6[1];
    t8 = sortFe();
    t9 = sortReq();
    t10 = sortIS();
    t12 = ChCS();
    e = t12[0]
    z = t12[1]
    x = t12[2]
    m = t12[3]
    t13 = chSSC();
    let finalSum = 0;

    let allTemp = [a, b, c, d, t2, t3, t4, t8, e, f, t9, t10, t13, e, z, x, m];

    for (i = 0; i < Gs.length; i++) {
        if (Gs[i].key.checked == false) {
            allTemp.push(Gs[i]);
            console.log(Gs[i])

        } else {
            continue;
        }
    }

    for (i = 0; i < Mss.length; i++) {
        if (Mss[i].key.checked == false) {
            allTemp.push(Mss[i]);
            console.log(Mss[i])

        } else {
            continue;
        }
    }
    for (i = 0; i < freecs.length; i++) {
        if (freecs[i].key.checked == false) {
            allTemp.push(freecs[i]);
            console.log(freecs[i])

        } else {
            continue;
        }
    }



    // console.log();

    let tempWithout = [...new Set(allTemp)];  //
    let sum = 0;
    let min = 0;

    let filtered = tempWithout.filter(function (el) {
        return el != null;
    });

    // console.log(filtered);
    console.log('**************[START]****************');
    let counter = 0;
    let inc = 1;


    // newList.length == filtered.length;
    newList = [];

    for (var i = 0; i < filtered.length; i++) {


        sum += filtered[i].hours;
        min = filtered[i].hours;

        //  newList = [...filtered]
        newList.push(filtered[i]);


        document.getElementById('table').innerHTML += `
      <tbody  class="" id="prinText"  >
      <tr> <th scope="row">${inc}</th>
    <td  id="thours0+${counter}">${filtered[i].hours}</td>
   
    <td style="" heheeee class="d-flex  justify-content-md-between  flex-column align-items-sm-stretch  text-light-50  "  id="'tname' + ${counter}">${filtered[i].name} <span class="badge rounded my-2 bg-warning p-2 shadow-lg text-dark "> ${filtered[i].level}</span></td>
    </tr>                           
  `
        console.log((filtered[i].name) + "   الساعات  : " + min);
        finalSum += filtered[i].hours;




        counter++;
        inc++;
    }
    console.log('مجموع الساعات قبل: ' + sum);
    console.log(' مجموع الساعات بعد: ' + finalSum);
    remainHours = remainHours - finalSum;
    sili = sili + finalSum;

    document.getElementById('table').innerHTML += `
      
     <tr class="bg-light bg-opacity-25   text-black" style="font-weight: 800;
    font-family: 'Line Awesome Free';" >
                                        <th>مجموع الساعات</th>
                                        <td style="width: 10%;" class="bg-light bg-opacity-25 mt-3" >${finalSum}</td>
                                        <td class="bg-light bg-opacity-25"><div class="d-flex justify-content-evenly align-content-center">
                                            <div>  </div>
                                            <div>  </div>
                                        </div></td>
                                    </tr></tbody >

                            </table >
                            </div>
                         
    
    `
    console.log('**************[END]****************');

}


m8 = () => {
    document.getElementById('m8').innerHTML = `

      <div class=" d-flex justify-content-center  align-content-center  text-center fs-3  text-light" >
    <h5  class="mx-2" id="offcanvasBottomLabel">        الخطة المقترحة       </h5>

   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
   </div>
    `

}

m8t = () => {
    document.getElementById('m8').innerHTML = `
   <div class=" d-flex justify-content-center  align-content-center  text-center fs-3  text-light" >
    <h5  class="mx-2" id="offcanvasBottomLabel">مقترح الترم القادم </h5>

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
   </div>
   
   `
}
m8tt = () => {
    document.getElementById('m8').innerHTML = `

     <div class=" d-flex justify-content-center  align-content-center  text-center fs-3  text-light" >
    <h5  class="mx-2" id="offcanvasBottomLabel">    جميع المواد المتاحة لك    </h5>

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
   </div>
   
    `
}







