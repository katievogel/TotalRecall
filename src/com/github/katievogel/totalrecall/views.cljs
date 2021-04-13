(ns com.github.katievogel.totalrecall.views
  (:require [com.github.katievogel.totalrecall.tile-boards :refer [TileBoard]]
            [com.github.katievogel.totalrecall.scoring :refer [ScoreBoard]]
            [re-frame.core :as rf]))

(defn TotalRecallApp []
  [:div
   [:h1 "Total Recall App"]
   [ScoreBoard]
   [:button {:on-click (fn [] (rf/dispatch [:temp-clear]))}
    "temp - clear picks"]
   [TileBoard]
   [:pre (pr-str @(rf/subscribe [:get-db]))]])


;headers
;start button / grid
;scoreboard
;next button