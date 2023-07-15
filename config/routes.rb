Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sessions: 'api/v1/auth/sessions'
      }

      namespace :auth do
        resources :sessions
      end

      resources :orders
      resources :users
      resources :checkouts, only: [:create]
      post 'users/fetch_userdata', to: 'users#fetch_userdata'
      post 'users/logout', to: 'users#logout'
      resources :carts
      resources :cart_items
      resources :items
    end
  end
  resources :webhooks, only: [:create]
end
