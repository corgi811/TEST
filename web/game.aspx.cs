using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class web_game :  System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //SqlDataReader reader;   //宣告一個DataReader
        //SqlConnection connStr = new SqlConnection(ConfigurationManager.ConnectionStrings["MySQL_DB"].ConnectionString);
        //String select = "SELECT * FROM `yourself` ORDER BY id DESC";  
        //connStr.Open(); 
        //SqlCommand cmd = new SqlCommand(select, connStr);   //宣告SqlCommand並將SQL語法及連結語法帶入
        //reader = cmd.ExecuteReader();   
        //while (reader.Read())   //使用無限迴圈將SQL語法查詢的結果每筆查閱一次
        //{
        //    this.Myblood.Text = (String)reader["blood"];
        //}
        //connStr.Close();	//關閉資料庫的連結

    }
}