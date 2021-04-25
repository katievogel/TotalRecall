(ns com.github.katievogel.totalrecall.state)

(def initial-state
  {:score 0
   :strikes 0
   :first-pick nil
   :second-pick nil
   :tile-pair-map  {1  {:pair 1 :image "assets/cake.png" :face-up false}
                    2  {:pair 1 :image "assets/cake.png" :face-up false}
                    3  {:pair 2 :image "assets/croissant.png" :face-up false}
                    4  {:pair 2 :image "assets/croissant.png" :face-up false}
                    5  {:pair 3 :image "assets/fries.png" :face-up false}
                    6  {:pair 3 :image "assets/fries.png" :face-up false}
                    7  {:pair 4 :image "assets/hamburger.png" :face-up false}
                    8  {:pair 4 :image "assets/hamburger.png" :face-up false}
                    9  {:pair 5 :image "assets/ice-cream.png" :face-up false}
                    10 {:pair 5 :image "assets/ice-cream.png" :face-up false}
                    11 {:pair 6 :image "assets/pie.png" :face-up false}
                    12 {:pair 6 :image "assets/pie.png" :face-up false}
                    13 {:pair 7 :image "assets/pho-soup.png" :face-up false}
                    14 {:pair 7 :image "assets/pho-soup.png" :face-up false}
                    15 {:pair 8 :image "assets/pizza.png" :face-up false}
                    16 {:pair 8 :image "assets/pizza.png" :face-up false}
                    17 {:pair 9 :image "assets/sushi.png" :face-up false}
                    18 {:pair 9 :image "assets/sushi.png" :face-up false}
                    19 {:pair 10 :image "assets/taco.png" :face-up false}
                    20 {:pair 10 :image "assets/taco.png" :face-up false}}
   :board nil
   :start-button-display false
   :cleared-pairs #{}})
