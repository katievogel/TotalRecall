(ns com.github.katievogel.totalrecall.play-action
  (:require [com.github.katievogel.totalrecall.state :refer [initial-state]]
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
  :temp-clear
  (fn [db]
    (-> db
        (assoc :first-pick nil)
        (assoc :second-pick nil))))

(rf/reg-sub
  :show-score
  (fn [db [_]]
    (:score db)))

(rf/reg-sub
  :show-strikes
  (fn [db [_]]
    (:strikes db)))


;----just for seeing state on page----
(rf/reg-sub
  :get-db
  (fn [db [_]]
    db))