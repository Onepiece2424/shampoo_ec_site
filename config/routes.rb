Rails.application.routes.draw do
  # devise_for :users, skip: [:registrations]
  namespace :api do
    namespace :v1 do
      devise_for :users
      # resources :registrations, only: [:create]
      # devise_for :users, controllers: {
      #   registrations: 'registrations'
      # }
      mount_devise_token_auth_for 'User', at: 'auth'
      as :user do
        # Define routes for User within this block.
      end
      resources :orders, only: :index
      resources :users, only: :index
      post 'carts/add_item' => 'carts#add_item'
      resources :items
    end
  end
end
