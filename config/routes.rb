Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sessions: 'api/v1/auth/sessions'
      }

      namespace :auth do
        resources :sessions, only: [:index]
      end

      resources :orders, only: [:index]
      resources :users
      post 'users/fetch_userdata', to: 'users#fetch_userdata'
      resources :carts
      resources :items
    end
  end
end
