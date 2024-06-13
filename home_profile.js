var profileBtn = document.getElementById("profile");
var notificationBtn = document.getElementById("notification");
var allnotificationBtn = document.getElementById("all_notification");
var unreadBtn = document.getElementById("unread_notification");
var messengerBtn = document.getElementById("messenger");
var menuBtn = document.getElementById("menu");



var profilePopup = document.querySelector(".profile_popup");
var notificationPopup = document.querySelector(".popup_notification");
var unreadPopup = document.querySelector(".popup_unread");
var messengerPopup = document.querySelector(".popup_messenger");
var menuPopup = document.querySelector(".popup_menu");


function hideAllPopups() {
  profilePopup.classList.remove("profile_show");
  notificationPopup.classList.remove("notification_show");
  unreadPopup.classList.remove("unread_show");
  messengerPopup.classList.remove("messenger_show");
  menuPopup.classList.remove("menu_show");


}

if (profileBtn && profilePopup) {
  profileBtn.addEventListener("click", function () {
    if (profilePopup.classList.contains("profile_show")) {
      hideAllPopups();
    } else {
      hideAllPopups();
      profilePopup.classList.add("profile_show");
    }
  });
} else {
  console.error("All Profile element(s) not found:", {
    profileBtn,
    profilePopup,
  });
}

if (notificationBtn && notificationPopup) {
  notificationBtn.addEventListener("click", function () {
    if (
      notificationPopup.classList.contains("notification_show") ||
      unreadPopup.classList.contains("unread_show")
    ) {
      hideAllPopups();
    } else {
      hideAllPopups();
      notificationPopup.classList.add("notification_show");
    }
  });
} else {
  console.error("Notification element(s) not found:", {
    notificationBtn,
    notificationPopup,
  });
}

if (unreadBtn && unreadPopup) {
  unreadBtn.addEventListener("click", function () {
    hideAllPopups();
    unreadPopup.classList.add("unread_show");
  });
} else {
  console.error("Unread Notification element(s) not found:", {
    unreadBtn,
    unreadPopup,
  });
}

if (allnotificationBtn && notificationPopup) {
  allnotificationBtn.addEventListener("click", function () {
    if (notificationPopup.classList.contains("notification_show")) {
      hideAllPopups();
    } else {
      hideAllPopups();
      notificationPopup.classList.add("notification_show");
    }
  });
} else {
  console.error("All Notification element(s) not found:", {
    allnotificationBtn,
    notificationPopup,
  });
}

if (messengerBtn && messengerPopup) {
  messengerBtn.addEventListener("click", function () {
    if (messengerPopup.classList.contains("messenger_show")) {
      hideAllPopups();
    } else {
      hideAllPopups();
      messengerPopup.classList.add("messenger_show");
    }
  });
} else {
  console.error("All Messenger element(s) not found:", {
    messengerBtn,
    messengerPopup,
  });
}
if (menuBtn && menuPopup) {
  menuBtn.addEventListener("click", function () {
    if (menuPopup.classList.contains("menu_show")) {
      hideAllPopups();
    } else {
      hideAllPopups();
      menuPopup.classList.add("menu_show");
    }
  });
} else {
  console.error("All Menu element(s) not found:", {
    menuBtn,
    menuPopup,
  });
}
