var program = [
		{"duration": 5*60, "msg": "Warmup"},
		{"duration": 30, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 30, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 45, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 45, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 60, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 60, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 30, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 30, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 45, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 45, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 60, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 60, "msg": "Sprint"},
		{"duration": 60, "msg": "Recover"},
		{"duration": 3*60, "msg": "Cooldown"}
	],
	index = 0,
	time = 0,
	total = 0;

function format_time(seconds) {
  var M = Math.floor(seconds / 60);
  var S = seconds % 60;
  return M + ":" + (S < 10 ? "0" : "") + S;
}

function total_msg(s) {
  return "Total: " + format_time(s);
}

function display_time() {
  document.getElementById("countdown").innerHTML = format_time(time);
  document.getElementById("countup").innerHTML = total_msg(total);
  window.setTimeout(update, 1000);
}

function update() {
  if (index < program.length) {
    if (time == 0) {
      // When the timer counts down to 0, advance to the next
      // stage and update the msg
      time = program[index]["duration"];
      var msg = program[index]["msg"];
      index += 1;
      document.getElementById("msg").innerHTML = msg;
    } else {
      time -= 1;
      total += 1;
    }
    display_time();
  } else if (index == program.length && time > 0) {
    time -= 1;
    total += 1;
    display_time();
  } else {
    // TODO: End of routine message.
  }
}

$("#start").click(function() {
	// window.setTimeout(update, 100);
	update();
});
