<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage/MasterPage.master" AutoEventWireup="true" CodeFile="travel.aspx.cs" Inherits="web_travel" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container">
        <div class="jumbotron">
            <h1 class="myfont">世界那麼大 我想去看看</h1>
            <p>我的旅遊日誌</p>
            <a href="https://www.trivago.com.tw/" class="btn btn-primary">開始旅遊</a>
        </div>
        <div class="media">
            <div class="media-left media-middle">
                <img src="../img/travel/王功.jpeg" class="media-object img-thumbnail" width="200"/>
            </div>
            <div class="media-body">
                <h3>我的家鄉-王功漁港餐廳</h3>
                <p>出身彰化且母親是王功人的我，怎麼可能沒來過王功。不得不說平常王功都沒什麼人，漁火節一到來觀光客大量湧進宛如擠沙丁魚一般。<br/>
                這裡除了海產外就是海產，對我來說並沒有其他特別的。如果硬要說的話，那邊的冰棒確實也有一番風味，剩下的還是吃到怕的海產。<br/>
                人在外面讀書的我很久沒回去，回去後才發現很多都變了使這裡少了記憶中那種鄉下的感覺。
                </p>
            </div>
        </div>
        <div class="media">
            <div class="media-body">
                <h3>宅天堂-台北地下街</h3>
                <p>身為宅宅的我終於來到了夢想中的台北地下街，和好友逛了好幾圈也抽了很多一番賞(雖然都是我慫恿朋友去抽 呵呵呵)。<br/>
                    這裡和想像中的差不多，唯一讓我失望的是沒有逛到自己想要的東西又或者是說很多想要的但都沒有達到自己想像的標準，<br/>
                    讓我略為失望。不過最開心的還是看朋友抽一番賞抽到崩潰，下次一定要再拖人下水呵呵呵。
                </p>
            </div>
            <div class="media-right media-middle">
                <img src="../img/travel/地下街.jpeg" class="media-object img-thumbnail" width="200"/>
            </div>
        </div>
        <div class="media">
            <div class="media-left media-middle">
                <img src="../img/travel/淡水.jpeg" class="media-object img-thumbnail" width="200"/>
            </div>
            <div class="media-body">
                <h3>台北著名老街-淡水</h3>
                <p>和3年未見的朋友見面，我朋友身為台北地頭蛇說來台北一定要去淡水逛逛。抵達淡水後迎面而來的是太陽的毒辣<br/>
                    (媽的 誰說台北涼涼的而且時常下雨)，頂著大太陽我們逛了一堆"雜貨店"買了一些古早味糖果。後來在旁休息望著淡水河時<br/>
                    總有股海上都市的感覺，休息完就離開了。X 我沒吃到東西就走了阿！！
                </p>
            </div>
        </div>
    </div>
</asp:Content>

