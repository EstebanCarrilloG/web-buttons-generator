$(document).ready(function () {
    let fontBlod = $('#cboxBlod');
    let demoContainer = $('#demo');
    let demoBtn = $("#demo #myButton");
    let notificationContainer = $('.notification-container');
    let notificationUrlInfo = $('#btngenUrlNotifContainer');
    let notificationTextInfo = $('#btngenTxtNotifContainer');


    const URL_REGEXP = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const TEXT_REGXP = new RegExp(/^[A-Za-z0-9\s]+$/g)
    var stylePreCSS = "";
    var styleCss = "";
    var btnProperties = [];
    var newList = [];
    class buttongen {
      constructor(demoBg, fontSize, fontWeight, width, height, padding, borderRadius, textColor, bgcolor, border, boxShadow, hBgColor, hTextColor, hBorderRadius, hBorder, hBoxShadow) {
        this.demoBg = demoBg;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.height = height;
        this.width = width;
        this.padding = padding;
        this.borderRadius = borderRadius;
        this.bgcolor = bgcolor;
        this.textColor = textColor;
        this.border = border;
        this.boxShadow = boxShadow;
        // hover
        this.hBgColor = hBgColor;
        this.hTextColor = hTextColor;
        this.hBorderRadius = hBorderRadius;
        this.hBorder = hBorder;
        this.hBoxShadow = hBoxShadow;
      }

      updateStyleCode(state) {
        var updatedObject = {};
        var btnStyles = [];
        var btnStylesHover = [];

        let demoBtnStyles = [
          { name: "display", prop: "flex", active: true },
          { name: "justify-content", prop: "center", active: true },
          { name: "align-items", prop: "center", active: true },
          { name: "text-decoration", prop: "none", active: true },
          { name: "font-family", prop: "monospace", active: true },
          { name: "font-size", prop: (this.fontSize + "px"), active: true },
          { name: "font-weight", prop: this.fontWeight, active: true },
          { name: "height", prop: this.height, active: true },
          { name: "width", prop: this.width, active: true },
          { name: "padding", prop: this.padding, active: state[0] },
          { name: "color", prop: this.textColor, active: true },
          { name: "background-color", prop: this.bgcolor, active: true },
          { name: "border", prop: this.border, active: state[1] },
          { name: "border-radius", prop: this.borderRadius, active: state[2] },
          { name: "box-shadow", prop: this.boxShadow, active: state[3] },
          { name: "transition", prop: "all 0.3s" }
        ];

        let demoBtnStylesHover = [
          { name: "color", prop: this.hTextColor, active: true },
          { name: "background-color", prop: this.hBgColor, active: true },
          { name: "border", prop: this.hBorder, active: state[4] },
          { name: "border-radius", prop: this.hBorderRadius, active: state[5] },
          { name: "box-shadow", prop: this.hBoxShadow, active: state[6] }
        ];

        let filterDemoBtnStyles = demoBtnStyles.filter(function (c) {
          return c.active !== false;

        })
        let filterDemoHoverBtnStyles = demoBtnStylesHover.filter(function (c) {
          return c.active !== false;

        })

        const BUTTON_CSS = () => {
          styleCss = ".button{"
          filterDemoBtnStyles.forEach((c) => {
            styleCss += `${c.name}:${c.prop};`;
          })
          styleCss += "}"

          styleCss += ".button:hover{"
          filterDemoHoverBtnStyles.forEach((c) => {
            styleCss += `${c.name}:${c.prop};`;
          })
          styleCss += "}"

          return styleCss;
        }



        const BUTTON_PRE_CSS = () => {
          stylePreCSS = "<span style='color: #98ff85'>.button</span> {<br>"
          filterDemoBtnStyles.forEach((c) => {
            stylePreCSS += `  ${c.name}:<span style="color: #eda7a7">${c.prop}</span>;</br>`;
          })
          stylePreCSS += "}<br>";
          stylePreCSS += "<br>"
          stylePreCSS += "<span style='color: #98ff85'>.button</span>:<span style='color: #9fb0ff'>hover</span>{<br>"
          filterDemoHoverBtnStyles.forEach((c) => {
            stylePreCSS += `  ${c.name}:<span style="color: #eda7a7">${c.prop}</span></br>`;
          })
          stylePreCSS += "}<br>";
          return stylePreCSS;
        }

        demoContainer.css("background", this.demoBg);


        $("#butonStyles").html(BUTTON_CSS);
        //demoBtn.hover(function() {$(this).css(demoBtnStylesHover)},function() { $(this).css(updatedObject)});
        $("#cssOutput").html(BUTTON_PRE_CSS);

      }

    }

    function refresh() {

      let demoBg = $("#demoBackgroundColor").val();
      let fontSize = $("#buttonFontSise").val();
      let fontWeight = $("#cboxBlod").val();
      let width = `${$('#buttonWidth').val()}${$('#buttonWidthSelect').val()}`
      let height = `${$('#buttonHeight').val()}${$('#buttonHeightSelect').val()}`
      let padding = `${$('#buttonPadding1').val()}px ${$('#buttonPadding2').val()}px ${$('#buttonPadding3').val()}px ${$('#buttonPadding4').val()}px`;
      let textColor = $("#colorTxt").val();
      let bgcolor = $("#colorBg").val();
      let border = `${$("#buttonBorderPx").val()}px ${$("#buttonTypeSelect").val()} ${$("#colorBdr").val()}`
      let borderRadius = `${$("#buttonBR1").val()}px ${$("#buttonBR2").val()}px ${$("#buttonBR3").val()}px ${$("#buttonBR4").val()}px`;
      let hTextColor = $("#hoverTxt").val();
      let hBgColor = $("#hoverBg").val();
      let hBorder = `${$("#buttonHoverBorderPx").val() + "px"} ${$("#buttonHoverTypeSelect").val()} ${$("#colorHoverBdr").val()}`
      let hBorderRadius = `${$("#buttonHoverBR1").val() + "px"} ${$("#buttonHoverBR2").val() + "px"} ${$("#buttonHoverBR3").val() + "px"} ${$("#buttonHoverBR4").val() + "px"}`
      let boxShadow = `${$("#boxShadowType").val()} ${$("#boxShadowX").val() + "px"} ${$("#boxShadowY").val() + "px"} ${$("#boxShadowDesenfoque").val() + "px"} ${$("#boxShadowDispercion").val() + "px"} ${$("#boxShadowColor").val()}`
      let hBoxShadow = `${$("#boxShadowTypeH").val()} ${$("#boxShadowXH").val() + "px"} ${$("#boxShadowYH").val() + "px"} ${$("#boxShadowDesenfoqueH").val() + "px"} ${$("#boxShadowDispercionH").val() + "px"} ${$("#boxShadowColorH").val()}`

      $(".cb-l").each(function (e) {
        if ($(this).prop('checked')) {
          $(this).parent().prev(".close-containers ").hide();
          newList[e] = false;
        } else {
          $(this).parent().prev(".close-containers ").show();
          newList[e] = true;
        }
      });

      if (fontBlod.is(':checked')) {
        fontWeight = "bold"
      } else {
        fontWeight = "initial"
      }


      $(".cb-wh").each(function (e) {
        if ($(this).prop('checked')) {
          $(this).parent().prev(".close-containers-wh ").hide();
          if (e == 0) height = "auto";
          if (e == 1) width = "auto";
        } else {
          $(this).parent().prev(".close-containers-wh ").show();
        }
      })
      /*if (buttonHoverBorder.is(':checked')) {
        $('#borderContentH').hide();
        hBorder = "initial";
      } else {
        $('#borderContentH').show();
      }*/

      $('.boxshadow-item .input-range, .borderRadius-item .input-range, .boxshadowH-item .input-range').each(function () {
        let valorSlider = $(this).val()
        $(this).next('.slider-value').html(valorSlider + "px");

      });

      const botonPropiedades = new buttongen(demoBg, fontSize, fontWeight, width, height, padding, borderRadius, textColor, bgcolor, border, boxShadow, hBgColor, hTextColor, hBorderRadius, hBorder, hBoxShadow);
      botonPropiedades.updateStyleCode(newList);

    }

    $("#urlVerifyer").on('click', function () {
      let cbtState = $("#buttonText");
      let cbuState = $("#buttonUrl");
      let btnText = $("#buttonText").val();
      let demoBtnUrlC = $("#buttonUrl").val();

      if (btnText !== "") {
        if (btnText.match(TEXT_REGXP)) {
          demoBtn.text($("#buttonText").val());
          showNotification("Texto del boton añadido", true, "text")
          cbtState.removeClass("has-error");

        } else {
          showNotification("Error: No se admiten caracteres especiales como texto del boton.", false, "text")
          cbtState.addClass("has-error");
          demoBtn.text("");
        }
      } else {
        showNotification("Error: Ingrese el texto del boton", false, "text")
        cbtState.addClass("has-error");
      }

      if (demoBtnUrlC == "") {

        showNotification("Error: Ingrese una Url", false, "url");
        cbuState.addClass("has-error");
        //notificationContainer.fadeIn( 300 ).delay( 2000 ).fadeOut( 400 );

      } else {
        if (demoBtnUrlC.match(URL_REGEXP)) {
          updateDemo(demoBtnUrlC);
          showNotification("Url añadida con exito", true, "url");
          cbuState.removeClass("has-error");
        } else {

          updateDemo("#");
          showNotification("Error: Url invalida", false, "url")
          cbuState.addClass("has-error");
        }
      }
    });
    updateDemo("#");

    function updateDemo(demoBtnUrl) {
      const stylePreHTML = (`<<span style="color: #ef596f;">a</span> <span style="color: #d19a66;">class</span> = <span style="color: #89ca78;">"button"</span> &nbsp;<span style="color: #d19a66;">href</span> = <span style="color: #89ca78;">"${demoBtnUrl}"</span>> ${$("#buttonText").val()} &lt;/<span style="color: #ef596f;">a</span>>`);
      $("#htmlOutput").html(stylePreHTML);
    }

    function showNotification(msg, tipo, tipo1) {

      var redNotification = {
        "color":`white`,
        "background": `rgb(139 0 0 / 57%)`,
        "border-radius": `16px`,
        "box-shadow": `0 4px 30px rgba(0, 0, 0, 0.1)`,
        "backdrop-filter": `blur(6.5px)`,
        "-webkit-backdrop-filter": `blur(6.5px)`,
        "border": `1px solid rgba(24, 215, 13, 0.12)`,
        "transition": "all 0.2s ease-in"
      }
     


      var greenNotification = {
        "color":`white`,
        "background": `rgb(0 139 0 / 57%)`,
        "border-radius": `16px`,
        "box-shadow": `0 4px 30px rgba(0, 0, 0, 0.1)`,
        "backdrop-filter": `blur(6.5px)`,
        "-webkit-backdrop-filter": `blur(6.5px)`,
        "border": `1px solid rgba(24, 215, 13, 0.12)`,
        "transition": "all 0.2s ease-in"

      }

      notificationContainer.addClass("notification-container-open")

      var notifyUrl = `<div class = "btngen-notification">${msg}</div><div class="cls-notificacion">x</div>`;
      // var notifyText = `<div class = "text-notification">${msg}</div><div class="cls-notificacion">x</div>`;

      (tipo === true && tipo1 === "url")
        ? notificationUrlInfo.html(notifyUrl).css(greenNotification).fadeIn() : 0;
      (tipo === false && tipo1 === "url")
        ? notificationUrlInfo.html(notifyUrl).css(redNotification).fadeIn() : 0;
      (tipo === true && tipo1 === "text")
        ? notificationTextInfo.html(notifyUrl).css(greenNotification).fadeIn() : 0;
      (tipo === false && tipo1 === "text")
        ? notificationTextInfo.html(notifyUrl).css(redNotification).fadeIn() : 0;


      let close = $(".cls-notificacion");
      close.on('click', function () {
        $(this).parent().fadeOut()
      });
    }
    //$('.input-Form select').on('click',refresh);
    //$("input").keyup(refresh);
    $("input, select").on('input',function(){
        setTimeout(refresh,400);
    });
    //$('.input-checkbox').on('click', refresh);

    refresh();
  });