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
	total = 0,
	msg;

function format_time(seconds) {
  var M = Math.floor(seconds / 60);
  var S = seconds % 60;
  return M + ":" + (S < 10 ? "0" : "") + S;
}

function total_msg(s) {
  return "Total: " + format_time(s);
}

function update() {
  if (time == 0) {
      if (index < program.length) {
          time = program[index]["duration"];
          msg = program[index]["msg"];
          index += 1;
          document.getElementById("msg").innerHTML = msg;
          document.getElementById("countdown").innerHTML = format_time(time);
          document.getElementById("countup").innerHTML = total_msg(total)
          window.setTimeout(update, 1000);
    }
  } else {
     time -= 1
     total += 1
     document.getElementById("countdown").innerHTML = format_time(time)
     document.getElementById("countup").innerHTML = total_msg(total)
     window.setTimeout(update, 1000)
  }
}

$("#start").click(function() {
	// window.setTimeout(update, 100);
	update();
});
