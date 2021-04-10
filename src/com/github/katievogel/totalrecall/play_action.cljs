(ns com.github.katievogel.totalrecall.play-action
  (:require [com.github.katievogel.totalrecall.state :refer [initial-state]]
            [re-frame.core :as rf]))


;player clicks tile
;tile flips
;player clicks another tile
;tile flips
;if matches, tiles stay flipped
;if wrong, flip back over
(rf/reg-event-db
  :pick-tile
  (fn [db [_ record]]
    (cond
      (= (:first-pick db) nil) (assoc db :first-pick record)
      (= (:second-pick db) nil) (assoc db :second-pick record)
      :else nil)))

(comment
  (= :first-pick nil))

(rf/reg-sub
  :get-db
  (fn [db [_]]
    db))
;(rf/reg-sub
;  :get-first-tile-pick
;  (fn [db [_]]
;    (:first-pick db)))
;
;(rf/reg-sub
;  :get-second-tile-pick
;  (fn [db [_]]
;    (:second-pick db)))

;(defn click-tile [first-pick second-pick]
;  (let))