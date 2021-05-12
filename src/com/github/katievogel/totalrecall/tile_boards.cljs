(ns com.github.katievogel.totalrecall.tile-boards
  (:require [com.github.katievogel.totalrecall.play-action]
            [reagent.dom]
            [re-frame.core :as rf]))


;(defn flip-action [{:keys [face-up] :as db}]
;  (let [face-up-status (get-in db [:tile-pair-map face-up :face-up])]
;    (if face-up-status (js/card.classlist.toggle "is-flipped"))))

(defn render-tile []
  (let [board @(rf/subscribe [:get-board])
        check-pairs @(rf/subscribe [:check-cleared-pairs])
        get-picks @(rf/subscribe [:get-picks])]
    (println "check-pairs: " check-pairs)
    [:<>
     (doall (for [id board]
              (let [{:keys [image face-up]} @(rf/subscribe [:get-tile id])]
                ^{:key id}
                [:div.col
                 [:div.p-3.border.bg-light.tile-flip-space
                  [:div.card {:class (if face-up "is-flipped" nil)}
                   [:div.tile-face.tile-face-back
                    {:class    [(when (contains? check-pairs id) "disabled")]}
                    [:img {:src image}]]
                   [:div.tile-face.tile-face-front
                    {:on-click (fn []
                                 (when-not (or (contains? check-pairs id) (contains? get-picks id))
                                   (rf/dispatch [:pick-tile id])))}]]]])))]))




(defn TileBoard []
  [:div.container
   [:div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3
    [render-tile]]])


