(ns com.github.katievogel.totalrecall.state
  (:require [reagent.core :as r]))


;app-db contains:
;player name
;scores
;tiles picks, states - up or down
;strikes

(def initial-state
  {:player-name nil
   :score 0
   :strikes 0
   :all-tiles-face-down true
   :first-pick nil
   :second-pick nil})

(defonce app-db (r/atom initial-state))