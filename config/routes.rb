Rails.application.routes.draw do
  
  
  # resources :members, only: (:index)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  namespace :api do
    namespace :v1 do
      root to: "application#cookie"
      resources :members, only: [:index, :show, :create]
      resources :reservations, only: [:index, :show, :create]
      resources :sessions, only: [:index, :create, :destroy]

      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      get "/me", to: "members#show"

      post "/allPublicMembers", to: "members#allPublicMembers"    
      
    end
  end
end
