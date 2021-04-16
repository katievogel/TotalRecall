(ns com.github.katievogel.totalrecall.views
  (:require [com.github.katievogel.totalrecall.tile-boards :refer [TileBoard]]
            [re-frame.core :as rf]))

(defn ScoreBoard []
  [:div.scoreboard
   [:p.scoring "1 point per pair matched"]
   [:div  "Score: " @(rf/subscribe [:show-score])]
   [:div "Strikes: " @(rf/subscribe [:show-strikes])]])

(defn StartGame []
  [:button {:style    {:display (if @(rf/subscribe [:get-start-display]) "none" nil)}
            :on-click (fn []
                        (rf/dispatch [:hide-start])
                        (rf/dispatch [:shuffle-tiles]))} "Start Game"])

(defn NextBoard []
  (let [strikes @(rf/subscribe [:show-strikes])]
    [:button {:disabled (>= strikes 3)
              :on-click (fn [] (rf/dispatch [:shuffle-tiles]))} "Next Board"]))

(defn TotalRecallApp []
  [:div
   [:h1 "Total Recall App"]
   [ScoreBoard]
   [:button {:on-click (fn [] (rf/dispatch [:temp-clear]))}
    "temp - clear picks"]
   [NextBoard]
   [StartGame]
   [TileBoard]
   [:pre (pr-str @(rf/subscribe [:get-db]))]])
