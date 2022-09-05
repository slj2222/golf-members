class Api::V1::SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create, :destroy]

  def index
    render json: session
  end

  def create
    user = Member.find_by(username: params[:username])
    if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
    else
        render json: {errors: ["Invalid username or password"]}, status: :unauthorized
    end
end

  

  def destroy
       
    session.delete :user_id
    head :no_content
  end

  # private
  # def session_params
  #       params.require(:member).permit(:username, :password)
  # end
end