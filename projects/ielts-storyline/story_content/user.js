function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6h3v9Ja20sJ":
        Script1();
        break;
      case "6iuaboPhM5W":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var url = "https://script.google.com/macros/s/AKfycbxDbpb2y8wn1ssebSyDdebCkK2NlFR7zNQC8hLY3A6lB6lpDb2_5AtfM62qYQWORgw2Qg/exec?" +
  "learner_name=" + encodeURIComponent(player.GetVar("learner_name")) +
  "&current_band_score=" + encodeURIComponent(player.GetVar("current_band_score")) +
  "&target_band_score=" + encodeURIComponent(player.GetVar("target_band_score")) +
  "&session_count=" + encodeURIComponent(player.GetVar("session_count")) +
  "&task_type=" + encodeURIComponent(player.GetVar("task_type")) +
  "&criterion_focus=" + encodeURIComponent(player.GetVar("criterion_focus")) +
  "&smart_goal_action=" + encodeURIComponent(player.GetVar("smart_goal_action")) +
  "&smart_goal_method=" + encodeURIComponent(player.GetVar("smart_goal_method")) +
  "&smart_goal_weeks=" + encodeURIComponent(player.GetVar("smart_goal_weeks")) +
  "&motivation_why=" + encodeURIComponent(player.GetVar("motivation_why")) +
  "&self_efficacy=" + encodeURIComponent(player.GetVar("self_efficacy")) +
  "&outcome_expect=" + encodeURIComponent(player.GetVar("outcome_expect")) +
  "&anxiety_named=" + encodeURIComponent(player.GetVar("anxiety_named")) +
  "&struggle_reframed=" + encodeURIComponent(player.GetVar("struggle_reframed")) +
  "&gap_identified=" + encodeURIComponent(player.GetVar("gap_identified")) +
  "&strategy_review=" + encodeURIComponent(player.GetVar("strategy_review")) +
  "&strategy_refinement=" + encodeURIComponent(player.GetVar("strategy_refinement")) +
  "&strategy_realigned=" + encodeURIComponent(player.GetVar("strategy_realigned")) +
  "&gap_impact=" + encodeURIComponent(player.GetVar("gap_impact")) +
  "&improvement_attribution=" + encodeURIComponent(player.GetVar("improvement_attribution")) +
  "&difficulty_attribution=" + encodeURIComponent(player.GetVar("difficulty_attribution")) +
  "&new_criterion_focus=" + encodeURIComponent(player.GetVar("new_criterion_focus")) +
  "&new_intention=" + encodeURIComponent(player.GetVar("new_intention")) +
  "&new_practice_action=" + encodeURIComponent(player.GetVar("new_practice_action")) +
  "&new_practice_strategy=" + encodeURIComponent(player.GetVar("new_practice_strategy")) +
  "&new_practice_condition=" + encodeURIComponent(player.GetVar("new_practice_condition")) +
  "&new_practice_time=" + encodeURIComponent(player.GetVar("new_practice_time"));

fetch(url, {
  method: "GET",
  mode: "no-cors"
});
}

function Script2()
{
  var player = GetPlayer();

var url = "https://script.google.com/macros/s/AKfycbxDbpb2y8wn1ssebSyDdebCkK2NlFR7zNQC8hLY3A6lB6lpDb2_5AtfM62qYQWORgw2Qg/exec?" +
  "learner_name=" + encodeURIComponent(player.GetVar("learner_name")) +
  "&current_band_score=" + encodeURIComponent(player.GetVar("current_band_score")) +
  "&target_band_score=" + encodeURIComponent(player.GetVar("target_band_score")) +
  "&session_count=" + encodeURIComponent(player.GetVar("session_count")) +
  "&task_type=" + encodeURIComponent(player.GetVar("task_type")) +
  "&criterion_focus=" + encodeURIComponent(player.GetVar("criterion_focus")) +
  "&smart_goal_action=" + encodeURIComponent(player.GetVar("smart_goal_action")) +
  "&smart_goal_method=" + encodeURIComponent(player.GetVar("smart_goal_method")) +
  "&smart_goal_weeks=" + encodeURIComponent(player.GetVar("smart_goal_weeks")) +
  "&motivation_why=" + encodeURIComponent(player.GetVar("motivation_why")) +
  "&self_efficacy=" + encodeURIComponent(player.GetVar("self_efficacy")) +
  "&outcome_expect=" + encodeURIComponent(player.GetVar("outcome_expect")) +
  "&anxiety_named=" + encodeURIComponent(player.GetVar("anxiety_named")) +
  "&struggle_reframed=" + encodeURIComponent(player.GetVar("struggle_reframed")) +
  "&gap_identified=" + encodeURIComponent(player.GetVar("gap_identified")) +
  "&strategy_review=" + encodeURIComponent(player.GetVar("strategy_review")) +
  "&strategy_refinement=" + encodeURIComponent(player.GetVar("strategy_refinement")) +
  "&strategy_realigned=" + encodeURIComponent(player.GetVar("strategy_realigned")) +
  "&gap_impact=" + encodeURIComponent(player.GetVar("gap_impact")) +
  "&improvement_attribution=" + encodeURIComponent(player.GetVar("improvement_attribution")) +
  "&difficulty_attribution=" + encodeURIComponent(player.GetVar("difficulty_attribution")) +
  "&new_criterion_focus=" + encodeURIComponent(player.GetVar("new_criterion_focus")) +
  "&new_intention=" + encodeURIComponent(player.GetVar("new_intention")) +
  "&new_practice_action=" + encodeURIComponent(player.GetVar("new_practice_action")) +
  "&new_practice_strategy=" + encodeURIComponent(player.GetVar("new_practice_strategy")) +
  "&new_practice_condition=" + encodeURIComponent(player.GetVar("new_practice_condition")) +
  "&new_practice_time=" + encodeURIComponent(player.GetVar("new_practice_time"));

fetch(url, {
  method: "GET",
  mode: "no-cors"
});
}

