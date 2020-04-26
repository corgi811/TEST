<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage/MasterPage.master" AutoEventWireup="true" CodeFile="game.aspx.cs" Inherits="web_game" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="../js/game.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container" id="games">
        <div class="text-center">
            <h1 class="myfont">揍你的敵人</h1>
        </div>
        <section id="gamemenu">
            <div class="col-12">
                <button class="text-center align-self-center btn-info btn-lg" onclick="start()">開始遊戲</button>
            </div>
            <div class="col-12">
                <button class="text-center align-self-center btn-danger btn-lg" onclick="backindex()">返回首頁</button>
            </div>
        </section>
        <div id="fightpage" class="displaynone">
            <div class="row">
                <div class="col-xs-6 text-center">
                    <h1>You</h1>
                    <div class="healthbar" id="myblood">
                    </div>
                </div>
                <div class="col-xs-6 text-center">
                    <h1>Enemy</h1>
                    <div class="healthbar" id="enemyblood">
                    </div>
                </div>
            </div>
            <section class="row controls">
                <div class="col-12">
                    <button id="attack" class="text-center align-self-center btn-info btn-lg" onclick="attack()">攻擊</button>
                    <button id="spattack" class="text-center align-self-center btn-success btn-lg" onclick="spattack()">特殊攻擊</button>
                </div>
                <div class="col-12">
                    <button id="heal" class="text-center align-self-center btn-light btn-lg" onclick="heal()">治療</button>
                    <button id="give-up" class="text-center align-self-center btn-danger btn-lg" onclick="giveUp()">離開戰鬥</button>
                </div>
            </section>
            <section class="row log">
                <h1>遊戲記錄</h1>
                <div id="log">
                    <p>遊戲開始</p>
                </div>
            </section>
        </div>
    </div>
</asp:Content>

