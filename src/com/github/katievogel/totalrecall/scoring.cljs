(ns com.github.katievogel.totalrecall.scoring)


;score: num pairs matched
;num boards completed
;limit of 3 strikes
;game ends after all strikes are gone

(defn ScoreBoard []
  [:div.scoreboard
   [:p.scoring "1 point per pair matched. 5 points per board cleared."]
   [:p "Score: 000000"]
   [:p "Strikes: X X X"]])

;(defn score []
;  (cond (= :tile-id :tile-id) (inc score)
;        :else (inc strike)))