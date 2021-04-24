(ns com.github.katievogel.totalrecall.tile-boards
  (:require [com.github.katievogel.totalrecall.play-action]
            [reagent.dom]
            [re-frame.core :as rf]))


(defn render-tile []
  (let [board @(rf/subscribe [:get-board])
        check-pairs @(rf/subscribe [:check-cleared-pairs])]
    (for [{:keys [_pair id image face-up] :as record}
          board]
      ^{:key id}
      [:div.col
       [:div.p-3.border.bg-light.flip-card
        [:div.flip-card-inner
         [:div.flip-card-front
          {:class    [(when (contains? check-pairs id) "disabled")]
           :on-click (when-not (contains? check-pairs id)
                       (fn []
                         (rf/dispatch [:pick-tile record])
                         (rf/dispatch [:pair-complete])
                         (println "clicked, id: " id)))}
          [:img {:src (if face-up image)}]]
         [:div.flip-card-back]]]])))


(defn TileBoard []
  [:div.container
   [:div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3
    (render-tile)]])


