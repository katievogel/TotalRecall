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
   (cond
      (= (:first-pick db) nil) (assoc db :first-pick record)
      (= (:second-pick db) nil) (-> db
                                  (assoc :second-pick record)
                                  (pick-tile-eval))
      :else db)))



;(rf/reg-sub
;  :get-first-tile-pick
;  (fn [db [_]]
;    (:first-pick db)))
;
;(rf/reg-sub
;  :get-second-tile-pick
;  (fn [db [_]]
;    (:second-pick db)))


;----just for seeing state on page----
(rf/reg-sub
  :get-db
  (fn [db [_]]
    db))