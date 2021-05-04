(ns com.github.katievogel.totalrecall.play-action
  (:require [com.github.katievogel.totalrecall.state :as state]
            [re-frame.core :as rf]))

(defn pick-tile-eval [{:keys [first-pick second-pick] :as db}]
  (let [first-pick-pair (get-in db [:tile-pair-map first-pick :pair])
        second-pick-pair (get-in db [:tile-pair-map second-pick :pair])]
    (cond
      (= first-pick-pair second-pick-pair) (-> db
                                               (update :cleared-pairs (fn [x] (conj x first-pick second-pick)))
                                               (update-in [:score] inc)
                                               (assoc-in [:first-pick] nil)
                                               (assoc-in [:second-pick] nil))
      :else (do
              (js/setTimeout (fn [] (rf/dispatch [:clear-picks-flip-back]))3000)
              (update-in db [:strikes] inc)))))

(rf/reg-event-db
  :pick-tile
  (fn [db [_ id]]
    (let [strikes (:strikes db)]
      (cond
        (>= strikes 3) db
        (not (:first-pick db)) (-> db
                                   (assoc :first-pick id)
                                   (assoc-in [:tile-pair-map id :face-up] true))
        (not (:second-pick db)) (-> db
                                    (assoc :second-pick id)
                                    (assoc-in [:tile-pair-map id :face-up] true)
                                    (pick-tile-eval))
        :else db))))

(rf/reg-event-db
  :shuffle-tiles
  (fn [db]
    (do
      (js/setTimeout (fn [] (rf/dispatch [:do-timed-tile-flip])) 5000)
      (assoc db :board (shuffle (keys (:tile-pair-map db)))))))

(rf/reg-event-db
  :clear-picks-flip-back
  (fn [{:keys [first-pick second-pick cleared-pairs] :as db}]
    (let [first-desired-state (contains? cleared-pairs first-pick)
          second-desired-state (contains? cleared-pairs second-pick)]
      (-> db
          (assoc-in [:tile-pair-map first-pick :face-up] first-desired-state)
          (assoc-in [:tile-pair-map second-pick :face-up] second-desired-state)
          (assoc-in [:first-pick] nil)
          (assoc-in [:second-pick] nil)))))

(rf/reg-event-db
  :hide-start
  (fn [db]
    (assoc db :start-button-display true)))

(rf/reg-event-db
  :reset-game
  (fn [_db]
    state/initial-state))

(rf/reg-event-db
  :do-timed-tile-flip
  (fn [{:keys [tile-pair-map] :as db}]
    (println "flipping")
    (let [new-map (into {}
                        (map (fn [[key value]]
                               [key (assoc value :face-up false)]) tile-pair-map))]
      (assoc db :tile-pair-map new-map))))

(rf/reg-sub
  :show-score
  (fn [db [_]]
    (:score db)))

(rf/reg-sub
  :show-strikes
  (fn [db [_]]
    (:strikes db)))

(rf/reg-sub
  :get-board
  (fn [db [_]]
    (:board db)))

(rf/reg-sub
  :get-picks
  (fn [db [_]]
    #{(:first-pick db)
      (:second-pick db)}))

(rf/reg-sub
  :get-tile
  (fn [db [_ id]]
    (get-in db [:tile-pair-map id])))

(rf/reg-sub
  :check-cleared-pairs
  (fn [db [_]]
    (:cleared-pairs db)))

(rf/reg-sub
  :get-start-display
  (fn [db [_]]
    (:start-button-display db)))

;----just for seeing state on page----
(rf/reg-sub
  :get-db
  (fn [db [_]]
    db))