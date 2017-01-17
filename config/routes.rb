Rails.application.routes.draw do

  resources :tags, only: [:index, :create, :destroy]

end
