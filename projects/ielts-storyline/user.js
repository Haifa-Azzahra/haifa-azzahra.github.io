function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nPzn1JihYU":
        Script1();
        break;
      case "5qxEiuEMeqI":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

// ── Read all Storyline variables ─────────────────────────────

var data = {

  // META
  learner_name:             player.GetVar("learner_name"),
  current_band_score:       player.GetVar("current_band_score"),
  target_band_score:        player.GetVar("target_band_score"), 
  session_count:            player.GetVar("session_count"),

  // FORETHOUGHT
  task_type:                player.GetVar("task_type"),
  criterion_focus:          player.GetVar("criterion_focus"),
  smart_goal_action:        player.GetVar("smart_goal_action"),
  smart_goal_method:        player.GetVar("smart_goal_method"),
  smart_goal_weeks:         player.GetVar("smart_goal_weeks"),
  motivation_why:           player.GetVar("motivation_why"),
  self_efficacy:            player.GetVar("self_efficacy"),
  outcome_expect:           player.GetVar("outcome_expect"),
  anxiety_named:            player.GetVar("anxiety_named"),
  struggle_reframe:         player.GetVar("struggle_reframe"),

  // PERFORMANCE
  gap_identified:           player.GetVar("gap_identified"),
  strategy_review:          player.GetVar("strategy_review"),
  strategy_refinement:      player.GetVar("strategy_refinement"),
  strategy_impact:          player.GetVar("strategy_impact"),
  strategy_realigned:       player.GetVar("strategy_realigned"),

  // REFLECTION
  improvement_attribution:  player.GetVar("improvement_attribution"),
  difficulty_attribution:   player.GetVar("difficulty_attribution"),
  new_criterion_focus:      player.GetVar("new_criterion_focus"),
  new_intention:            player.GetVar("new_intention"),
  new_practice_action:      player.GetVar("new_practice_action"),
  new_practice_strategy:    player.GetVar("new_practice_strategy"),
  new_practice_condition:   player.GetVar("new_practice_condition"),
  new_practice_time:        player.GetVar("new_practice_time")

};

// ── Send data to Google Sheets ───────────────────────────────

var xhr = new XMLHttpRequest();

xhr.open("POST", "https://script.google.com/macros/s/AKfycbxDbpb2y8wn1ssebSyDdebCkK2NlFR7zNQC8hLY3A6lB6lpDb2_5AtfM62qYQWORgw2Qg/exec", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function() {
  if (xhr.status === 200) {
    // Data sent successfully — do nothing, learner experience continues
    console.log("Session data saved.");
  } else {
    console.log("Error saving data: " + xhr.status);
  }
};

xhr.send(JSON.stringify(data));

// ============================================================
// NOTE: This runs silently in the background.
// The learner will not see anything happen.
// Storyline will continue to the next trigger (jump) normally.
// ============================================================

}

function Script2()
{
  var player = GetPlayer();

// ── Read all Storyline variables ─────────────────────────────

var data = {

  // META
  learner_name:             player.GetVar("learner_name"),
  current_band_score:       player.GetVar("current_band_score"),
  target_band_score:        player.GetVar("target_band_score"), 
  session_count:            player.GetVar("session_count"),

  // FORETHOUGHT
  task_type:                player.GetVar("task_type"),
  criterion_focus:          player.GetVar("criterion_focus"),
  smart_goal_action:        player.GetVar("smart_goal_action"),
  smart_goal_method:        player.GetVar("smart_goal_method"),
  smart_goal_weeks:         player.GetVar("smart_goal_weeks"),
  motivation_why:           player.GetVar("motivation_why"),
  self_efficacy:            player.GetVar("self_efficacy"),
  outcome_expect:           player.GetVar("outcome_expect"),
  anxiety_named:            player.GetVar("anxiety_named"),
  struggle_reframe:         player.GetVar("struggle_reframe"),

  // PERFORMANCE
  gap_identified:           player.GetVar("gap_identified"),
  strategy_review:          player.GetVar("strategy_review"),
  strategy_refinement:      player.GetVar("strategy_refinement"),
  strategy_impact:          player.GetVar("strategy_impact"),
  strategy_realigned:       player.GetVar("strategy_realigned"),

  // REFLECTION
  improvement_attribution:  player.GetVar("improvement_attribution"),
  difficulty_attribution:   player.GetVar("difficulty_attribution"),
  new_criterion_focus:      player.GetVar("new_criterion_focus"),
  new_intention:            player.GetVar("new_intention"),
  new_practice_action:      player.GetVar("new_practice_action"),
  new_practice_strategy:    player.GetVar("new_practice_strategy"),
  new_practice_condition:   player.GetVar("new_practice_condition"),
  new_practice_time:        player.GetVar("new_practice_time")

};

// ── Send data to Google Sheets ───────────────────────────────

var xhr = new XMLHttpRequest();

xhr.open("POST", "https://script.google.com/macros/s/AKfycbxDbpb2y8wn1ssebSyDdebCkK2NlFR7zNQC8hLY3A6lB6lpDb2_5AtfM62qYQWORgw2Qg/exec", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function() {
  if (xhr.status === 200) {
    // Data sent successfully — do nothing, learner experience continues
    console.log("Session data saved.");
  } else {
    console.log("Error saving data: " + xhr.status);
  }
};

xhr.send(JSON.stringify(data));

// ============================================================
// NOTE: This runs silently in the background.
// The learner will not see anything happen.
// Storyline will continue to the next trigger (jump) normally.
// ============================================================

}

