<template>
  <div class="footer">
    <table style="border-top:1px solid #ccc;border-bottom:1px solid #ccc" border="0" cellpadding="0" cellspacing="0"
           width="930" align="center">
      <tbody>
      <tr>
        <td width="252" align="right" bgcolor="#cccccc">
          <img src="@/static/images/logo_bottom.jpg" height="75" width="226"></td>
        <td style="color:#333" width="446" align="left" bgcolor="#cccccc">
          <p>
            <span class="STYLE1">
              <br>Copyright 2014-{{ new Date().getFullYear() }} 广东中电保胜电力科技发展有限公司 All Rights Reserved<br>
				    </span>
            <span class="STYLE1"></span><br>
          </p>
        </td>
        <td valign="middle" width="232" align="right" bgcolor="cccccc">
          <img src="@/static/images/love.jpg" height="75" width="247">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>
