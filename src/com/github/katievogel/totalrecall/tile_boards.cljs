(ns com.github.katievogel.totalrecall.tile-boards
  (:require [reagent.dom]))

;grid of tiles with images
;grid must be randomizable to create new game


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

(comment
  (group-by :id tile-pair-map))

(->> tile-pair-map
     shuffle
     (partition 4))

(defn tile-randomizer [tile-pair-map]
  (for [{:keys [pair id]}
        (shuffle tile-pair-map)]
    [:div.col [:div.p-3.border.bg-light "pair:" pair " id:" id]]))

(defn TileBoard []
  [:div.container
   [:div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3
    (tile-randomizer tile-pair-map)]])



