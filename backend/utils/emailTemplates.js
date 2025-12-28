export const getResetPasswordTemplate = (name, resetPasswordToken) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="color-scheme" content="light dark" />
  <title>Reset Your Password</title>
  <style type="text/css">
    @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700");
    
    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      background-color: #f4f4f7;
      color: #51545E;
    }

    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 25px 0;
      background-color: #f4f4f7;
    }

    .email-content {
      width: 100%;
      max-width: 570px;
      margin: 0 auto;
    }

    .email-masthead {
      padding: 25px 0;
      text-align: center;
    }

    .email-masthead_name {
      font-size: 19px;
      font-weight: bold;
      color: #3869d4;
      text-decoration: none;
    }

    .email-body {
      width: 100%;
      background-color: #FFFFFF;
      border-top: 1px solid #EAEAEC;
      border-bottom: 1px solid #EAEAEC;
    }

    .content-cell {
      padding: 45px;
    }

    h1 {
      margin-top: 0;
      color: #333333;
      font-size: 22px;
      font-weight: bold;
      text-align: left;
    }

    p {
      font-size: 16px;
      line-height: 1.625;
      color: #51545E;
    }

    .token-box {
      background-color: #f4f4f7;
      border-radius: 4px;
      padding: 20px;
      margin: 30px 0;
      text-align: center;
    }

    .token-value {
      font-family: 'Courier New', Courier, monospace;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #3869d4;
    }

    .email-footer {
      text-align: center;
      padding: 25px 0;
    }

    .email-footer p {
      color: #b0adc5;
      font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
      .email-content {
        width: 100% !important;
      }
      .content-cell {
        padding: 30px !important;
      }
    }
  </style>
</head>
<body>
  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td class="email-masthead">
              <a href="https://www.budgetify.com" class="email-masthead_name">Budgetify</a>
            </td>
          </tr>
          <tr>
            <td class="email-body">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="content-cell">
                    <h1>Hi ${name},</h1>
                    <p>You requested a password reset. Use the token below to complete the process. This token is <strong>valid for only 10 minutes</strong>.</p>
                    
                    <div class="token-box">
                      <span class="token-value">${resetPasswordToken}</span>
                    </div>

                    <p>If you did not request this, please ignore this email or contact support if you have concerns.</p>
                    
                    <p>Thanks,<br>The Budgetify Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="content-cell">
                    <p>&copy; ${new Date().getFullYear()} Budgetify. All rights reserved.</p>
                    <p>https://budgetify.com</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
