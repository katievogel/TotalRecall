(ns com.github.katievogel.totalrecall.tile-boards
  (:require [com.github.katievogel.totalrecall.play-action]
            [reagent.dom]
            [re-frame.core :as rf]))

(defn render-tile []
  (let [board @(rf/subscribe [:get-board])]
    (for [{:keys [pair id image] :as record}
          board]
      ^{:key id} [:div.col [:div.p-3.border.bg-light
                            {:on-click (fn []
                                         (rf/dispatch [:pick-tile record])
                                         (println "clicked, id: " id))}
                            [:img {:src image}]]])))

(defn TileBoard []
  [:div.container
   [:div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3
    (render-tile)]])


