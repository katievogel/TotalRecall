(ns com.github.katievogel.totalrecall.core
  (:require [com.github.katievogel.totalrecall.views :refer [TotalRecallApp]]
            [goog.dom :as gdom]
            [goog.functions :as gfunctions]
            [oops.core :refer [ocall]]
            [re-frame.core :as rf]
            [reagent.dom :as reagent-dom]))

(def app-container-el (gdom/getElement "appContainer"))

(def begin-render!
  (gfunctions/once
    (fn []
      (reagent-dom/render [(var TotalRecallApp)] app-container-el))))

(defn init! []
  (println "it's running")
  (rf/dispatch-sync [:reset-game])
  (begin-render!))

(ocall js/window "addEventListener" "load" init!)
