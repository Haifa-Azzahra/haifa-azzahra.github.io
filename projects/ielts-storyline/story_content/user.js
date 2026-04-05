function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YoVTVkdIhB":
        Script1();
        break;
      case "5jTjwvA0M8U":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var data = {
  learner_name: player.GetVar("learner_name"),
  current_band_score: player.GetVar("current_band_score"),
  target_band_score: player.GetVar("target_band_score"),
  session_count: player.GetVar("session_count"),

  task_type: player.GetVar("task_type"),
  criterion_focus: player.GetVar("criterion_focus"),
  smart_goal_action: player.GetVar("smart_goal_action"),
  smart_goal_method: player.GetVar("smart_goal_method"),
  smart_goal_weeks: player.GetVar("smart_goal_weeks"),
  motivation_why: player.GetVar("motivation_why"),
  self_efficacy: player.GetVar("self_efficacy"),
  outcome_expect: player.GetVar("outcome_expect"),
  anxiety_named: player.GetVar("anxiety_named"),
  struggle_reframe: player.GetVar("struggle_reframe"),

  gap_identified: player.GetVar("gap_identified"),
  strategy_review: player.GetVar("strategy_review"),
  strategy_refinement: player.GetVar("strategy_refinement"),
  strategy_impact: player.GetVar("strategy_impact"),
  strategy_realigned: player.GetVar("strategy_realigned"),

  improvement_attribution: player.GetVar("improvement_attribution"),
  difficulty_attribution: player.GetVar("difficulty_attribution"),
  new_criterion_focus: player.GetVar("new_criterion_focus"),
  new_intention: player.GetVar("new_intention"),
  new_practice_action: player.GetVar("new_practice_action"),
  new_practice_strategy: player.GetVar("new_practice_strategy"),
  new_practice_condition: player.GetVar("new_practice_condition"),
  new_practice_time: player.GetVar("new_practice_time")
};

fetch("https://script.google.com/macros/s/AKfycbxDbpb2y8wn1ssebSyDdebCkK2NlFR7zNQC8hLY3A6lB6lpDb2_5AtfM62qYQWORgw2Qg/exec", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  },
  body: JSON.stringify(data)
})
.then(response => response.text())
.then(text => {
  alert("SUCCESS: " + text);
})
.catch(error => {
  alert("ERROR: " + error);
});
}

function Script2()
{
  var player = GetPlayer();

var data = {
  learner_name: player.GetVar("learner_name"),
  current_band_score: player.GetVar("current_band_score"),
  target_band_score: player.GetVar("target_band_score"),
  session_count: player.GetVar("session_count"),

  task_type: player.GetVar("task_type"),
  criterion_focus: player.GetVar("criterion_focus"),
  smart_goal_action: player.GetVar("smart_goal_action"),
  smart_goal_method: player.GetVar("smart_goal_method"),
  smart_goal_weeks: player.GetVar("smart_goal_weeks"),
  motivation_why: player.GetVar("motivation_why"),
  self_efficacy: player.GetVar("self_efficacy"),
  outcome_expect: player.GetVar("outcome_expect"),
  anxiety_named: player.GetVar("anxiety_named"),
  struggle_reframe: player.GetVar("struggle_reframe"),

  gap_identified: player.GetVar("gap_identified"),
  strategy_review: player.GetVar("strategy_review"),
  strategy_refinement: player.GetVar("strategy_refinement"),
  strategy_impact: player.GetVar("strategy_impact"),
  strategy_realigned: player.GetVar("strategy_realigned"),

  improvement_attribution: player.GetVar("improvement_attribution"),
  difficulty_attribution: player.GetVar("difficulty_attribution"),
  new_criterion_focus: player.GetVar("new_criterion_focus"),
  new_intention: player.GetVar("new_intention"),
  new_practice_action: player.GetVar("new_practice_action"),
  new_practice_strategy: player.GetVar("new_practice_strategy"),
  new_practice_condition: player.GetVar("new_practice_condition"),
  new_practice_time: player.GetVar("new_practice_time")
};

fetch("https://script.google.com/macros/s/AKfycbxDbpb2y8wn1ssebSyDdebCkK2NlFR7zNQC8hLY3A6lB6lpDb2_5AtfM62qYQWORgw2Qg/exec", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  },
  body: JSON.stringify(data)
})
.then(response => response.text())
.then(text => {
  alert("SUCCESS: " + text);
})
.catch(error => {
  alert("ERROR: " + error);
});
}

