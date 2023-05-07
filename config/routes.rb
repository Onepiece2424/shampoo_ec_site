Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sessions: 'api/v1/auth/sessions'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      resources :orders, only: :index

      resources :users
      post 'users/fetch_userdata', to: 'users#fetch_userdata'
      # post 'users/register_token', to: 'users#register_token'

      resources :carts
      # post 'carts/add_item' => 'carts#add_item'
      resources :items
    end
  end
end
