(ns com.github.katievogel.totalrecall.scoring
  (:require [re-frame.core :as rf]))


;score: num pairs matched
;num boards completed
;limit of 3 strikes
;game ends after all strikes are gone

(defn ScoreBoard []
  [:div.scoreboard
   [:p.scoring "1 point per pair matched. 5 points per board cleared."]
   [:div  "Score: " @(rf/subscribe [:show-score])]
   [:div "Strikes: " @(rf/subscribe [:show-strikes])]])
