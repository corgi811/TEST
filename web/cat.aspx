<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage/MasterPage.master" AutoEventWireup="true" CodeFile="cat.aspx.cs" Inherits="web_cat" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script>
        page = "cat";
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container">
        <h1 class="text-center">小胖貓養成日記<small>小橘子</small></h1>
        <div id="catcontent">
        </div>
        <%--<div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <img class="card-img-top" src="../img/cat/比較.jpg" width="95%" class="img-responsive center-block"/>
                    <div class="card-body text-center">
                        <p class="card-text">沒有比較沒有傷害</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-sm-6">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/我現在很瘦.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/箱子好舒服.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/抓不到我2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/睡覺也要可愛.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/戴帽子.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/戴帽子2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/躲棉被.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <img src="../img/cat/睡覺也不忘看鏡頭.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2">
                <img src="../img/cat/圍兜兜.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-lg-2">
                <img src="../img/cat/我有披風.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-lg-2">
                <img src="../img/cat/網美貓.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-lg-2">
                <img src="../img/cat/網美貓2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-lg-2">
                <img src="../img/cat/眼睛大.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-lg-2">
                <img src="../img/cat/愛睡的胖子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <hr/>
        <div class="text-right">
            <small>以上圖片由高小姐提供</small>
        </div>--%>
        <%--<div class="newscontent">
            <p>你看過這隻貓嗎</p>
            <img src="../img/cat/橘胖子🍊_190511_0002.jpg" width="25%" class="img-responsive center-block"/>
            <p>如果你沒看過，現在就讓你看看他有多胖</p>
            <div class="row">
                <div class="col-lg-4">
                    <img src="../img/cat/橘胖子🍊_190511_0003.jpg" width="100%" class="img-responsive center-block"/>
                </div>
                <div class="col-lg-4">
                    <img src="../img/cat/橘胖子🍊_190511_0005.jpg" width="100%" class="img-responsive center-block"/>
                </div>
                <div class="col-lg-4">
                    <img src="../img/cat/橘胖子🍊_190511_0008.jpg" width="100%" class="img-responsive center-block"/>
                </div>
            </div>
            <p>你說甚麼？！看不出來有差別？</p>
            <p>那你一定沒看過這張對比圖！！</p>
            <img src="../img/cat/60048390_2201540269942471_2155562953930178560_n.jpg" width="50%" class="img-responsive center-block"/>
            <p>沒有比較沒有傷害啊啊啊</p>
            <hr/>
            <small>以上圖片由高小姐提供</small>
        </div>--%>
    </div>
</asp:Content>

