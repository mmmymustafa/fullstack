Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :artists, only: [:create, :index ,:show]
    resources :albums, only: [:index ,:show] do
      resources :comments, only: [:create, :index, :show, :update, :destroy]
    end
    resources :tracks, only: [:index ,:show] do
      resources :comments, only: [:create, :index, :show, :update, :destroy]
    end
    resources :annotations, only: [:index, :create, :update, :show] do
      resources :comments, only: [:create, :index, :show, :update, :destroy]
    end
    resources :upvotes, only: [:create, :index, :show, :update, :destroy]
  end
end
