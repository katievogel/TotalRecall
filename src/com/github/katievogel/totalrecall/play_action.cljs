(ns com.github.katievogel.totalrecall.play-action
  (:require [com.github.katievogel.totalrecall.state :as state]
            [re-frame.core :as rf]))

;...on start...
;start button is clicked
;function to show all tiles face up for 3s and then flip over
;state for each tile is updated for those 3s, then reverts

;...game play...
;player clicks tile
;function to flip tile fires
;state for face-up updates
;player clicks second tile
;function to flip tile fires again
;state for face-up updates
;if the tiles match, the tiles stay flipped and state remains updated
;if the tiles do not match, then the tiles will flip back over after 3 s,
;..and state updates again.

(defn pick-tile-eval [{:keys [first-pick second-pick] :as db}]
  (let [first-pick-pair (get-in db [:tile-pair-map first-pick :pair])
        second-pick-pair (get-in db [:tile-pair-map second-pick :pair])]
    (cond
      (= first-pick-pair second-pick-pair) (update-in db [:score] inc)
      :else (update-in db [:strikes] inc))))

(rf/reg-event-db
  :pick-tile
  (fn [db [_ id]]
    (let [strikes (:strikes db)]
      (cond
        (>= strikes 3) db
        (= (:first-pick db) nil) (-> db
                                     (assoc :first-pick id)
                                     (assoc-in [:tile-pair-map id :face-up] true))
        (= (:second-pick db) nil) (-> db
                                      (assoc :second-pick id)
                                      (assoc-in [:tile-pair-map id :face-up] true)
                                      (pick-tile-eval))
        :else db))))

(rf/reg-event-db
  :shuffle-tiles
  (fn [db]
    (assoc db :board (shuffle (keys (:tile-pair-map db))))))

(rf/reg-event-db
  :pair-complete
  (fn [{:keys [first-pick second-pick] :as db}]
    (let [first-pick-pair (get-in db [:tile-pair-map first-pick :pair])
          second-pick-pair (get-in db [:tile-pair-map second-pick :pair])]
      (cond
          (= first-pick-pair second-pick-pair) (update db :cleared-pairs (fn [x] (conj x first-pick second-pick)))
          :else db))))

(rf/reg-event-db
  :temp-clear
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