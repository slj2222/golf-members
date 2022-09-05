if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_GOLF-MEMBERS', domain: 'http://localhost:3001'
    # name-of-you-app-json-api
  else
    Rails.application.config.session_store :cookie_store, key: '_GOLF-MEMBERS'
end