Rails.application.routes.draw do
  devise_for :users
  # root to: "items#index"
  namespace :api do
    namespace :v1 do
      resources :orders, only: :index
      resources :users, only: :index
      resources :carts, only: :index
      resources :items
    end
  end
end
