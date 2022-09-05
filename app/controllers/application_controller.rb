class ApplicationController < ActionController::API
      #     skip_before_action :verify_authenticity_token

      before_action :set_csrf_cookie
      include ActionController::Cookies
      include ActionController::RequestForgeryProtection
      # include ActionController::Cookies
      # include ActionController::RequestForgeryProtection
      protect_from_forgery with: :exception 
      def cookie 
            "ok"
      end

      private 

      def set_csrf_cookie
            cookies["CSRF-TOKEN"] = {
                  value: form_authenticity_token,
                  domain: :all 
            }
      end
      # protect_from_forgery unless: -> { request.format.json? }
      before_action :authorized
      
      def authorized
            @current_user = Member.find_by(id: session[:user_id])
            render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
      end



end
