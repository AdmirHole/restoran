$(document).ready(function () {
  var sanitizeHTML = function (str) {
    return str.replace(/[^\w. ]/gi, function (c) {
      return '&#' + c.charCodeAt(0) + ';';
    });
  };

  const openCloseBtn = $(".toggle-button");
  const sidebar = $(".sidebar");
  const wrapper = $(".wrapper");
  var submenus = $(".has-submenu");

  if ($(window).width() < 576) {
    sidebar.addClass("sidebar-close");
    wrapper.addClass("wrapper-max");
    openCloseBtn.addClass("zero-button");
  }

  if ($(window).width() > 576 && $(window).width() < 800) {
    sidebar.addClass("sidebar-collapse");
    wrapper.addClass("wrapper-full");
    openCloseBtn.addClass("open-button");
  }

  if ($(window).width() > 800) {
    sidebar.addClass("sidebar-open");
    wrapper.addClass("wrapper-collapse");
    openCloseBtn.addClass("close-button");
  }

  $(window).resize(function () {
    var width = $(window).width();
    let height = $(window).height();

    let openedSidebar = $(".sidebar.sidebar-open").height();

    if (openedSidebar < 420) {
      $(openedSidebar).css("overflow-y", "auto");
    }

    if (width < 576) {
      if (sidebar.hasClass("sidebar-collapse") || sidebar.hasClass("sidebar-open")) {
        sidebar.removeClass("sidebar-collapse").removeClass("collapsed").removeClass("sidebar-open").addClass("sidebar-close");
        wrapper.removeClass("wrapper-full").removeClass("wrapper-collapse").addClass("wrapper-max");
        openCloseBtn.removeClass("open-button").removeClass("close-button").addClass("zero-button");
        $(".overlay-div").removeClass("overlay");
      }
    }

    if (width > 576 && width < 800) {
      if (sidebar.hasClass("sidebar-close")) {
        sidebar.removeClass("sidebar-close").addClass("sidebar-collapse");
        wrapper.removeClass("wrapper-max").removeClass("wrapper-collapse").addClass("wrapper-full");
        openCloseBtn.removeClass("zero-button").removeClass("close-button").addClass("open-button");
      } else if (sidebar.hasClass("sidebar-open")) {
        sidebar.removeClass("sidebar-open").addClass("sidebar-collapse");
        wrapper.removeClass("wrapper-max").removeClass("wrapper-collapse").addClass("wrapper-full");
        openCloseBtn.removeClass("zero-button").removeClass("close-button").addClass("open-button");
      }
      else if (sidebar.hasClass("sidebar-open-sm")) {
        sidebar.removeClass("sidebar-open-sm").addClass("sidebar-open");
        wrapper.removeClass("wrapper-max").removeClass("wrapper-full").addClass("wrapper-collapse");
        openCloseBtn.removeClass("zero-button").removeClass("open-button").addClass("close-button");
      }
    }

    if (width > 800) {
      if (!sidebar.hasClass("collapsed")) {
        sidebar.removeClass("sidebar-collapse").removeClass("sidebar-close").addClass("sidebar-open");
        wrapper.removeClass("wrapper-full").removeClass("wrapper-max").addClass("wrapper-collapse");
        openCloseBtn.removeClass("open-button").removeClass("zero-button").addClass("close-button");
      }
    }
  });

  sidebar.on("mouseenter", function () {
    if ($(this).hasClass("sidebar-collapse")) {
      $(this).removeClass("sidebar-collapse").addClass("sidebar-open hovered");
      wrapper.removeClass("wrapper-full").addClass("wrapper-collapse");
    }
  });

  sidebar.on("mouseleave", function () {
    for (let i = 0; i < submenus.length; i++) {
      let submenu = submenus[i];

      if ($(submenu).hasClass("submenu-open") && $(this).hasClass("hovered"))
        $(submenu).removeClass("submenu-open").addClass("submenu-close");
    }

    if ($(this).hasClass("sidebar-open hovered")) {
      $(this).removeClass("sidebar-open hovered").addClass("sidebar-collapse");
      wrapper.removeClass("wrapper-collapse").addClass("wrapper-full");
    }
  });

  openCloseBtn.on("click", function () {
    removeHoverEffectFromToggle();
    if (sidebar.hasClass("sidebar-close")) {

      $(".overlay-div").on("click", function () {
        if (sidebar.hasClass("sidebar-open-sm")) {
          $("body").removeClass("stop-scrolling");
          $(".overlay-div").removeClass("overlay");
          sidebar.removeClass("sidebar-open-sm").addClass("sidebar-close");
          openCloseBtn.removeClass("close-button").addClass("zero-button");
        }
      })

      $("body").addClass("stop-scrolling");
      $(".overlay-div").addClass("overlay");
      sidebar.toggleClass("sidebar-close sidebar-open-sm");
      $(this).toggleClass("zero-button close-button");
    }
    else if (sidebar.hasClass("sidebar-open-sm") && wrapper.hasClass("wrapper-max")) {
      for (let i = 0; i < submenus.length; i++) {
        let submenu = submenus[i];

        if ($(submenu).hasClass("submenu-open"))
          $(submenu).removeClass("submenu-open").addClass("submenu-close");
      }

      $("body").removeClass("stop-scrolling");
      $(".overlay-div").removeClass("overlay");
      sidebar.toggleClass("sidebar-close sidebar-open-sm");
      $(this).toggleClass("zero-button close-button");
    }
    else if (
      sidebar.hasClass("sidebar-collapse") &&
      wrapper.hasClass("wrapper-full")) {
      if (sidebar.hasClass("collapsed"))
        sidebar.removeClass("collapsed");

      sidebar.toggleClass("sidebar-collapse sidebar-open");
      wrapper.toggleClass("wrapper-full wrapper-collapse");
      $(this).toggleClass("open-button close-button");
    } else if (
      sidebar.hasClass("sidebar-open") &&
      wrapper.hasClass("wrapper-collapse")
    ) {
      for (let i = 0; i < submenus.length; i++) {
        let submenu = submenus[i];

        if ($(submenu).hasClass("submenu-open"))
          $(submenu).removeClass("submenu-open").addClass("submenu-close");
      }

      sidebar.addClass("collapsed");
      sidebar.toggleClass("sidebar-open sidebar-collapse");
      wrapper.toggleClass("wrapper-collapse wrapper-full");
      $(this).toggleClass("close-button open-button");
    }
  });

  openCloseBtn.on('mouseenter', setHoverEffectOnToggle);

  openCloseBtn.on('mouseleave', removeHoverEffectFromToggle);

  openCloseBtn.on('touchstart', setHoverEffectOnToggle);

  openCloseBtn.on('touchmove', removeHoverEffectFromToggle);

  var bodyBackgroundColor = $("body").css("background-color");
  function setHoverEffectOnToggle() {
    if (bodyBackgroundColor === 'rgb(255, 255, 255)') {
      openCloseBtn.css({ 'background-color': '#333', 'color': '#fff', 'padding-left': '30px' });
    } else {
      openCloseBtn.css({ 'background-color': '#fff', 'color': '#333', 'padding-left': '30px' });
    }
  }

  function removeHoverEffectFromToggle() {
    if (bodyBackgroundColor === 'rgb(255, 255, 255)') {
      openCloseBtn.css({ 'background-color': '#fff', 'color': '#333', 'padding-left': '20px' });
    } else {
      openCloseBtn.css({ 'background-color': '#333', 'color': '#fff', 'padding-left': '20px' });
    }
  }

  

  // Open/Close Submenu on Sidebar
  let openSubmenuIcons = $(".has-submenu .sidebar-link");

  for (let i = 0; i < openSubmenuIcons.length; i++) {
    let icon = openSubmenuIcons[i];

    $(icon).on("click", function () {
      let listItem = $(this).parent();
      listItem = listItem[0];

      if ($(listItem).hasClass("has-submenu")) {
        $(listItem).toggleClass("submenu-close submenu-open", 100, "easeOutSine");
      }
    });
  }


  // Horizontal Scroll Bar on Table
  (function ($) {
    $.fn.hasScrollBar = function () {
      var e = this.get(0);
      return {
        vertical: e.scrollHeight > e.clientHeight,
        horizontal: e.scrollWidth > e.clientWidth,
      };
    };
  })(jQuery);

  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf("/") + 1);

  let scrollBarExists = function () {
    if (filename === "transactions" || filename === "users") {
      if ($(".custom-table").hasScrollBar().horizontal === true) {
        $(".custom-table").mousewheel(function (event, delta) {
          this.scrollLeft -= delta * 10;

          event.preventDefault();
        });
      } else return false;
    }
  };

  setInterval(scrollBarExists, 500);

  let scrollBarExistsLogo = function () {
    if (
      filename === "users" ||
      filename === "admin-applications" ||
      filename === "subscriptions"
    ) {
      if ($(".logotypes-outer").hasScrollBar().horizontal === true) {
        $(".logotypes-outer").mousewheel(function (event, delta) {
          this.scrollLeft -= delta * 10;

          event.preventDefault();

          let leftPointer = $(".left-pointer");
          let rightPointer = $(".right-pointer");

          let $this = $(this),
            scrollPercentage =
              (100 * $this.scrollLeft()) /
              ($(".logotypes").width() - $this.width());

          let scroll = scrollPercentage.toFixed(2);
        });
      } else return false;
    }
  };

  $('.right-pointer').click(function(event) {
    event.preventDefault();
    $('.logotypes-outer').animate({
      scrollLeft: "+=300px"
    }, "slow");
  });
  $('.left-pointer').click(function(event) {
    event.preventDefault();
    $('.logotypes-outer').animate({
      scrollLeft: "-=300px"
    }, "slow");
  });

  setInterval(scrollBarExistsLogo, 500);

  // Select Fields
  tail.select(".select-user", {
    search: true,
    searchFocus: true,
    height: 200,
    deselect: true,
    placeholder: language('packages', 'select-user'),
    animate: true,
    sortItems: "ASC",
  });

  tail.select(".select-package", {
    height: 200,
    deselect: true,
    placeholder: language('packages', 'select-package'),
    animate: true,
    openAbove: true,
  });

  tail.select(".change-package", {
    height: 200,
    placeholder: language('packages', 'select-package'),
    descriptions: true,
    animate: true,
  });

  tail.select(".select-payment", {
    height: 200,
    deselect: true,
    placeholder: language('packages', 'select-payment'),
    animate: true,
    openAbove: true,
    sortItems: "ASC",
  });

  tail.select(".select-amount", {
    height: 200,
    deselect: true,
    placeholder: language('packages', 'select-amount'),
    animate: true,
    openAbove: true,
  });

  tail.select(".select-status", {
    height: 200,
    deselect: true,
    placeholder: language('packages', 'select-status'),
    animate: true,
    openAbove: true,
    sortItems: "ASC",
  });

  tail.select(".admin-transactions", {
    height: 200,
    animate: true,
    openAbove: true,
    placeholder: language('packages', 'select-payment'),
    sortItems: "ASC",
  });

  tail.select(".select-user-admin", {
    search: true,
    searchFocus: true,
    height: 200,
    deselect: true,
    placeholder: language('packages', 'select-user'),
    animate: true,
    sortItems: "ASC",
  });

  tail.select(".package-type", {
    height: 200,
    deselect: true,
    placeholder: language('packages', 'choose-type'),
    animate: true,
  });

  tail.select(".edit-package-type", {
    height: 200,
    animate: true,
  });

  tail.select("#country-code", {
    search: true,
    searchFocus: true,
    height: 300,
    openAbove: true,
    deselect: true,
    placeholder: language('packages', 'select-user'),
    animate: true,
    sortItems: "ASC",
  });

  let packageSelect = $(
    ".admin-page .new-package .form .input-group .tail-select .select-label .label-inner"
  );
  if (getCookie("themeMode") == 1)
    $(packageSelect[0]).css("color", "rgba(258, 258, 258, 0.7)");
  else $(packageSelect[0]).css("color", "rgba(51, 51, 51, 0.7)");

  // Date Range Picker
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#reportrange span").html(
      start.format("D.M.YYYY") + " - " + end.format("D.M.YYYY")
    );
    $("#reportrange .date-select").html(
      "<option selected='selected'>" + start.format("D.M.YYYY") + " - " + end.format("D.M.YYYY") + "</option>"
    ).trigger("change");
  }

  if(getCookie('lang') == 'bs'){

    $("#reportrange").daterangepicker(
      {
        showCustomRangeLabel: true,
        customRangeLabel: "Odaberi datum ručno",
        startDate: start,
        endDate: end,
        applyButtonClasses: "btn-apply",
        cancelButtonClasses: "btn-cancel",
        ranges: {
          "Danas" : [moment(), moment()],
          "Jučer" : [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Prethodnih 7 dana" : [moment().subtract(6, "days"), moment()],
          "Prethodnih 30 dana" : [moment().subtract(29, "days"), moment()],
          "Ovaj mjesec" : [moment().startOf("month"), moment().endOf("month")],
          "Prošli mjesec": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

  }else{

    $("#reportrange").daterangepicker(
      {
        showCustomRangeLabel: true,
        customRangeLabel: "Find a custom date",
        startDate: start,
        endDate: end,
        applyButtonClasses: "btn-apply",
        cancelButtonClasses: "btn-cancel",
        ranges: {
          "Today" : [moment(), moment()],
          "Yesterday" : [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days" : [moment().subtract(29, "days"), moment()],
          "This Month" : [moment().startOf("month"), moment().endOf("month")],
          "Last Month" : [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

  }


  cb(start, end);

  //Confirmation Modal actions


  // For Deactivation
  $(document).on('click', '.deactivate-modal', function () {
    $(".confirmation-modal").plainModal("close", { duration: 500 });
    $(".confirmation-modal").css("display", "none");
  });


  // For Activation

  /*
    $(document).on('click', '.activate-modal', function () {
      let activateBtn = $(this);
      let btnId = $(activateBtn).attr("id");
      console.log(btnId);
  
      $("#modal" + btnId).plainModal("open", { duration: 500 });
      $("#modal" + btnId).css("display", "flex");
    });
  */





  $(document).on("click", ".change-modal-btn", function () {
    let btnId = $(this).attr("id");
    console.log(btnId);
    let phone = $("#phone");
    if (phone.hasClass("changed")) {
      $("#password_conf").addClass("d-none");
      $("#edit-modal" + btnId).plainModal("open", { duration: 500 });
      $("#edit-modal" + btnId).css("display", "flex");
    } else {
      $("#edit-modal" + btnId).plainModal("open", { duration: 500 });
      $("#edit-modal" + btnId).css("display", "flex");
    }
  });

  $(document).on('click', '.close-modal', function () {
    $(".confirmation-modal").plainModal("close", { duration: 500 });
    $(".confirmation-modal").css("display", "none");
    $(".confirmation-modal").text("");
  });

  $(".confirmation-modal").plainModal("close");

  // Logotypes actions
  let logotypesActions = $(
    ".admin-page .applications .applications-wrapper .logotypes-outer .logotypes .logotype .action"
  ).hide();





  $(document).on("click", ".imgLogotype", function () {
    let action = $(this).siblings("div");
    action.text("");


    if ($(this).siblings("div").css("display") == "none") {
      let appId = $(this).attr('id');
      let userId = $('.select-user-admin option:selected').attr('id');
      let userName = $('.select-user-admin option:selected').text();
      let projectName = $(this).attr('alt');
      //CHECK IF USER HAS A PACKAGE FOR THIS APP
      $.ajax({
        type: 'post',
        url: './includes/users.php',
        dataType: 'json',
        data: {
          "appId": appId,
          "userId": userId,
          "check-for-user-packages": ""
        }
      }).done(function (data) {
        let reactivate = false;
        $.each(data, function (i) {
          //console.log(data[i]['status']);
          if (data[i]['status'] == '2') {
            reactivate = true;
          }
        })
        if (data.length <= 0 || reactivate == false) {
          let activateAction = '<button class="btn edit-package-modal activate-modal" value="' + appId + ',' + sanitizeHTML(projectName) + ',' + userId + '">'+language('admin-apps', 'btn-activate')+' <i class="fas fa-arrow-right"></i></button>';
          $(action).append(activateAction);
        } else {
          let activateAction = '<button class="btn deactivate-package-modal activate-modal" value="' + appId + ',' + userId + '">'+language('admin-apps', 'btn-deactivate')+' <i class="fas fa-arrow-right"></i></button>';
          $(action).append(activateAction);
        }
      })

      $(this).siblings("div").slideToggle({ duration: 200 });
    } else {
      $(this).siblings("div").hide();
    }

  });


  // Add new Application Image Input File
  let labelInput = $("#labelInput");
  let hiddenFile = $("#hiddenFile");

  $(labelInput).click(function () {
    $(hiddenFile).trigger("click");
  });

  $(hiddenFile).on("change", function () {
    let inputValue = $(this).val();
    let imgName = inputValue.substring(inputValue.lastIndexOf("\\") + 1);
    $(labelInput).val(imgName);
  });

  // Edit Application Image Input File
  let editLabelInput = $("#editLabelInput");
  let editHiddenFile = $("#editHiddenFile");

  $(editLabelInput).click(function () {
    $(editHiddenFile).trigger("click");
  });

  $(editHiddenFile).on("change", function () {
    let inputValue = $(this).val();
    let imgName = inputValue.substring(inputValue.lastIndexOf("\\") + 1);
    $(editLabelInput).val(imgName);
  });

  // Edit Application Active Div
  let appInfo = $(".admin-page .edit-application .app-info");



  $(document).on("click", ".adminEditApp", function () {
    $('.save-edit-modal').attr('disabled', 'disabled');
    let getName = $(this).find("h6");
    let name = getName.text();
    let getDesc = $(this).find("h5");
    let desc = getDesc.text();
    let getId = $(this).find("h4");
    let id = getId.text();
    let getUrl = $(this).find("h3");
    let url = getUrl.text();
    let statusNumber = $(this).find(".appStatusNumber").text();
    let getStatus = $(this).find("p");
    let status = getStatus.text();
    let img = $(this).find("img");
    let imgSrc = img.attr("src");
    let imgName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);

    let appLogo = $(
      ".admin-page .edit-application .app-info .app-logotype img"
    );
    let appImgSrc = $(appLogo[0]).attr("src");
    let appStatus = $(
      ".admin-page .edit-application .app-info .app-basic #appStatus"
    );
    let appName = $(
      ".admin-page .edit-application .app-info .app-basic #editAppName"
    );
    let appImgName = $(
      ".admin-page .edit-application .app-info .app-basic #editLabelInput"
    );
    let appImgFile = $(
      ".admin-page .edit-application .app-info .app-basic #editHiddenFile"
    );
    let appDesc = $(
      ".admin-page .edit-application .app-info .app-basic #editAppDesc"
    );
    let appId = $(
      ".admin-page .edit-application .app-info .app-basic .editId"
    );
    let appUrl = $(
      ".admin-page .edit-application .app-info .app-basic #editAppUrl"
    );
    if (statusNumber == '0') {
      $('.activate-app-modal').show();
      $('.deactivate-app-modal').hide();
    } else if (statusNumber == '2') {
      $('.activate-app-modal').show();
      $('.deactivate-app-modal').hide();
      $('.maintenance-app-modal').hide();
    } else {
      $('.activate-app-modal').hide();
      $('.deactivate-app-modal').show();
    }
    $(appLogo).attr("src", imgSrc);
    $(appStatus).val(status);
    $(appName).val(name);
    $(appImgName).val(imgName);
    $(appDesc).val(desc);
    $(appId).text(id);
    $(appUrl).val(url);

    if (imgSrc === appImgSrc) {
      $(appInfo).slideToggle("500", "swing");
    } else {
      $(appInfo).show("slow");
    }
  });

  $(appInfo).hide();

  // Packages Page
  let chooseAppBtns = $(".admin-page .choose-application .applications-wrapper img");
  let newPackage = $(".new-package");
  let editPackage = $(".edit-package");

  for (let i = 0; i < chooseAppBtns.length; i++) {
    $(chooseAppBtns[i]).on("click", function () {
      let choosenAppId = $(this).siblings("#appId").text();
      //console.log(choosenAppId);
      let trigger = $(".trigger");
      let triggerId = $(trigger).attr("id");
      $(trigger).attr("id", choosenAppId);


      $.ajax({
        type: 'post',
        url: './includes/packages.php',
        data: {
          "get-packages": "",
          "app-id": choosenAppId
        },
        success: function (response) {
          let arr = JSON.parse(response);
          console.log(arr);

          let editPackagesRow = '';

          if (arr.length > 0) {
            $(".edit-package").remove() //REMOVE IF FOUND

            $.each(arr, function (i) {
              if (arr[i]["status"] == '2') {
              editPackagesRow += '<section class="edit-package" id="editProduct' + arr[i]["proj_prod_id"] + '">'
              editPackagesRow += '<h5>'+language('packages', 'edit')+'</h5>'

              editPackagesRow += '<div class="form">'
              editPackagesRow += '<div class="input-group-wrapper">'
              editPackagesRow += '<div class="input-group">'
              editPackagesRow += '<label for="packageTitle">'+language('packages', 'title')+'</label>'
              editPackagesRow += '<input type="text"  class="form-control mx-sm-3 editPackageTitle" value="' + sanitizeHTML(arr[i]["product_name"]) + '">'
              editPackagesRow += '</div>'
              editPackagesRow += '<!--Msg for Package Title input-->'
              editPackagesRow += '<span class="msg packageTitleMsg invalid"></span>'
              editPackagesRow += '</div>'

              editPackagesRow += '<div class="input-group-wrapper">'
              editPackagesRow += '<div class="input-group description">'
              editPackagesRow += '<label for="packageDesc">'+language('packages', 'description')+'</label>'
              editPackagesRow += '<textarea class="form-control mx-sm-3 editPackageDesc" rows="3">' + sanitizeHTML(arr[i]["product_desc"]) + '</textarea>'
              editPackagesRow += '</div>'
              editPackagesRow += '<!--Msg for Package Description input-->'
              editPackagesRow += '<span class="msg packageDescMsg invalid"></span>'
              editPackagesRow += '</div>'

              editPackagesRow += '<div class="input-group-wrapper">'
              editPackagesRow += '<div class="input-group">'
              editPackagesRow += '<label for="packageType">'+language('packages', 'type')+'</label>'
              editPackagesRow += '<select class="form-control edit-package-type">'
              if (arr[i]["type"] == 1) {
                editPackagesRow += '<option value="1" selected>'+language('packages', 'monthly')+'</option>'
                editPackagesRow += '<option value="3">'+language('packages', 'yearly')+'</option>'
                editPackagesRow += '<option value="2">'+language('packages', 'half-a-year')+'</option>'
              } else if (arr[i]["type"] == 2) {
                editPackagesRow += '<option value="3" selected>'+language('packages', 'yearly')+'</option>'
                editPackagesRow += '<option value="1">'+language('packages', 'monthly')+'</option>'
                editPackagesRow += '<option value="2">'+language('packages', 'half-a-year')+'</option>'
              } else {
                editPackagesRow += '<option value="2" selected>'+language('packages', 'half-a-year')+'</option>'
                editPackagesRow += '<option value="1">'+language('packages', 'monthly')+'</option>'
                editPackagesRow += '<option value="3">'+language('packages', 'yearly')+'</option>'
              }
              editPackagesRow += '</select>'
              editPackagesRow += '</div>'
              editPackagesRow += '<!--Msg for Package Type input-->'
              editPackagesRow += '<span class="msg packageTypeMsg invalid"></span>'
              editPackagesRow += '</div>'

              editPackagesRow += '<div class="input-group-wrapper">'
              editPackagesRow += '<div class="input-group">'
              editPackagesRow += '<label for="packagePice">'+language('packages', 'price')+'</label>'
              editPackagesRow += '<input type="text" class="form-control mx-sm-3 editPackagePice" value="' + arr[i]["price"] + '">'
              editPackagesRow += '</div>'
              editPackagesRow += '<!--Msg for URL Address input-->'
              editPackagesRow += '<span class="msg packagePiceMsg invalid"></span>'
              editPackagesRow += '</div>'

              editPackagesRow += '<div class="edit-package-buttons"><button class="btn btn-save activate-modal" id="' + arr[i]["proj_prod_id"] + '">'+language('packages', 'save')+' <i class="fas fa-save"></i></button>'
              editPackagesRow += '<button class="btn delete-package-modal activate-modal" value="' + arr[i]["proj_prod_id"] + ',' + arr[i]["project_id"] + '">'+language('packages', 'delete')+' <i class="fas fa-save"></i></button></div>'
              editPackagesRow += '</div>'
              editPackagesRow += '</section>';
            }
            });//END EACH
            $(".admin-page").append(editPackagesRow); //APPEND TO ADMIN PAGE
          } else {
            $(".edit-package").remove()
          }

        }
      })

      if (triggerId !== choosenAppId) {
        $(newPackage).slideDown("500");
        $(editPackage).slideDown("500");
      } else {
        $(newPackage).slideToggle("500");
        $(editPackage).slideToggle("500");
      }
    });
  }
  $(newPackage).hide();
  $(editPackage).hide();

  // $("#country-code").on("change", function () {
  //   $("#number").val($(this).val());
  // });

  // $("#country-code").change();
  
  //prestalo da radi, iz nekog razloga... nova funkcija ispod: 

  $('.drp-buttons button').text(language('transactions', 'cancel'));
  $('.drp-buttons button:last-child').text(language('transactions', 'apply'));
  $('.ranges ul li:last-child').text(language('transactions', 'custom'));
  $('.search-input').attr("placeholder", language('packages', 'select-user-search'));


  function getOptVal(){
    let opt = document.getElementById("country-code");
    let optValue = opt.options[opt.selectedIndex].value;
    
    document.getElementById("number").value= optValue;
  }
  
  $(document).on('keydown', function (e) {
    if (e.keyCode == 8 && $('#number').is(":focus") && $('#number').val().length <= $("#country-code :selected").val().length) {
      e.preventDefault();
    }
  });
  
  
  

});



//RESEND CODE VIA SMS/EMAIL
let counter;
let count;
let timer = document.getElementById("timer");

let cookie_timer = Cookies.get('timer');

  if(cookie_timer != null){
    disable_enable_timer_cookie();
  }

function resend_code(data){
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "./includes/resend_code.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(data); 
  disable_enable_timer();
}

function disable_enable_timer(){ //klik, 1. korak
  count =121;
  counter =setInterval(timer_func, 1000);

  //document.getElementById("resend").disabled = true;
  document.getElementById("resend_email").disabled = true;

  setTimeout(function() {
    //document.getElementById("resend").disabled = false;
    document.getElementById("resend_email").disabled = false;
    Cookies.remove('timer');
  }, 120000);
  timer_func();
}

function disable_enable_timer_cookie(){ //klik, 1. korak
  try
  {
    count = Cookies.get('timer');
    counter =setInterval(timer_func, 1000);

    //document.getElementById("resend").disabled = true;
    document.getElementById("resend_email").disabled = true;

    setTimeout(function() {
      //document.getElementById("resend").disabled = false;
      document.getElementById("resend_email").disabled = false;
      Cookies.remove('timer');
    }, count*1000);
    timer_func();
  }
  catch(err){
  } 
}

function timer_func()
{
  try
  {
    count=count-1;
    if(count <= 0){
        Cookies.remove('timer');
        clearInterval(counter);
        timer.style.visibility = "hidden";
    }else if(count > 0){
      timer.style.visibility = "visible";
      timer.style.color = "red";
      timer.style.textAlign = "center";
    }
    timer.innerHTML= language('confirmation', 'err-mess1') + count + language('confirmation', 'err-mess2'); 
    Cookies.set('timer', count);
  }catch(err){
  }
}
//END RESEND CODE VIA SMS/EMAIL 

//RESEND CONFIRMATION MAIL 
let counter_conf;
let count_conf;
let timer_conf = document.getElementById("timer_conf");
let cookie_timer_conf = Cookies.get('timer_conf');

if(cookie_timer_conf != null){
disable_enable_timer_cookie_conf();
}

function resend_confirmation(data){
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("POST", "./includes/resend_code.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send(data); 
disable_enable_timer_conf();
}

function disable_enable_timer_conf(){ //klik, 1. korak
count_conf =121;
counter_conf =setInterval(timer_func_conf, 1000);

//document.getElementById("resend").disabled = true;
document.getElementById("resend_confirmation").disabled = true;

setTimeout(function() {
  //document.getElementById("resend").disabled = false;
  document.getElementById("resend_confirmation").disabled = false;
  Cookies.remove('timer_conf');
}, 120000);
timer_func_conf();
}

function disable_enable_timer_cookie_conf(){ //klik, 1. korak
try
{
  count_conf = Cookies.get('timer_conf');
  counter_conf =setInterval(timer_func_conf, 1000);

  //document.getElementById("resend").disabled = true;
  document.getElementById("resend_confirmation").disabled = true;

  setTimeout(function() {
    //document.getElementById("resend").disabled = false;
    document.getElementById("resend_confirmation").disabled = false;
    Cookies.remove('timer_conf');
  }, count_conf*1000);
  timer_func_conf();
}
catch(err){
} 
}

function timer_func_conf()
{
try
{
  count_conf=count_conf-1;
  if(count_conf <= 0){
      Cookies.remove('timer_conf');
      clearInterval(counter_conf);
      timer_conf.style.visibility = "hidden";
  }else if(count_conf > 0){
    timer_conf.style.visibility = "visible";
    timer_conf.style.color = "red";
    timer_conf.style.textAlign = "center";
  }
  timer_conf.innerHTML= language('confirmation', 'err-mess') + count_conf + language('confirmation', 'err-mess2'); 
  Cookies.set('timer_conf', count_conf);
}catch(err){
}
}
//END RESEND CONFIRMATION 





//LANGUAGES
// change language

// **
//  * get data from server
//  * @param {string} url
//  * @returns array json
//  */
async function getData(url) {
const response = await fetch(url, {
method: 'GET',
});
return response.json();
}

let chooseLanguage = document.querySelector('.choose-language');
let languagesContainer = document.querySelector('.index-navigation__languages');
let languagesOptions = document.querySelectorAll('.languages-options');
let defaultLanguage = 'default';
let languagesFolder = 'https://admin.lab387.com/languages/';

// event listener za language dropdown
chooseLanguage.addEventListener('click', () => {
    languagesContainer.classList.toggle('active');
})

/* when user visits our site for first time or deletes cookies
set cookie to default language */
if (!localStorage.getItem('language') || !getCookie('lang')) {
    storeLanguageInCookie(defaultLanguage);
}

/* change language on click */
for(let languagesOption of languagesOptions) {
    languagesOption.addEventListener('click', () => {
        storeLanguageInCookie(languagesOption.getAttribute('data-id'));
    })
}


/**
 * get json file from content and storing choosen language in cookie
 */
function storeLanguageInCookie(value) {
    setCookie('lang', value, 30);
    setCookie('json_hash', 'language', 30);
    getData(languagesFolder + value + "-language.json")
        .then(jsonFile => {
            localStorage.setItem('language', JSON.stringify(jsonFile));
        })
        .then(() => window.location.reload())
        .catch(err => {

        })
}

/* if is set hash cookie check for changes in json file */
if (getCookie('json_hash')) {
    checkJSONFileChange();
    setInterval(() => checkJSONFileChange(), 600000);
}

/* check if JSON language file has changed */
function checkJSONFileChange() {
    let currentLanguage = getCookie('lang');
    getData(languagesFolder + currentLanguage + "-language.json?v=" + Date.now())
        .then(jsonFile => {
            if (localStorage.getItem('language') != JSON.stringify(jsonFile)) {
                uploadNewJsonFile(currentLanguage);
            }
        });
}

/* upload updated json file to cookie */
function uploadNewJsonFile(value) {
    getData(languagesFolder + value + "-language.json?v=" + Date.now())
        .then(jsonFile => {
            localStorage.setItem('language', JSON.stringify(jsonFile));
        })
        // .then(() => window.location.reload())
        .catch(err => {

        })
}


function language(section, key) {
  try
  {
    var json = JSON.parse(localStorage.getItem("language"));
    return json[section][key];
  }catch(err)
  {
  }
}

