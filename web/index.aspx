<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage/MasterPage.master" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="web_index_index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container">
	    <img class="img-circle img-responsive center-block" src="../../img/corgi.jpg" width="25%"/>
        <div id="introduce">
            <div class="row">
                <div class="col-lg-4 callout">
                    <span class="glyphicon glyphicon-education"></span>
                    <h2 class="center">經歷</h2>
                    <p>
                       2015/09~2019/06<br/>
                       國立高雄科技大學 資訊管理系<br/>
                       2018/07~2018/11<br/>
                       勝強科技 實習生
                    </p>
                </div>
                <div class="col-lg-4 callout">
                    <span class="glyphicon glyphicon-heart"></span>
                    <h2 class="center">興趣</h2>
                    <p>
                        排球
                        旅遊
                        遊戲<br/>
                        小說
                        電影
                        桌遊
                    </p>
                </div>
                <div class="col-lg-4 callout">
                    <span class="glyphicon glyphicon-briefcase"></span>
                    <h2 class="center">技能</h2>
                    <p>
                        前端：HTML/CSS/JS<br/>
                        後端：PHP/MySQL<br/>
                        框架：Bootstrap/JQuery
                    </p>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

