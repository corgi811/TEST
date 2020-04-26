<%@ Page Title="" Language="VB" MasterPageFile="~/masterpage/MasterPage.master" AutoEventWireup="false" CodeFile="contact.aspx.vb" Inherits="web_contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container">
        <h1 class="text-center"><b>聯絡我</b></h1>
        <form>
            <div class="form-group">
                <div class="row">
                    <div class="col-lg-6">
                        <input class="form-control" placeholder="姓名"/>
                    </div>
                    <div class="col-lg-6">
                        <input class="form-control" placeholder="電話"/>
                    </div>
                    <div class="col-lg-12">
                        <input class="form-control" placeholder="信箱"/>
                    </div>
                    <div class="col-lg-12">
                        <textarea class="form-control" placeholder="內容" rows="7">
                        </textarea>
                    </div>
                    <div class="col-lg-12">
                        <input type="submit" value="送出" class="btn btn-warning btn-lg btn-block"/>
                    </div>
                </div>
            </div>
        </form>
    </div>
</asp:Content>

