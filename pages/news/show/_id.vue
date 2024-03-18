<template>
  <div class="container">
    <table border="0" cellpadding="0" cellspacing="0" width="930" align="center">
      <tbody>
      <tr>
        <td align="center">
          <img src="@/static/images/news.png" alt="">
        </td>
      </tr>
      </tbody>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" width="930" align="center">
      <tbody>
      <tr>
        <td style="padding-top:8px" valign="top" width="194">
          <table border="0" cellpadding="0" cellspacing="0" width="194">
            <tbody>
            <tr>
              <td><img src="@/static/images/h3.jpg" height="20" width="194"></td>
            </tr>
            <tr>
              <td style="padding-top:8px;padding-bottom:8px;">
                <table border="0" cellpadding="1" cellspacing="0" width="100%" align="center">


                  <tbody>
                  <tr style="" backupcolor="" onmouseout="this.style.backgroundColor=backupcolor"
                      onmouseover="this.backupcolor=this.style.backgroundColor;this.style.backgroundColor='#ebebeb'">
                    <td style="border-bottom:1px solid #DDDDDD;" width="30">
                      <div align="center"><img src="@/static/images/zw012.gif" height="5" width="3"></div>
                    </td>
                    <td style="border-bottom:1px solid #DDDDDD;" align="left">
                      <NLink to="/news">公司新闻</NLink>
                    </td>
                  </tr>

                  <tr style="" backupcolor="" onmouseout="this.style.backgroundColor=backupcolor"
                      onmouseover="this.backupcolor=this.style.backgroundColor;this.style.backgroundColor='#ebebeb'">
                    <td style="border-bottom:1px solid #DDDDDD;" width="30">
                      <div align="center"><img src="@/static/images/zw012.gif" height="5" width="3"></div>
                    </td>
                    <td style="border-bottom:1px solid #DDDDDD;" align="left">
                      <NLink to="/news">媒体报导</NLink>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="194">
            <tbody>
            <tr>
              <td style="padding-bottom:10px;padding-top:10px">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" background="images/msn.jpg">
                  <tbody>
                  <tr>
                    <td height="66" valign="middle" width="47%" align="center">
                      <NLink to="#"></NLink>
                    </td>
                    <td valign="middle" width="53%" align="center">&nbsp;</td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:10px">
                <NLink to="#"><img src="@/static/images/centect.jpg" border="0" height="66" width="194"></NLink>
              </td>
            </tr>
            <tr>
              <td>
                <NLink to="#"><img src="@/static/images/net.jpg" border="0" height="66" width="194"></NLink>
              </td>
            </tr>
            </tbody>
          </table>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </td>
        <td style="padding-top:8px;padding-left:20px" valign="top" width="708">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
            <tr>
              <td style="border-bottom:1px solid #ccc" width="3%">
                <img src="@/static/images/home.gif" height="10" width="12">
              </td>
              <td style="border-bottom:1px solid #ccc" width="97%" align="left"> -&gt;&gt;
                <NLink to="/">广东中电保胜电力</NLink>
                -&gt;&gt;
                <NLink to="/news">新闻中心</NLink>
              </td>
            </tr>
            </tbody>
          </table>
          <br>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
            <tr>
              <td style="font-size:9pt;line-height:25px;" align="left">
                <table border="0" cellpadding="3" cellspacing="0" width="97%" align="center">
                  <tbody>
                  <tr>
                    <td colspan="3" style="padding-top:10px">
                      <div class="fr right_con">
                        <div class="newslist">
                          <h2
                            style="padding:10px 0px; border-bottom:1px #ccc dashed; line-height:30px; text-align:center;">
                            {{ news[0].title }}
                          </h2>
                          <div style="padding:20px 10px;" v-html="news[0]['content']"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "news-show",
  asyncData({params}) {
    return {
      id: Number(params.id)
    }
  },
  data: () => {
    return {
      newsData: require('@/assets/data/news.json'),
      news: []
    }
  },
  created() {
    this.news = this.newsData.filter((d) => d.id == this.id);
  }
}
</script>
