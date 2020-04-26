//test
var page;
$(document).ready(function () {
    if (page == "cat") {
        content();
    }
});
$(window).resize(function () {
    if (page == "cat") {
        content();
    }
});
function content() {
    var html;
    if (document.body.offsetWidth <= 575.98) {
        html = `
        <div class='row'>
            <div class="col-xs-6">
                <div class="card">
                    <img class="card-img-top" src="../img/cat/比較.jpg" width="95%" class="img-responsive center-block"/>
                    <div class="card-body text-center">
                        <p class="card-text">沒有比較沒有傷害</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/我現在很瘦.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/箱子好舒服.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/抓不到我2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/睡覺也要可愛.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/戴帽子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/戴帽子2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/躲棉被.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/睡覺也不忘看鏡頭.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/圍兜兜.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/我有披風.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/網美貓.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/網美貓2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-6">
                <img src="../img/cat/眼睛大.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <img src="../img/cat/愛睡的胖子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
`;
    } else if (document.body.offsetWidth >= 576 && document.body.offsetWidth <= 767.98) {
        html = `
        <div class='row'>
            <div class="col-xs-6">
                <div class="card">
                    <img class="card-img-top" src="../img/cat/比較.jpg" width="95%" class="img-responsive center-block"/>
                    <div class="card-body text-center">
                        <p class="card-text">沒有比較沒有傷害</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="row">
                    <div class="col-xs-6">
                        <img src="../img/cat/我現在很瘦.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-6">
                        <img src="../img/cat/箱子好舒服.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <img src="../img/cat/抓不到我2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-6">
                        <img src="../img/cat/睡覺也要可愛.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <img src="../img/cat/戴帽子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/戴帽子2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/躲棉被.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/睡覺也不忘看鏡頭.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <img src="../img/cat/圍兜兜.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/我有披風.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/網美貓.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/網美貓2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <img src="../img/cat/眼睛大.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-3">
                <img src="../img/cat/愛睡的胖子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
`;
    } else if (document.body.offsetWidth >= 768 && document.body.offsetWidth <= 1199.98) {
        html = `
        <div class="row">
            <div class="col-xs-1">
            </div>
            <div class="col-xs-4">
                <div class="card">
                    <img class="card-img-top" src="../img/cat/比較.jpg" width="95%" class="img-responsive center-block"/>
                    <div class="card-body text-center">
                        <p class="card-text">沒有比較沒有傷害</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="row">
                    <div class="col-xs-4">
                        <img src="../img/cat/我現在很瘦.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-4">
                        <img src="../img/cat/箱子好舒服.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-4">
                        <img src="../img/cat/抓不到我2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <img src="../img/cat/睡覺也要可愛.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-4">
                        <img src="../img/cat/戴帽子.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-4">
                        <img src="../img/cat/戴帽子2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-1">
            </div>
        </div>
        
        <div class="row">
            <div class="col-xs-1">
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/躲棉被.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/睡覺也不忘看鏡頭.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/圍兜兜.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/我有披風.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/網美貓.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-1">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-1">
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/網美貓2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/眼睛大.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/愛睡的胖子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-1">
            </div>
        </div>
`;
    }else if (document.body.offsetWidth >= 1200) {
        html = `
        <div class="row">
            <div class="col-xs-4">
                <div class="card">
                    <img class="card-img-top" src="../img/cat/比較.jpg" width="95%" class="img-responsive center-block"/>
                    <div class="card-body text-center">
                        <p class="card-text">沒有比較沒有傷害</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-8">
                <div class="row">
                    <div class="col-xs-3">
                        <img src="../img/cat/我現在很瘦.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-3">
                        <img src="../img/cat/箱子好舒服.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-3">
                        <img src="../img/cat/抓不到我2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-3">
                        <img src="../img/cat/睡覺也要可愛.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3">
                        <img src="../img/cat/戴帽子.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-3">
                        <img src="../img/cat/戴帽子2.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-3">
                        <img src="../img/cat/躲棉被.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                    <div class="col-xs-3">
                        <img src="../img/cat/睡覺也不忘看鏡頭.jpg" width="75%" class="img-responsive center-block"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <img src="../img/cat/圍兜兜.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/我有披風.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/網美貓.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/網美貓2.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/眼睛大.jpg" width="75%" class="img-responsive center-block"/>
            </div>
            <div class="col-xs-2">
                <img src="../img/cat/愛睡的胖子.jpg" width="75%" class="img-responsive center-block"/>
            </div>
        </div>
`;
    }
    html += `
    <hr/>
    <div class="text-right">
        <small>以上圖片由高小姐提供</small>
    </div>
`;
    $("#catcontent").html(html);
}