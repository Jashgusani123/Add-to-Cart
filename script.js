let sub1 = document.getElementById("decres1");
let sum1 = document.getElementById("incres1");
let sub2 = document.getElementById("decres2");
let sum2 = document.getElementById("incres2");
let sub3 = document.getElementById("decres3");
let sum3 = document.getElementById("incres3");
let prevalue3 = document.getElementById("prevalue3");
let prevalue2 = document.getElementById("prevalue2");
let prevalue1 = document.getElementById("prevalue1");

let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let total = document.getElementById("total")
let Total = 0;

let div1 = document.getElementById("first1");
let div2 = document.getElementById("first2");
let div3 = document.getElementById("first3");

if (prevalue1.innerText == 0) {
    div1.style.display = "none";
}
if (prevalue2.innerText == 0) {
    div2.style.display = "none";
}
if (prevalue3.innerText == 0) {
    div3.style.display = "none";
}


sum1.addEventListener("click", function () {
    if (prevalue1.innerText >= 0) {
        prevalue1.innerText++;
    }
    div1.style.display = "";
    value1.innerText = prevalue1.innerText;
    Total = value1.innerText*100000 + value2.innerText*20000+value3.innerText*30000;

    total.innerText = Total;
    
})
sub1.addEventListener("click", function (e) {
    // console.log(prevalue.innerText);
    if (prevalue1.innerText === "0") {
        prevalue1.innerText = 0;
    } else {
        prevalue1.innerText--;
    }
    div1.style.display = "";

    value1.innerText = prevalue1.innerText;
    Total = value1.innerText*100000 + value2.innerText*20000+value3.innerText*30000;
    total.innerText = Total;
    
});


sum2.addEventListener("click", function (e) {
    // console.log(e);
    if (prevalue2.innerText >= 0) {
        prevalue2.innerText++;
    } else {
        prevalue2.innerText = 0;
    }
    div2.style.display = "";

    value2.innerText = prevalue2.innerText;
    Total = value1.innerText*100000 + value2.innerText*20000+value3.innerText*30000;
    total.innerText = Total;
})
sub2.addEventListener("click", function (e) {
    // console.log(prevalue.innerText);
    if (prevalue2.innerText === "0") {
        prevalue2.innerText = 0;
    } else {
        prevalue2.innerText--;
    }
    div2.style.display = "";
    value2.innerText = prevalue2.innerText;
    Total = value1.innerText*100000 + value2.innerText*20000+value3.innerText*30000;
    total.innerText = Total;
});

sub3.addEventListener("click", function (e) {
    // console.log(prevalue.innerText);
    if (prevalue3.innerText === "0") {
        prevalue3.innerText = 0;

    } else {
        prevalue3.innerText--;
    }
    value3.innerText = prevalue3.innerText;
    div3.style.display = "";

    Total = value1.innerText*100000 + value2.innerText*20000 + value3.innerText*30000;
    total.innerText = Total;
});
sum3.addEventListener("click", function () {
    if (prevalue3.innerText >= 0) {
        prevalue3.innerText++;
    }
    value3.innerText = prevalue3.innerText;
    div3.style.display = "";
    Total = value1.innerText*100000 + value2.innerText*20000 + value3.innerText*30000;

    total.innerText = Total;
});

