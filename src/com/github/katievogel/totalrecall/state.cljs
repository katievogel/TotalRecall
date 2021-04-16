(ns com.github.katievogel.totalrecall.state
  (:require [reagent.core :as r]))


;app-db contains:
;player name
;scores
;tiles picks, states - up or down
;strikes

(def tile-pair-map [{:id 1 :pair 1 :face-up false}
                    {:id 2 :pair 1 :face-up false}
                    {:id 3 :pair 2 :face-up false}
                    {:id 4 :pair 2 :face-up false}
                    {:id 5 :pair 3 :face-up false}
                    {:id 6 :pair 3 :face-up false}
                    {:id 7 :pair 4 :face-up false}
                    {:id 8 :pair 4 :face-up false}
                    {:id 9 :pair 5 :face-up false}
                    {:id 10 :pair 5 :face-up false}
                    {:id 11 :pair 6 :face-up false}
                    {:id 12 :pair 6 :face-up false}
                    {:id 13 :pair 7 :face-up false}
                    {:id 14 :pair 7 :face-up false}
                    {:id 15 :pair 8 :face-up false}
                    {:id 16 :pair 8 :face-up false}
                    {:id 17 :pair 9 :face-up false}
                    {:id 18 :pair 9 :face-up false}
                    {:id 19 :pair 10 :face-up false}
                    {:id 20 :pair 10 :face-up false}])

(def initial-state
  {:score 0
   :strikes 0
   :all-tiles-face-down true
   :first-pick nil
   :second-pick nil
   :board nil
   :start-button-display false})

; (shuffle tile-pair-map)

(defonce app-db (r/atom initial-state))