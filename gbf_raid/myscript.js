// to do
console.log("CHECK SCRIPT");

var triggers = [
  { percent: 50, name: "A trigger", triggered: false },
  { percent: 25, name: "A trigger", triggered: false }
];

var curr_trigger = 0;

var done = false;
// the plan

// have one icon button where some text is that gives all trigger infos

// set interval to make request for boss hp

// get % and if fails to a certain threshold give warning for incoming trigger
if (document.title.indexOf("Granblue Fantasy") != -1) {
  $(document).ready(function() {
    console.log("JQUERY LOADED");
    $("#wrapper .contents");
  });
  window.setTimeout(init, 4000);
  console.log(
    $(
      "#wrapper > div.contents > div.cnt-raid > div.cnt-raid-stage > div.prt-targeting-area > div.prt-gauge-area"
    )
  );
  //get initial information
  function init() {
    var selected = $(
      "#wrapper > div.contents > div.cnt-raid > div.cnt-raid-stage > div.prt-targeting-area"
    );
    selected.append(button);
    $("#info-button").click(() => {
      $("body").css("opacity", "0.7");
    });
    const name = $(
      "#wrapper > div.contents > div.cnt-raid > div.cnt-raid-stage > div.prt-targeting-area > div.prt-stage-area > a.btn-targeting.enemy-1.invisible > div.enemy-info > div.name"
    );
    const percent = $("#enemy-hp0");
    console.log(name.text());
    console.log(percent.text());
    $("#close-button").click(() => $("body").css("opacity", "1"));
    $("#list-content").append(ubaha);
    $("#title").append("Ultimate Bahamut");
    window.setInterval(update, 1000);
  }
  //every second get the latest health
  function update() {
    const name = $(
      "#wrapper > div.contents > div.cnt-raid > div.cnt-raid-stage > div.prt-targeting-area > div.prt-stage-area > a.btn-targeting.enemy-1.invisible > div.enemy-info > div.name"
    );
    const percent = $("#enemy-hp0");
    if (name.text() != "" && $("#list-content").children().length == 0) {
      console.log($("#title"));
      $("#title").append("Ultimate Bahamut");
    }
    if (
      parseInt(percent.text()) <= triggers[curr_trigger].percent + 5 &&
      !done &&
      percent.text() != "0"
    ) {
      const warning_text = $(
        "#wrapper > div.contents > div.cnt-raid > div.cnt-raid-stage > div.prt-targeting-area"
      );
      if (curr_trigger < triggers.length - 1) {
        console.log(curr_trigger);
        if (parseInt(percent.text()) >= triggers[curr_trigger + 1].percent) {
          console.log("ABOUT TO WARN");
          // if its not the last one check if in between triggers
          $(
            '<p  class="lead" style = "font-family:"Roboto";color:red;margin-left:150px" id = "warning-text">INCOMING TRIGGER</p>'
          )
            .appendTo(warning_text)
            .fadeOut(8000);
        }
        curr_trigger++;
      } else {
        $(
          '<p  class="lead" style = "font-family:"Roboto;color:red;margin-left:150px" id = "warning-text">INCOMING TRIGGER</p>'
        )
          .appendTo(warning_text)
          .fadeOut(8000);
        done = true;
      }
    }
  }
}
