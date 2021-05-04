(ns com.github.katievogel.totalrecall.tile-boards
  (:require [com.github.katievogel.totalrecall.play-action]
            [reagent.dom]
            [re-frame.core :as rf]))


(defn render-tile []
  (let [board @(rf/subscribe [:get-board])
        check-pairs @(rf/subscribe [:check-cleared-pairs])
        get-picks @(rf/subscribe [:get-picks])]
    (println "check-pairs: " check-pairs)
    [:<>
     (doall (for [id board]
              ^{:key id}
              [:div.col
               [:div.p-3.border.bg-light.flip-card
                [:div.flip-card-inner
                 [:div.flip-card-front
                  {:class    [(when (contains? check-pairs id) "disabled")]
                   :on-click (fn []
                               (when-not (or (contains? check-pairs id) (contains? get-picks id))
                                 (rf/dispatch [:pick-tile id])))}
                  [:img {:src (let [{:keys [image face-up]} @(rf/subscribe [:get-tile id])]
                                (if face-up image))}]]
                 [:div.flip-card-back]]]]))]))


(defn TileBoard []
  [:div.container
   [:div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3
    [render-tile]]])


