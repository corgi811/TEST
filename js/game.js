var myblood = 100;
var enemyblood = 100;
var spcount = 3;
function backindex() {
    location.href = "index.aspx";
}
function start() {
    $("#gamemenu").addClass("displaynone");
    $("#fightpage").removeClass("displaynone");
    $("#attack").removeAttr("disabled");
    $("#spattack").removeAttr("disabled");
    $("#heal").removeAttr("disabled");
    myblood = 100;
    enemyblood = 100;
    spcount = 3;
    var html = `<p>遊戲開始</p>`;
    $("#log").html(html);
    displayblood();
}
function displayblood() {
    $("#myblood").html(myblood);
    $("#enemyblood").html(enemyblood);
    $("#myblood").css("width" , myblood+"%");
    $("#enemyblood").css("width", enemyblood + "%");
    if (myblood == 100) {
        $("#heal").attr("disabled", "disabled");
    } else {
        $("#heal").removeAttr("disabled");
    }
    if (spcount == 0) {
        $("#spattack").attr("disabled", "disabled");
    } else {
        $("#spattack").removeAttr("disabled");
    }
    if (myblood == 0 || enemyblood == 0) {
        $("#attack").attr("disabled", "disabled");
        $("#spattack").attr("disabled", "disabled");
        $("#heal").attr("disabled", "disabled");
        if (myblood == 0) {
            displaylog(0, 0,"badend");
        } else {
            displaylog(0, 0, "happyend");
        }
    }
}
function giveUp() {
    $("#gamemenu").removeClass("displaynone");
    $("#fightpage").addClass("displaynone");
}
function attack() {
    var hurt;
    var hurt1;
    if (myblood < 10) {
        hurt1 = Math.floor(Math.random() * myblood+1);
    } else {
        hurt1 = Math.floor(Math.random() * 11);
    }
    if (enemyblood < 10) {
        hurt = Math.floor(Math.random() * enemyblood+1);
    } else {
        hurt = Math.floor(Math.random() * 11);
    }
    myblood -= hurt1;
    enemyblood -= hurt;
    displaylog(hurt, hurt1, "attack");
    displayblood();
}

function heal() {
    var hurt;
    var heal;
    if (myblood < 10) {
        hurt = Math.floor(Math.random() * (myblood + 1));
    } else {
        hurt = Math.floor(Math.random() * 8);
    }
    if (myblood > 90 && myblood<100) {
        heal = Math.floor(Math.random() * (101 - myblood));
    } else {
        heal = Math.floor(Math.random() * 11);
    }
    myblood += heal;
    myblood -= hurt;
    displaylog(heal, hurt, "heal");
    displayblood();
}

function spattack() {
    var hurt;
    var hurt1;
    if (myblood < 10) {
        hurt1 = Math.floor(Math.random() * myblood + 1);
    } else {
        hurt1 = Math.floor(Math.random() * 11);
    }
    if (enemyblood < 10) {
        hurt = Math.floor(Math.random() * enemyblood + 1);
    } else {
        hurt = Math.floor(Math.random() * 21);
    }
    myblood -= hurt1;
    enemyblood -= hurt;
    spcount -= 1;
    displaylog(hurt, hurt, "spattack");
    displayblood();
}

function displaylog(num, num2, type) {
    var html = $("#log").html();
    if (type == "attack") {
        html += `
        <p>敵人受到`+ num + `點傷害 你受到` + num2 + `點傷害 </p>
`;
    } else if (type == "spattack") {
        html += `
        <p>你發動特殊攻擊 特殊攻擊次數剩下`+ spcount + `</p>
        <p>敵人受到` + num + `點傷害 你受到` + num2 + `點傷害</p>
`;
    } else if (type == "heal") {
        html += `
        <p>你恢復了`+ num + `點生命 你受到` + num2 + `點傷害 </p>
`;
    } else if (type == "happyend") {
        html += `
        <p>你贏了!!</p>
        <p>遊戲結束</p>
`;
    } else {
        html += `
        <p>你輸了!!</p>
        <p>遊戲結束</p>
`;
    }

    console.log(html);
    $("#log").html(html);
    $("#games").css("height", document.body.scrollHeight + "px")
}