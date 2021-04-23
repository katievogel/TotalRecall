(ns com.github.katievogel.totalrecall.play-action
  (:require [com.github.katievogel.totalrecall.state :as state]
            [re-frame.core :as rf]))


;player clicks tile
;tile flips
;player clicks another tile
;tile flips
;if matches, tiles stay flipped
;if wrong, flip back over
(defn pick-tile-eval [db]
  (let [first-pick-pair (get-in db [:first-pick :pair])
        second-pick-pair (get-in db [:second-pick :pair])]
    (cond
      (= first-pick-pair second-pick-pair) (update-in db [:score] inc)
      :else (update-in db [:strikes] inc))))

(rf/reg-event-db
  :pick-tile
  (fn [db [_ record]]
    (let [strikes (:strikes db)]
      (cond
        (>= strikes 3) db
        (= (:first-pick db) nil) (assoc db :first-pick record)
        (= (:second-pick db) nil) (-> db
                                      (assoc :second-pick record)
                                      (pick-tile-eval))
        :else db))))

(rf/reg-event-db
  :shuffle-tiles
  (fn [db]
    (assoc db :board (shuffle state/tile-pair-map))))

(rf/reg-event-db
  :pair-complete
  (fn [db]
    (let [first-pick-pair (get-in db [:first-pick :pair])
          second-pick-pair (get-in db [:second-pick :pair])
          first-pick-id (get-in db [:first-pick :id])
          second-pick-id (get-in db [:second-pick :id])]
      (cond
          (= first-pick-pair second-pick-pair) (update db :cleared-pairs (fn [x] (conj x first-pick-id second-pick-id)))
          :else db))))

(rf/reg-event-db
  :temp-clear
  (fn [db]
    (-> db
        (assoc :first-pick nil)
        (assoc :second-pick nil))))

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