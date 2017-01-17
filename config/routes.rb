Rails.application.routes.draw do

  root "tags#index"
  resources :tags, only: [:index, :create, :destroy, :show]

end
