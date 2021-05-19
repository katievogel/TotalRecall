(ns com.github.katievogel.totalrecall.views
  (:require [com.github.katievogel.totalrecall.tile-boards :refer [TileBoard]]
            [re-frame.core :as rf]
            [clojure.pprint]))

(defn ScoreBoard []
  [:div.scoreboard
   [:p.scoring "1 point per pair matched"]
   [:div  "Score: " @(rf/subscribe [:show-score])]
   [:div "Strikes: " @(rf/subscribe [:show-strikes])]])

(defn StartGame []
  [:button.btn.btn-success.btn-lg.start-button {:style    {:display (if @(rf/subscribe [:get-start-display]) "none" nil)}
                                                :on-click (fn []
                                                            (rf/dispatch [:hide-start])
                                                            (rf/dispatch [:shuffle-tiles]))} "Start Game"])

(defn NextBoard []
  (let [score @(rf/subscribe [:show-score])]
    [:button.next-board {:style    {:display (if (and (zero? (mod score 4)) (not= score 0)) "initial" "none")}
                         :on-click (fn [] (rf/dispatch [:shuffle-tiles]))} "Next Board"]))

(defn NewGame []
  (let [strikes @(rf/subscribe [:show-strikes])
        timeout-id @(rf/subscribe [:get-timeout-id])]
    [:button.new-game {:style    {:display (if (< strikes 3) "none" nil)}
                       :on-click (fn []
                                   (js/clearTimeout timeout-id)
                                   (rf/dispatch [:reset-game]))} "New Game"]))

(defn TotalRecallApp []
  [:div.container
   [:div.topnav
    [:div.title [:h1 "Food Pairings"]]
    [:div.sub-title [:p "I'll take pizza, with a side of pizza."]]]
   [:nav.navbar.bottomnav
    [ScoreBoard]]
   [:div
    [NextBoard]
    [NewGame]
    [StartGame]
    [TileBoard]

    #_[:pre
       #_(pr-str @(rf/subscribe [:get-db]))
       (with-out-str (clojure.pprint/pprint @(rf/subscribe [:get-db])))]]])
