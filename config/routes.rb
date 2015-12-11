Rails.application.routes.draw do

  root 'welcome#index'
  resources :team, only: [:index]
  resources :media, only: [:index]
  resources :contact, only: [:index]



end
