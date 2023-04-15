Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :orders, only: :index
      resources :users, only: :index
      resources :items
    end
  end
end
