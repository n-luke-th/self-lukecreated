// lukecreated base scripts

function bandTooltip(hide = false) {
  const tooltip = bootstrap.Tooltip.getInstance("#band");
  tooltip.show();
  if (hide == true) {
    const tooltip = bootstrap.Tooltip.getInstance("#band");
    tooltip.hide();
  }
}
function cookiesNotice(force = false) {
  const cookies = document.getElementById("cookiesNotice");
  const toast = new bootstrap.Toast(cookies);
  if (force == true || force == "true") {
    // if force to show, show
    toast.show();
    setCookie("cookies", "read");
  } else if (
    (force != true || force != "true") &&
    (getCookie("cookies") != null || getCookie("cookies") != "null")
  ) {
    // if not force but acknowledge before, hide
    toast.hide();
  } else if (
    (force != false || force != "false") &&
    (getCookie("cookies") == null || getCookie("cookies") == "null")
  ) {
    // if force but not acknowledge before, show
    toast.show();
    setCookie("cookies", "read");
  }
  if (getCookie("cookies") == null || getCookie("cookies") == "null") {
    // if not acknowledge before
    toast.show();
    setCookie("cookies", "read");
  }
}
function showBandTooltip() {
  // enable global tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // deal with `#band` tooltip
  bandTooltip();
  setTimeout(bandTooltip, 4500, true); // set autohide
  // toast
  // const cookiesNotice = document.getElementById("cookiesNotice");
  // const toast = new bootstrap.Toast(cookiesNotice);
  // toast.show();
  cookiesNotice();
}
function getCookie(cName) {
  let name = cName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      result = c.substring(name.length, c.length);
      console.log(`>>> [Sys.cookies]: cookies '${cName}' returned`);
      return result;
    }
  }
  return null;
}
function setCookie(cName, cValue, cPath = "/") {
  const d = new Date();
  d.setTime(d.getTime() + 2 * 60 * 60 * 1000); // 2 hour
  let expires = "expires=" + d.toUTCString();
  if (getCookie(cName) != null) {
    document.cookie = `${cName}=${cValue}; ${expires}; path=${cPath};`;
    console.log(`>>> [Sys.cookies]: cookies '${cName}' is updated`);
  } else {
    document.cookie = `${cName}=${cValue}; path=${cPath};`;
    console.log(`>>> [Sys.cookies]: cookies '${cName}' is created`);
  }
}
function deleteCookie(cName, cPath = "/") {
  if (getCookie(cName) != null) {
    document.cookie = `${cName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${cPath};`;
    console.log(`>>> [Sys.cookies]: cookies '${cName}' deleted`);
  } else {
    console.log(`>>> [Sys.cookies]: cookies '${cName}' not found!`);
  }
}
function changeLangView(notice = false) {
  // change display langauge to defined (desired) language by user
  const settingElement = document.getElementById("html-tag");
  const THcon = document.getElementsByTagName("th-con");
  const ENcon = document.getElementsByTagName("en-con");
  const ZHcon = document.getElementsByTagName("zh-con");
  const langList = [THcon, ENcon, ZHcon];
  const size = () => {
    let max = 0;
    for (let i = 0; i < langList.length; ++i) {
      if (langList[i].length > max) {
        max = langList[i].length;
      }
    }
    return max;
  }; // get biggest size

  console.log(`>>> [Sys.displayLang]: biggest content amount = ${size()}`);
  let newLang = "";
  let success = false;

  // get the desired lang first
  if (getCookie("displayLang") === "null") {
    setCookie("displayLang", "en"); // if user is not set their prefer display lang then reset to default display lang (EN)
    alert("cookies are null");
  }
  // set the prefered lang at head then
  settingElement.setAttribute("lang", `${getCookie("displayLang")}`);
  newLang = settingElement.getAttribute("lang");

  // read the desired lang from the head and change them
  for (let i = 0; i < size(); ++i) {
    if (settingElement.getAttribute("lang") == "th") {
      // to TH
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "block";
        ENcon[i].style.display = "none";
        ZHcon[i].style.display = "none";
        if (
          THcon[i].style.display == "block" &&
          ENcon[i].style.display == "none" &&
          ZHcon[i].style.display == "none"
        ) {
          success = true;
          console.log(
            `>>> [Sys.displayLang]: display language is now changed to 'THAI'`
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else if (settingElement.getAttribute("lang") == "en") {
      // to EN
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "none";
        ENcon[i].style.display = "block";
        ZHcon[i].style.display = "none";
        if (
          ENcon[i].style.display == "block" &&
          THcon[i].style.display == "none" &&
          ZHcon[i].style.display == "none"
        ) {
          success = true;
          console.log(
            `>>> [Sys.displayLang]: display language is now changed to 'ENGLISH'`
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else if (settingElement.getAttribute("lang") == "zh") {
      // to ZH
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "none";
        ENcon[i].style.display = "none";
        ZHcon[i].style.display = "block";
        if (
          ENcon[i].style.display == "none" &&
          THcon[i].style.display == "none" &&
          ZHcon[i].style.display == "block"
        ) {
          success = true;
          console.log(
            `>>> [Sys.displayLang]: display language is now changed to 'CHINESE'`
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(
        ">>> [Sys.displayLang]: desired language is not yet available!"
      );
      console.log(
        ">>> [Sys.displayLang]: reset to the default display language ('en')"
      );
      setLangView();
    }
  }
  // if lang is successfully changed
  if (success == true && notice == true) {
    switch (newLang) {
      case "th": // to TH
        // alert("เปลี่ยนเป็นภาษาไทยสำเร็จแล้ว");
        Swal.fire("สำเร็จแล้ว!", "เปลี่ยนเป็นภาษาไทยสำเร็จแล้ว", "success");
        break;
      case "en": // to EN
        // alert("Language is successfully changed to ENG");
        Swal.fire(
          "Success!",
          "Language is successfully changed to ENGLISH",
          "success"
        );
        break;
      case "zh": // to ZH
        // alert("语言已成功更改为中文");
        Swal.fire("成功!", "语言已成功更改为中文", "success");
        break;
      default:
        break;
    }
  }
}
function setView(view = false) {
  const wholeDoc = document.getElementById("whole-doc");
  if (view == false) {
    wholeDoc.style.visibility = "hidden";
    // wholeDoc.style.display = "none";
  } else {
    wholeDoc.style.visibility = "visible";
    // wholeDoc.style.display = "block";
  }
}
function setLangView(lang = "en", notice = false) {
  setView(false);
  if (lang == "null" || lang == null) {
    setCookie("displayLang", `en`);
    console.log(
      `>>> [Sys.displayLang]: display language is now reset to be default language ('${getCookie(
        "displayLang"
      )}')`
    );
    changeLangView(notice);
  } else {
    setCookie("displayLang", `${lang}`);
    console.log(
      `>>> [Sys.displayLang]: display language is now trigged to be changed to '${lang}'`
    );
    changeLangView(notice);
  }
  setView(true);
}
function sessionTracking() {
  let numb = getCookie("session");
  if (numb == null || numb == "null") {
    setCookie("session", "1");
  } else {
    numb = Number(numb);
    numb++;
    setCookie("session", String(numb));
  }

  console.log(
    `>>> [Sys.cookies]: session cookie is now = '${getCookie("session")}'`
  );
  cookiesNotice();
}

function testFunction() {
  Swal.fire("Any fool can use a computer");
}
