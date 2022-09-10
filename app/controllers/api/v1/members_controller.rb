class Api::V1::MembersController < ApplicationController
    skip_before_action :authorized, only: :create
    # wrap_parameters format: []

    # def index
    #     member = Member.all
    #     render json: member
    # end

    def index
        current_user = Member.find_by(session[:user_id])
    end

    def create
        user = Member.create!(member_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        # render json: @current_member
        user = Member.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { errors: "Not authorized" }, status: :unauthorized
        end
    end

 

    private
    def member_params
        # params.require(:member).permit(:username, :password, :password_confirmation, :first_name, :last_name, :membership_number, :phone_number, :email_address)
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :membership_number, :phone_number, :email_address, :is_admin )
        # :password_confirmation, :first_name, :last_name, :membership_number, :phone_number, :email_address
    end

end
