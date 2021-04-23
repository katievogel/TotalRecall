(ns com.github.katievogel.totalrecall.state
  (:require [reagent.core :as r]))


;app-db contains:
;player name
;scores
;tiles picks, states - up or down
;strikes

(def tile-pair-map [{:id 1 :pair 1 :image "assets/cake.png" :face-up true}
                    {:id 2 :pair 1 :image "assets/cake.png" :face-up true}
                    {:id 3 :pair 2 :image "assets/croissant.png" :face-up true}
                    {:id 4 :pair 2 :image "assets/croissant.png" :face-up true}
                    {:id 5 :pair 3 :image "assets/fries.png" :face-up true}
                    {:id 6 :pair 3 :image "assets/fries.png" :face-up true}
                    {:id 7 :pair 4 :image "assets/hamburger.png" :face-up true}
                    {:id 8 :pair 4 :image "assets/hamburger.png" :face-up true}
                    {:id 9 :pair 5 :image "assets/ice-cream.png" :face-up true}
                    {:id 10 :pair 5 :image "assets/ice-cream.png" :face-up true}
                    {:id 11 :pair 6 :image "assets/pie.png" :face-up true}
                    {:id 12 :pair 6 :image "assets/pie.png" :face-up true}
                    {:id 13 :pair 7 :image "assets/pho-soup.png" :face-up true}
                    {:id 14 :pair 7 :image "assets/pho-soup.png" :face-up true}
                    {:id 15 :pair 8 :image "assets/pizza.png" :face-up true}
                    {:id 16 :pair 8 :image "assets/pizza.png" :face-up true}
                    {:id 17 :pair 9 :image "assets/sushi.png" :face-up true}
                    {:id 18 :pair 9 :image "assets/sushi.png" :face-up true}
                    {:id 19 :pair 10 :image "assets/taco.png" :face-up true}
                    {:id 20 :pair 10 :image "assets/taco.png" :face-up true}])

(def initial-state
  {:score 0
   :strikes 0
   :first-pick nil
   :second-pick nil
   :board nil
   :start-button-display false
   :cleared-pairs #{}})
