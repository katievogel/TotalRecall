(ns com.github.katievogel.totalrecall.state)

(def initial-state
  {:score 0
   :strikes 0
   :first-pick nil
   :second-pick nil
   :tile-pair-map  {1  {:pair 1 :image "assets/cake.png" :face-up true}
                    2  {:pair 1 :image "assets/cake.png" :face-up true}
                    4  {:pair 2 :image "assets/croissant.png" :face-up true}
                    3  {:pair 2 :image "assets/croissant.png" :face-up true}
                    5  {:pair 3 :image "assets/fries.png" :face-up true}
                    6  {:pair 3 :image "assets/fries.png" :face-up true}
                    7  {:pair 4 :image "assets/hamburger.png" :face-up true}
                    8  {:pair 4 :image "assets/hamburger.png" :face-up true}
                    9  {:pair 5 :image "assets/ice-cream.png" :face-up true}
                    10 {:pair 5 :image "assets/ice-cream.png" :face-up true}
                    11 {:pair 6 :image "assets/pie.png" :face-up true}
                    12 {:pair 6 :image "assets/pie.png" :face-up true}
                    13 {:pair 7 :image "assets/pho-soup.png" :face-up true}
                    14 {:pair 7 :image "assets/pho-soup.png" :face-up true}
                    15 {:pair 8 :image "assets/pizza.png" :face-up true}
                    16 {:pair 8 :image "assets/pizza.png" :face-up true}
                    17 {:pair 9 :image "assets/sushi.png" :face-up true}
                    18 {:pair 9 :image "assets/sushi.png" :face-up true}
                    19 {:pair 10 :image "assets/taco.png" :face-up true}
                    20 {:pair 10 :image "assets/taco.png" :face-up true}}
   :board nil
   :timeout-id nil
   :cleared-pairs #{}})
