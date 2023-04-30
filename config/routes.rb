Rails.application.routes.draw do
  # devise_for :users, skip: [:registrations]
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
      
      resources :orders, only: :index
      resources :users, only: :index
      post 'carts/add_item' => 'carts#add_item'
      resources :items
    end
  end
end
