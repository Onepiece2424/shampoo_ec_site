Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :orders, only: :index
      resources :users, only: :index
      post 'carts/add_item' => 'carts#add_item'
      resources :items
    end
  end
end
